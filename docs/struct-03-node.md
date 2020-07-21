---
title: Node / funktioner
---

På den tredje nivån hittar man alla ämnen som motsvarar de funktioner som enheten har:
```
mrc/pkin-sj06/turnout
```


Dessa ämnen/funktioner ska tidigare ha definierats i enhetens ämne `mrc/pkin-sj06/$nodes`.

Om det i enhetens ämne `mrc/pkin-sj06/$nodes` står exempelvis `turnout,button` betyder det alltså att det finns två funktioner i enheten och de motsvaras då av följande två ämnen:

```
mrc/pkin-sj06/turnout
mrc/pkin-sj06/button
```


## Attribut
Varje funktion kan ha några olika attribut som informerar om den mer i detalj. Följande attribut finns för en funktion:

```
mrc/pkin-sj06/turnout/$name
mrc/pkin-sj06/turnout/$type
mrc/pkin-sj06/turnout/$properties
```

- **$name** är det mer läsvänliga namnet på funktionen. _Exempelvis "Växel 01" eller "Infartssignal vänster"_
- **$type** beskriver vilken typ av funktion det är - vad den gör/hanterar. Här är det enligt Konventionen fritt vad som anges, men för att alla enheter ska kunna fungera tillsammans, är det lämpligt att följa MRC rekommendationer i avdelningen [MRC funktioner](function-01-intro).
- **$properties** är en kommaseparerad lista över vilka olika egenskaper (property) denna node har. En funktion kan ju ha en eller flera egenskaper. _Exempelvis enbart "turn" för en växel eller "main,next" för en signal._


## Några exempel

En enhet som har många olika funktioner (kanske en Raspberry Pi) och exempelvis styr en hel modul, kan ha följande funktioner på en och samma enhet:

```
mrc/pkin-1234/turnout
mrc/pkin-1234/button
mrc/pkin-1234/signal1
mrc/pkin-1234/signal2
```

Vill man på något sätt sedan skilja på olika funktioner, kan man med fördel använda funktionernas attribut `$name` där man kan ge dem olika och tydligare namn:

```
mrc/pkin-1234/signal1/$name → "Infartssignal"
mrc/pkin-1234/signal2/$name → "Utfartssignal"
```

