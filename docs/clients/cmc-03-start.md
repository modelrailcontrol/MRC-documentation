---
title: Starta & felsök
---
Förhoppningsvis har allting gått bra och din Raspberry Pi är redo att starta som accesspunkt för ett eget trådlöst nätverk. Har du problem, kan du längre ner på sidan hitta några åtgärder att ta till.


## Starta allting
- Nu kan du starta funktionerna med nedanstående kommandon och om detta går bra ska RPi vara igång som accesspunkt:
```
    sudo systemctl start hostapd
    sudo systemctl start dnsmasq
```

## Ta bort grafiska gränssnittet
Om du startade RPi med grafisk gränssnitt, så kanske du hädanefter inte vill att det ska gå igång automatiskt. Du kan ändra den inställningen i RPi eget konfigureringsverktyg:
```
    sudo raspi-config
```
Välj där

- 3 Boot options
- B1 Desktop / CLI
- B3 B1 Console (eller möjligen B2 för automatisk inloggning)



## Felåtgärder

### Hostapd startar inte
När jag skulle starta `hostapd` fick jag följande felmeddelande:

`Failed to start hostapd.service: Unit hostapd.service is masked`

Det åtgärdade jag med kommandot:

`sudo systemctl unmask hostapd.service`

Sen fungerade start-kommandot som det skulle!

### Kontrollera hostapd.conf
Du kan kontrollera att `hostapd.conf` är korrekt genom att köra följande kommando:

`sudo hostapd -d /etc/hostapd/hostapd.conf`

### Accesspunkten startar inte
När jag senare startade om RPi startade inte längre accesspunkten. Jag fick det att fungera genom att i Terminalen skriva:

`sudo systemctl enable hostapd`