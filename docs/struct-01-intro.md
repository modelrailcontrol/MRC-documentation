---
title: Introduktion
---

Principen för MQTT är att man skickar (publish) ett meddelande (payload) till ett specifikt ämne (topic). Andra kan sedan välja att lyssa på eller prenumerera (subscribe) på ett ämne. Så varje gång någon skickar (publish) ett meddelande (payload) till ett ämne (topic), kommer detta meddelande att vidarebefordras till alla som valt att prenumerera/lyssna (subscribe) på detta ämne.

![Principen för MQTT](/img/struct-overview.svg)

I centrum för detta förfarande finns en meddelandeserver (broker). Det är en central programvara vars enda uppgift lite förenklat är att hantera ämnen, meddelanden och prenumerationer. 
Man kan även göra liknelsen att brokerns uppgift är att hantera en massa fack (subject) med meddelanden (payload) som enheter kan skriva dit (publish) eller hämta (subsrcibe).


## Ordlista

|Svenska   |Engelska|Förklaring|
|----------|--------|----------|
|ämne      |topic   |          |
|meddelande|payload ||
|enhet     |device  ||
|funktion  |node    ||
|egenskap  |property||


## Uppbyggnad
Ett ämne i MRC är alltid uppbyggt på följande sätt:

```
mrc/device/node/property
mrc/enhet/funktion/egenskap
```


## Attribut
På varje nivå i strukturen kan man sedan sätta attribut, vilka kan varierar beroende på nivån. Dessa attribut används till att ge information om just den nivå där attributet finns, exempelvis:

`mrc/device/$name`
där man då har möjlighet att ge enheten ett läsbart namn, kanske "Växel 22".

`mrc/device/node/$name`
där man ger en av enhetens funktioner ett läsbart namn, kanske "Växelstyrning".

`mrc/device/node/property/$name`
där man ger funktionens egenskap ett namn, kanske "Riktning".

Vilka attribut som finns och måste användas, finns beskrivet i [Konventionen](conv-restriction.md).


## Base topic
Den första nivån i MRC-strukturen och som grund för alla ämnen i MRC används följande:

```
mrc/
```

Denna start på ämnet visar att du följer MRC-konventionen och då ska alltså alla ämnen börja med denna text, exempelvis

```
mrc/pkin-to001/turnout/2turnout
mrc/1270262539-af/button/push
mrc/bwah-0012/signal/approach
```

:::note Observera
Om du gör du din egen variant av MRC eller MQTT ämnesstruktur, så *måste* du hitta på ett eget Base topic. Ämnet `mrc/` är reserverat för enheter som följer MRC Konventionen fullt ut.
:::

## Ge kommando
De ämnen vi skapar, kan användas på två olika sätt: Både för att skicka kommandon till (publish) och för att hämta meddelanden (subscribe). Men i MRC gör man detta på ett lite speciellt sätt, med ett kommandoämne:

```
mrc/pkin-sj06/turnout/direction/set
```

När någon annan enhet eller funktion vill lägga om den här växeln, skickar dem ett lämpligt meddelande (publish) till detta ämne. En enhet måste alltid lyssna (subscribe) till sina egna `set`-ämnen för att kunna veta när den ska agera.


## Sätta status
När enheten väl utfört kommandot, bör den verifiera detta genom att skicka ett lämpligt meddelande (publish) till samma ämne (fast utan `set`). Så i exempelt ovan skickas ett meddelande till

```
mrc/pkin-sj06/turnout/direction/
```

Vad man skickar i de båda fallen, är inte bestämt i konventionen. Men en bra regel är att skicka samma meddelande till status, som man fick i kommandot.

Så om kommandot i ämnet `mrc/pkin-sj06/turnout/direction/set` var "turn", bör man sätta statusen i ämnet `mrc/pkin-sj06/turnout/direction/`till "turn".
