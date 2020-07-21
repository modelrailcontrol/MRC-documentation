---
title: Introduktion
---

Tanken med MMRC är att skapa ett flexibelt och decentraliserat sätt att styra modelljärnvägar. Grunden i konceptet är att man har en central meddelandeserver (s.k. MQTT-broker) och olika typer av klienter som sköter olika funktioner på modelljärnvägen. Klienterna kan sedan kommunicera med varandra via meddelandeservern för att både styra och bli styrda av andra klienter.

![MMRC Princip](../img/overview-example.svg)

Genom att använda trådlöst nätverk och små, billiga kretskortsdatorer blir systemet väldigt flexibelt. Det passar speciellt bra på modelljärnvägsmoduler som kan vara placerade på olika platser i en bana, men ändå ska kunna styras och övervakas centralt.

<!--
### MMRC-kommunikationen
När man ska programmera sina klienters kommunikation, behöver man förstå principerna för hur MQTT och MMRC Convention är tänkt att fungera:

**Bestäm vem som bestämmer**

Först måste man bestämma sig för vilken väg kommunikationen ska gå, t.ex. om en växel ska lyssna (subscribe) på knappens ämne (topic) eller om knappen ska publicera (publish) till växelns ämne (topic)?
Det spelar ingen roll, men måste bestämmas så du vet hur du ska programmera de olika klienterna. I exemplet med knapp och växel finns det alltså följande två ämnen att välja mellan:

`/mmrc/device01/node01/turnout/set`
om knappen ska styra växeln

`/mmrc/device04/node2/button/`
om växeln ska lyssna på knappens läge

MMRC (och Homie) Convention säger också att man anger status för en pryl direkt i ämnet (t.ex. `/mmrc/device01/node01/turnout`) men skickar kommandon till samma pryls "/set"-attribut (t.ex. `/mmrc/device01/node01/turnout/set`). Därav lite olika utseende på ämnen i exemplet ovan.

**Skicka kommando & status**

Om vi nu väljer att kommunikationen ska ske via växelns ämne, så kommer följande att behöva hända, se punkterna i bilden.

![MMRC Kommunikation](../img/meddelande.png)

 1. Knappen skickar data (payload) till växelns `.../set`-ämne på MQTT-brokern.
 2. Växeln, som sen tidigare prenumererar på sitt eget `...turnout/set`-ämne får nu meddelande tillsänt.
 3. Växeln utför kommandot (lägga om växeln och kanske styra en signal).
 4. När växeln lagts om, skickar den samma data (payload) tillbaka via MQTT-brokern till sitt `...turnout`-ämne som en status på att allting gått bra.
 5. Om knappen lyssnar på växelns status (...turnout`) kan den nu se att växeln blivit omlagd.

Punkt 4 ska man alltid göra. Det finns däremot inget krav på att göra punkt 5, men det är lämpligt så man kan se att kommandot har tagits emot och utförts.
-->

### Meddelandeserver
En viktig del i MMRC är den centrala meddelandeservern. Till den bör man använda en lite mer kapabel dator och ett förslag är att använda Raspberry Pi med t.ex. [Mosquitto](http://mosquitto.org/) installerat.

Hur du gör din egen meddelandeserver kan du läsa mer om under rubriken [Meddelandeserver](server-install.md) här till vänster.


### Klienter
Det finns inga specifika typer av klienter i detta system. Det är upp till den som skapar klienten att bestämma vad den ska kunna göra. Enkla klienter kanske enbart kan tända och släcka en lysdiod, medan mer avancerade klienter kan styra funktioner på en hel station. MMRC är flexibelt nog att hantera bägge typerna.
