---
title: Programvaran
---

En förutsättning för att kunna  ladda programvaran till enheten är att du har installerat Arduinos utvecklingsmiljö (IDE) på din dator. Hur du gör dessa förberedelser beskrivs mer på sidan [Börja programmera](intro-arduino). 

Det är en engångsuppgift, så har du en gång gjort iordning en MRC-enhet ska du inte behöva göra om förberedelserna igen.

## Grundinställningar
Det du kan behöva ändra är en del inställningar i filen `mrcSettings.h`. Du gör ändringarna i en enkelt texteditor eller i Arduion IDE och sparar dem lokalt.


### In- och utgångar
Här kan man exempelvis vilja ändra vilka in-/utgångar som används av enheten:

```
// Pin
int pinVx1Led1 = D4;    // Which pin the first status led is attached to
int pinVx1Led2 = D3;    // Which pin the second status led is attached to
int pinVx1Button = D2;  // Which pin the first button is attached to
int pinVx1Servo = D1;   // Which pin the first servo is attached to
int pinVx2Servo = RX;   // Which pin the second servo is attached to
```

Följande in-/utgångar används som standard på en Wemos kretskortsdator:

|Användning|Vx1 pin|Vx2 pin|Kretkort|
|----------|:-----:|:-----:|:------:|
|Lysdiod 1 |  D4   |  D0   |  L1    |
|Lysdiod 2 |  D3   |  D5   |  L2    |
|Knapp     |  D2   |  D6   |  Btn   |
|Servo 1   |  D1   |  D7   |  S1    |
|Servo 2   |  Rx   |  Tx   |  S2    |


### Namn och lösenord
Om man vill ha ett annat startlösenord och -namn för hur man kommåt åt enhetens inställningar, får man ändra det på följande två rader. Kan rekommenderas om man är noga med säkerheten.

```
// Access point configuration
const char thingName[] = "MRC-client";                 // Initial AP name, used as SSID of the own Access Point
const char wifiInitialApPassword[] = "mrc4president";  // Initial password, used when it creates an own Access Point
```

### Felsökning
Man kan även vilja ändra inställningarna för vilken felsöknings-information som visas på seriella monitorn.

```
// Debug
byte debug = 1;     // Set to "1" for debug messages in Serial monitor (9600 baud)
```


## Installation
När du laddat ner programvaran enligt den generella beskrivningen (avsnitt MRC programvara) och valt vilken kretskortsdator du har, ska du bara koppla in den och ladda upp mjukvaran till den. När mjukvaran är uppladda ska enheten vara klar att ställas in och användas.


## Licens
Denna programvara är släppt under en GPL 3.0-licens, vilket betyder att du fritt får använda, ändra och publicera den vidare så länge du gör det under samma eller motsvarande licens. Så här säger den engelska versionen:

:::note GPL v3.0
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
:::

Du kan läsa hela licensen på [GNUs webbplats](http://www.gnu.org/licenses/gpl-3.0.html).


## Programstruktur
Programvaran är uppdelad i flera olika filer, för att ge bättre överblick. Följande delar finns:

 - mrc-2turnout - *Själva huvudprogrammet*
 - mrcMqtt - *Hantering & inställningar av MQTT-kommunikationen*
 - mrcServo - Hantering & inställningar av servon**
 - mrcSettings - *Generella inställningar*
 - mrcStatus - *Hantering & inställningar av status-lysdioder*
 - mrcWifi - *Hantering & inställningar av nätverket*
