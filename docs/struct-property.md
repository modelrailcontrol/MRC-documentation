---
title: Property / egenskaper
---


På den fjärde och sista nivån hittar man alla egenskaper som en funktioner har:
```
mmrc/pkin-sj06/turnout/turn
```


Dessa egenskaper/ämnen ska tidigare ha definierats i funktionens ämne `mmrc/pkin-sj06/turnout/$properties`.

Om det i enhetens ämne `mmrc/pkin-sj06/$properties` står exempelvis `turn` betyder det alltså att det finns en egenskap i funktionen och den motsvaras då av ämnet:

```
mmrc/pkin-sj06/turnout/turn
```


## Attribut
Varje funktion kan ha några olika attribut som informerar om den mer i detalj. Följande attribut finns för en egenskap:

```
mmrc/pkin-sj06/turnout/$name
mmrc/pkin-sj06/turnout/$datatype
```

- **$name** är det mer läsvänliga namnet på egenskapen. _Exempelvis "Växelomläggning" eller "Signalbild"_
- **$datatype** beskriver vilken typ av data som kan läsas från och/eller skickas till egenskapen. Vilka egenskaper som kan förekomma finns att läsa i Konventionen. _Exempelvis "string" eller "boolean"._

## Några exempel
I MJ-sammanhang behöver man sällan ha så många olika egenskaper på en funktion. Det är oftast funktionerna som det finns flera av, växlar, signaler och knappar till exempel. Varje funbktion är sen oftas väldigt enkel, så att egenskaperna blir få:

```
mmrc/pkin-1234/to-left/turn
mmrc/pkin-1234/to-right/turn
mmrc/pkin-1234/btn-left/push
mmrc/pkin-1234/btn-right/push
mmrc/pkin-1234/si-left-out/main
mmrc/pkin-1234/si-left-in/main
mmrc/pkin-1234/si-left-in/next
mmrc/pkin-1234/si-right-out/main
mmrc/pkin-1234/si-right-in/main
mmrc/pkin-1234/si-right-in/next
```

Här har nästan alla funktioner bara en egenskap, en växel kan läggas om, en knapp tryckas medan en signal kan visa både egen signalbild och meddela nästa signalbild.


## Föreslagna egenskaper
Här nedan följer några förslag på egenskaper/ämnen som kan vara lämpliga att använda i MJ-sammanhang:

```
mmrc/pkin-1234/turnout/turn
mmrc/pkin-1234/button/push
mmrc/pkin-1234/switch/throw
mmrc/pkin-1234/signal/main/
mmrc/pkin-1234/signal/next/
```

