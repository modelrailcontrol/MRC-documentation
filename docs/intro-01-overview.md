---
title: Introduktion
---

Tanken med MRC är att skapa ett flexibelt och decentraliserat sätt att styra modelljärnvägar. Inspirationen kommer från IoT (Internet of Things) där alla saker ska kunna kommunicera med varandra, men i MRC sker det under mer kontrollerade former så man säkert vet att allting fungerar.

## Principen
Principen är att ha många små, specialiserade enheter som utför en enstaka uppgift helt självständigt. De kan få kommandon utifrån och skicka status eller kommandon till andra enheter.

![MRC princip](/img/overview-example.svg)

Genom att ha "intelligensen" sittande i varje enskild enhet, behöver man inte ha någon större cental dator som sköter systemet och inte heller någon avancerad kommunikation.

MRC utgår från idén om att varje enhet i princip bara har en funktion, vilket ger det stor flexibilitet, valfrihet och skalbarhet. Det blir relativt lätt att göra ändringar både när det gäller fysiska enheter och hur de interagerar med varanda. 


## Meddelandeserver
Det enda som alltid måste finnas i systemet är en central meddelandeserver (s.k. MQTT-broker). Det är via den som all kommunikation sker mellan enheterna i systemet. Meddelandeservern håller reda på vilka enheter som finns i systemet och ser till att meddelande skickas rätt mellan enheter.

Den centrala meddelandeservern är en viktig del i MRC och till den bör man använda en lite mer kapabel dator. Ett förslag är att använda Raspberry Pi med t.ex. [Mosquitto](http://mosquitto.org/) installerat.


## Övriga enheter
För övrigt kan man ha vilka typer av enheter som helst i systemet. Det är egentligen upp till den som skapar enheten att bestämma vad den gör. Det viktiga med MRC är ändå inte vad olika enheter gör, utan att de kommunicerar med varandra på ett reglerat sätt. 

Genom att använda små, billiga kretskortsdatorer (läs Arduino) kan man relativt enkelt bygga små enheter som ändå har nog med kapacitet att utföra sina uppgifter. Enda kraven på en enhet är att den ska kunna kommunicera med andra och att den ska följa MRC Konventionen för *hur* den ska kommunicera - resten bestämmer du själv!
