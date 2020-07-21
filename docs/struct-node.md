---
title: Node / funktioner
---

På den tredje nivån hittar man alla ämnen som motsvarar de funktioner som enheten har:
```
mmrc/pkin-sj06/turnout
```


Dessa ämnen/funktioner ska tidigare ha definierats i enhetens ämne `mmrc/pkin-1234/$nodes`.

Om det i enhetens ämne `mmrc/pkin-sj06/$nodes` står exempelvis `turnout,button` betyder det alltså att det finns två funktioner i enheten och de motsvaras då av följande två ämnen:

```
mmrc/pkin-sj06/turnout
mmrc/pkin-sj06/button
```


## Attribut
Varje funktion kan ha några olika attribut som informerar om den mer i detalj. Följande attribut finns för en funktion:

```
mmrc/pkin-sj06/turnout/$name
mmrc/pkin-sj06/turnout/$type
mmrc/pkin-sj06/turnout/$properties
```

- **$name** är det mer läsvänliga namnet på funktionen. _Exempelvis "Växel 01" eller "Infartssignal vänster"_
- **$type** beskriver vilken typ av funktion det är - vad den gör/hanterar. Här är det ganska fritt vad som anges, men lämpligt kan vara att ange något i stil med "Huvudsignal" eller "2-vägs-växel".
- **$properties** är en kommaseparerad lista över vilka olika egenskaper (property) denna node har. En funktion kan ju ha en eller flera egenskaper. _Exempelvis enbart "turn" för en växel eller "main,next" för en signal._


## Några exempel

En enhet som har många olika funktioner (kanske en Raspberry Pi) och exempelvis styr en hel modul, kan ha följande funktioner på en och samma enhet:

```
mmrc/pkin-1234/turnout1
mmrc/pkin-1234/turnout2
mmrc/pkin-1234/button1
mmrc/pkin-1234/button2
mmrc/pkin-1234/signal1
mmrc/pkin-1234/signal2
mmrc/pkin-1234/signal3
mmrc/pkin-1234/signal4
```

Men för att bli mer tydlig även vid programmering, kan man för samma enhet kalla funktionerna för följande:

```
mmrc/pkin-1234/to-left
mmrc/pkin-1234/to-right
mmrc/pkin-1234/btn-left
mmrc/pkin-1234/btn-right
mmrc/pkin-1234/si-left-out
mmrc/pkin-1234/si-left-in
mmrc/pkin-1234/si-right-out
mmrc/pkin-1234/si-right-in
```

Det viktiga är att dessa funktioner definieras i enhetens ämne `mmrc/pkin-1234/$nodes`.
