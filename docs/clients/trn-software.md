---
title: Programvaran
---

En förutsättning för att kunna  ladda programvaran till enheten är att du har installerat Arduinos utvecklingsmiljö (IDE) på din dator. Hur du gör dessa förberedelser beskrivs mer på sidan [Börja programmera](intro-arduino). 

Det är en engångsuppgift, så har du en gång gjort iordning en MRC-enhet ska du inte behöva göra om förberedelserna igen.

Programvaran är uppdelad i flera olika filer, för att ge bättre överblick. Följande delar finns:

 - mrc-2turnout - *Själva huvudprogrammet*
 - mrcMqtt - *Hantering & inställningar av MQTT-kommunikationen*
 - mrcServo - Hantering & inställningar av servon**
 - mrcSettings - *Generella inställningar*
 - mrcStatus - *Hantering & inställningar av status-lysdioder*
 - mrcWifi - *Hantering & inställningar av nätverket*


## Grundinställningar
Några generella inställningar och några som kan vara specifika för varje användning av programmet, har samlats i en separat fil som heter *mrcSettings.h*. Denna fil inkluderas i huvudprogrammet vid kompilering.

Du ändra dessa inställningar enkelt i en texteditor eller i Arduion IDE och sparar dem lokalt.


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


## Huvudprogrammet

### Program-initiering
Här görs alla olika initieringar och inställningar som behövs för att programmet ska ha rätt förusättningar. En del av inställningarna sker även genom att anropa andra funktioner.

```
void setup() {
	// Application setup
}
```

### Huvudprogrammet
I programmets huvuddel hanteras alla återkommande "arbeten", så som att hålla status-lysdioder blinkande, servon rörliga och anslutningen till MQTT-servern igång.

```
void loop() {
	// Main loop
}
```

Här finns även en kontroll av om programmet startat för första gången, för då ska nämligen lysdioderna visa det genom att blinka på ett annorlunda sätt.

### Knapp-hantering
Knapparna hanteras av ett bibliotek som heter *EasyButton* och underhålls av *Evert Arias*. Mer information om dess hantering hittas på [bibliotekets Github-sidor](https://github.com/evert-arias/EasyButton).

Det finns även egna funktioner som hanterar knapptryckningarna. Där avgörs vilket läge knappen satts i och utifrån det avgörs hur servo och lysdioder ska reagera.

```
void btn1Pressed () {
	// Function that gets called when a button is pressed
}
```


### Servohantering
Några av funktionerna hanterar vad som ska hända när ett servo nått sitt ändläge. Där kontrolleras om ett eventuellt "parservo" också rört sig klart och visar sen med lysdioderna hur växeln blivit lagd.
```
void servo1aFinished () {
	// Function that gets called when a servo finished moving
}
```


## Servo-funktioner

### Skapa ett servo-objekt
Skapar ett nytt objekt 'MyServo' för att kunna styra ett servo på vald utgång, i detta fall pin D1.
```
mrcServo MyServo(D1);
```

### Ställ in servots egenskaper
Ställer in ändlägen och hastighet på servo samt ger möjlighet att "lossa" servot från ett spänt läge.
```
void setup() { 
    MyServo.limits(min, max, hastighet, justering);
}
```

 - **min** är en siffra mellan 0 och 180 som ställer in servots ena ändläge
 - **max** är en siffra mellan 0 och 180 som ställer in servots andra ändläge
 - **hastighet** är antalet millisekunder som servot väntar mellan varje steg det stegar fram
 - **justering** är antalet extra steg servot tar utanför ändläget, för att sen stega tillbaka lika många steg igen. Se illustration nedan:

![Hur 'justering' fungerar](/img/software-servo-back.svg)


### Servo-hantering
För att servofunktionerna ska fungera behöver det "ständigt" kontrolleras om det finns någon servo-aktivitet på gång, att starta eller att avsluta.
Detta gör du genom att i programmets huvuddel anropa funktionen `loop()`.
```
void loop() {
    MyServo.loop();
}
```

### Flytta servot
Det finns tre olika kommandon för att ändra servots läge:

```
    MyServo.closed();
    MyServo.thrown();
    MyServo.moveTo (180);
```
Du använder dem på följande sätt:

- **closed()** gör att servot stegar till MAX ändpunkt
- **thrown()** gör att servot stegar till MIN ändpunkt
- **moveTo()** flyttar servot till en angiven punkt/vinkel, mellan 0 och 180


### Detektera servots ändpunkter
Anger en funktion som ska anropas när servot har rört sig klart, d.v.s nått det ändläge som senaste kommandot angett. 

```
void setup() { 
    MyServo.onFinished(myServoCallback);
}
```

Du kan sen skapa en funtion som heter `MyServoCallback`och där utföra valfria åtgärder när servot nått ändpunkten
```
void myServoCallback () {
    Serial.println("Servo har nått ändläget");
}
```


### Hämta servostatus
Denna funktion kan du anropa för att kontrollera vilken aktivitet servot har på gång.
```
    status = MyServo.status();
```
Du kan få tre olika svar:

- **NON = 0,** betyder att servot inte gör något
- **MIN = 1,** servot är på väg till MIN-läget
- **MAX = 2** servot är på väg till MAX-läget

:::note Observera
Denna funktion fungerar inte korrekt i dagsläget (2020-12-21), utan ger enbart `false` för NON eller `true` för MIN *och* MAX.
:::

### Hämta servoposition
Med denna funktion kan du ta reda på i vilket ändläge servot befinner sig i.
```
    boolean position = MyServo.position();
```
- **0** eller **false** betyder att servot är i MIN-position
- **1** eller **true** betyder att servot är i MAX-position


## Status-funktioner

### Skapa ett status-objekt
Skapar ett nytt objekt 'MyStatus' för att styra en lysdiod på vald utgång, i detta fall pin D4.

```
mrcStatus MyStatus(D4);
```

### Status-hantering
För att statusfunktionerna ska fungera behöver det "ständigt" kontrolleras om det finns någon servo-aktivitet på gång, att starta eller att avsluta.
Detta gör du genom att i programmets huvuddel anropa funktionen `loop()`.

```
    MyStatus.loop();
```

### Statushantering
Du kan hantera lysdioden på tre olika sätt, med följande kommandon:

```
    MyStatus.on();
    MyStatus.off();
    MyStatus.blink(500);
```

- **on()** tänder lysdioden
- **off()** släcker lysdioden
- **blink(500)** gör att lysdioden blinkar med 500 millisekunders intervall


### Hämta status
Du anropas denna funktion för att få reda på i vilket läge lysdioden befinner sig i.

```
    boolean MyStatus.status();
```

Du kan få tre olika svar:

- **OFF = 0,** betyder att lysdioden är släckt
- **ON = 1,** lysdioden är tänd
- **BLINK = 2** lysdioden blinkar

:::note Observera
Denna funktion fungerar inte korrekt i dagsläget (2020-12-21), utan ger enbart `false` för OFF eller `true` för ON *och* BLINK.
:::

## MQTT-funktioner
Hanteringen av MQTT är uppdelad i två olika delar. En del där ett separat biblioteks funktioner används och en del där programmets har egna MQTT-funktioner.

### PubSubClient
För hantering av MQTT-meddelanden används ett separat bibliotek (library) som heter *PubSubClient* och underhålls av *Nick O'Leary*. Hur detta biblioteks funktioner kan användas framgår av [PubSubClients webbplats](https://pubsubclient.knolleary.net/).

### Inställningar för MQTT
Alla inställningar som behövs för MQTT har samlats i denna funktion.
```
void setup() { 
  // Initial mqtt setup
  mqttSetup();
}
```

Här finns främst alla de ämnen som programmet behöver hantera samt en del förutbestämnda meddelanden.


### Anslut till MQTT-server
Funktionen för att ansluta sig till MQTT-servern innehåller förutom själva anslutningsrutinerna, även rutiner för att publicera till och prenumerera på olika ämnen.

```
mqttConnect();
```


### Publicera meddelande
När man i programmet vill publicera ett meddelande till ett ämne, använder man funktionen mqttPublish.
```
mqttPublish("mrc/enhet01/turnout/set", "closed", 1);
```
De tre olika parametrarna används så här:
- **mrc/enhet01/turnout/set** är ämnet man vill publicera till
- **closed**, är meddelandet som ska publiceras
- **1** anger att meddelandet ska ligga kvar även efter publiceringen. Med en nolla (0) här, kommer meddelandet att försvinna så fort de som prenumererae på ämnet har fått meddelandet

### Prenumerera på meddelanden
För att kunna ta emot meddelanden från MQTT-servern, finns en funktion som hanterar detta. I denna funktion tas meddelandet emot hanteras beroende på innehåll.

```
void mqttCallback(char* topic, byte* payload, unsigned int length) {
	// Function to handle MQTT messages sent to this device
}
```

## Wifi-funktioner
Även hanteringen av wifi/trådlöst nätverk är uppdelad i två olika delar. Det mesta hanteras av ett separat biblioteks funktioner och själva programmet har endast en egen wifi-funktion.

### IotWebConf
Det mesta av hanteringen kring tråslösa nätverket *och* programmets möjligheter till användar-inställningar hanteras av ett bibliotek som heter *IotWebConf* och underhålls av *Balazs Kelemen*. Mer information om dess hantering hittas på [bibliotekets Github-sidor](https://github.com/prampec/IotWebConf).

### Spara inställningar
En funktion som hanterar sparandet av inställningar ligger i programmets huvuddel:

```
void configSaved() {
	// Function that gets called when IotWebConf web page config has been saved
}
```

### Inställningar för wifi
Injställningarna för wifi är ganska omfattande och innehåller en hel del kod som behövs för att kunna hantera användar-inställningar via en inbyggd webbsida. Dessa inställningar är samlade i en egen funktion.
```
void setup() { 
  // Initial wifi setup
  wifiSetup();
}
```

