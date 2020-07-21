---
title: Användning
---


## Ge kommando
De ämnen vi nu har skapat, kan användas på två olika sätt: Både för att skicka kommandon till (publish) och för att hämta meddelanden (subscribe). Men i MMRC gör man detta på ett lite speciellt sätt, med ett kommandoämne:

```
mmrc/pkin-sj06/turnout/turn/set
```

När någon annan enhet eller funktion vill lägga om den här växeln, skickar dem ett lämpligt meddelande (publish) till detta ämne. En enhet måste alltid lyssna (subscribe) till sina egna `set`-ämnen för att kunna veta när den ska agera.

## Sätta status
När enheten väl utfört kommandot, bör den verifiera detta genom att skicka ett lämpligt meddelande (publish) till samma ämne (fast utan `set`). Så i exempelt ovan skickas ett meddelande till

```
mmrc/pkin-sj06/turnout/turn/
```

Vad man skickar i de båda fallen, är inte bestämt i konventionen. Men en bra regel är att skicka samma meddelande till status, som man fick i kommandot.

Så om kommandot i ämnet `mmrc/pkin-sj06/turnout/turn/set` var "turn", bör man sätta statusen i ämnet `mmrc/pkin-sj06/turnout/turn/`till "turn".

