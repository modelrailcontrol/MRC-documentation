---
title: Andra lösningar
---

Det finns en del liknande lösningar för modelljärnvägen. De varierar på olika sätt men bygger i grund och botten på MQTT som kommunikationslösning. Det som skiljer mest är vad de primärt är tänkta att användas till och hur formatet för att skicka meddelande ser ut.

## CLEES
Idéerna till MMRC har jag haft länge, men det var först när CLEES dök upp som jag fick inspiration nog att ta tag i mina egna idéer på allvar. Skillnaderna mellan MMRC och CLEES är inte så stora; i grunden är det samma tankar. De tre största skillnaderna är enligt mig:

 - CLEES har en helt alla uppbyggnad av ämnesstrukturen.
 - CLEES fokuserar mer på klienter som klarar av ganska många saker, medan MMRC mer är inne på en klient = en uppgift.
 - CLEES har (ännu) inte så många olika meddelandeformat och de som finns bestäms av en enda person.

Men tack vare likheterna finns möjligheten att MMRC kan samexistera med CLEES och styra/styras av CLEES-klienter. Det som behövs är en översättning eller ändring till att använda CLEES meddelandeformat.

Du hittar mer information på [Github](https://github.com/TomasLan/CLEES) och [Svenskt MJ-forum](https://www.svensktmjforum.se/forum/index.php?topic=21857.0). En applikation för snabbklocka finns också på [Github](https://github.com/niclasw63/CLEES).


## Lokstyrning
Det finns även ett intressant projekt som fokuserar på att skapa trådlös kontroll av lok med hjälp av MQTT. Man använder MQTT mellan ett trådlöst körhandtag och en omvandlare. Omvandlaren kommunicerar sedan med en körcentral och på så sett kan man styra lok.

Hur den här lösningen fungerar är inte publicerat, så det är just nu inte en användbar lösning för andra.
Mer information finns på [Svenskt MJ-forum](https://www.svensktmjforum.se/forum/index.php?topic=22431.0).


## Blocksignaler
Ett projekt som ännu så länge har ganska lite information är ett som handlar om blocksignaler. Det baseras en del på MMRC, men har sen inte tillämpat de principer som MMRC Convention förordar.

Lite mer information finns på [Github](https://github.com/etxbct/mqttBlockSig).


## Fler lösningar
Jag har sett antydningar till att fler jobbar med detta, men vet inte mer än så.


## Gemensam meddelandestruktur?
Det mest intressanta med alla lösningar är hur olika man använder MQTT, ett protokoll som egentligen är ganska enkelt. Visst vore det roligt om vi kunde komma överens om en gemensam struktur för att hantera meddelanden, men som det ser ut nu tror jag det blir svårt.
Just nu verkar var och en göra det enkelt för sig själv och väljer en struktur som passar just deras behov. Svårt att få till något gemensamt då... :-)


