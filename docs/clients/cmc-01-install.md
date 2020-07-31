---
title: Installera
---

Detta är en kortfattad beskrivning av hur man får en Raspberry Pi (RPi) att agera som accesspunkt (wifi) och meddelandeserver (broker) för ett fristående trådlöst nätverk. Den är sedan grunden för att kunna använda sitt eget MRC-nät hemma eller på en modulträff.

Det är ganska många moment inblandade i arbetet, men inget av dem är speciellt svårt. Det viktiga är att göra allt i rätt ordning och att vara noga med de texter man skriver in. Att råka skriva stor bokstav istället för liten kan göra att ingenting fungerar. Fråga mig, jag har provat. :-)

## Vad du behöver

- Raspberry Pi 3, Raspberry Pi 4 eller Zero W (med wifi)
- Bildskärm med HDMI-kabel
- USB tangentbord
- USB-mus
- Strömförsörjning 5V/2A med micro USB-kontakt

Det går att installera och konfigurera en Raspberry Pi utan bildskärm, tangentbord och mus, men hur man gör det ingår inte i denna instruktion. Likaså har inte en Raspberry Pi Zero W möjlighet att ha bildskärm och i det fallet är det lättast att göra installationen på en Raspberry Pi 3 eller 4 och sedan enbart flytta SD-kortet till Zero W.

![Exempel på meddelandeserver](/img/clients/cmc-example.jpg)

## Förberedelser

- Ladda hem senaste [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) och bränn till ett microSD-kort med exempelvis [Etcher](https://etcher.io/). Alternativt kan du använda [Raspberry Pi Imager](https://www.raspberrypi.org/downloads/).
- Koppla in och starta RPi:en. Tänk på att ha tillräckligt bra strömförsörjning, annars finns risk att Raspbian hänger sig under (första) starten.
- Har du en RPi med grafisk gränssnitt börjar du med att göra de inställningar som föreslås.
- Börja med att uppdatera Raspbian (om du inte redan gjort det grafiskt):

```
     sudo apt-get update
     sudo apt-get upgrade
```

## Installera programvaran
- Vi börjar med att installera den programvara som behövs
```
     sudo apt-get install dnsmasq hostapd
```
- Stoppa programvaran så länge, tills vi har konfigurerat allting korrekt
```
    sudo systemctl stop dnsmasq
    sudo systemctl stop hostapd
```
- Om du inte startade om efter uppdateringen av Raspbian, är det dags att göra det nu:
```
    sudo reboot
```