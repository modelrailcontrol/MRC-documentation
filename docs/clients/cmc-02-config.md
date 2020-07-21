---
title: Konfigurera
---
När nu programvaran är installerad, behöver det göras en del inställningar för att få det hela att fungera som du vill.

## Statisk IP-adress
Nu ska vi konfigurera en statiskt IP-adress för RPi
- Börja med att starta textredigeraren `nano` för att redigera dhcpcd.conf:

```
    sudo nano /etc/dhcpcd.conf
```

- Skriv in följande rader i slutet av filen:

```
    interface wlan0
        static ip_address=192.168.4.1/24
        nohook wpa_supplicant
```
- Spara sen filen (ctrl-o) och avsluta nano (ctrl-x)



## DHCP-server
- Nu ska DHCP-servern startas om så den får kännedom om den fasta IP-adressen:
```
    sudo service dhcpcd restart
```

- DHCP-servern ska nu konfigureras, men först kopierar vi undan originalfilen som vi inte har nytta av men vill bevara intakt:

```
    sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
    sudo nano /etc/dnsmasq.conf
```

- Lägg in följande text i filen:

```
    interface=wlan0      # Wireless interface wlan0
      dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
```
Vi talar alltså om att för nätverket wlan0 ska vi kunna dela ut IP-adresser mellan 192.168.4.2 och 192.168.4.20, med en "lånetid" på 24 timmar.


## Accesspunkt
- Börja med att skapa en ny konfigurationsfil
```
    sudo nano /etc/hostapd/hostapd.conf
```

- Lägg sedan in följande text i den:

```
    interface=wlan0
    driver=nl80211
    ssid=NameOfNetwork
    hw_mode=g
    channel=7
    wmm_enabled=0
    macaddr_acl=0
    auth_algs=1
    ignore_broadcast_ssid=0
    wpa=2
    wpa_passphrase=AardvarkBadgerHedgehog
    wpa_key_mgmt=WPA-PSK
    wpa_pairwise=TKIP
    rsn_pairwise=CCMP
```
Här har vi sagt att vi ska använda nätverkets kanal 7, det ska ha namnet (SSID) "NameOfNetwork" och lösenord "AardvarkBadgerHedgehog". Observera att varken nätverksnamnet (SSID) eller lösenordet ska omges av citationstecken. Lösenordet måste vara mellan 8 och 64 tecken långt.

Raden hw_mode bestämmer vilken nätverksstandard du använder:
```
    a = IEEE 802.11a (5 GHz)
    b = IEEE 802.11b (2.4 GHz)
    g = IEEE 802.11g (2.4 GHz)
    ad = IEEE 802.11ad (60 GHz).
```

- När du sen sparar filen, får du kanske återigen ange dess sökväg och namn (/etc/hostapd/hostapd.conf)

- Till sist ska vi tala om för systemet var denna konfigurationsfil finns:

```
    sudo nano /etc/default/hostapd
```

- Leta reda på raden `#DAEMON_CONF=""` och ändra den till (observera att # ska bort):

```
    DAEMON_CONF="/etc/hostapd/hostapd.conf"
```
