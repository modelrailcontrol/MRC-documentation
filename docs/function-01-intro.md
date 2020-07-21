---
title: Introduktion
---

På den här sidan definieras en gemensam standard för en del MRC-funktioner som vanligen förekommer på en modelljärnväg, exempelvis hur man hanterar växlar, signaler och ställverk.

Detta är en viktig del i att enheter från olika personer ska kunna kommunicera med varandra och ger förutsättningar för att till exempel kunna använda MRC på modulbanor med moduler från olika ägare.

**Observera** att det inte är ett krav att använda just dessa funktioner om du inte har behov av att kommunicera med andra personers MRC-enheter. Men de funktioner du själv skapar, måste ändå följa [MRC-konventionen](conv-restriction) för att räknas som MRC-enheter.


## Sätta typen
För att tala om vilken typ/vilka typer av funktion enheten har, anger man typens benämning i detta ämne:
```
mrc/[id]/[node]/$type
```

Exempelvis:

```
mrc/pkin-sj06/turnout/$type → "2turnout"
```

för att tala om att det är en växel med två lägen eller

```
mrc/pkin-sj06/signal2/$type → "se2hsi"
```

för att ange att det är en 2-ljus huvudsignal. En enhet kan ju förstås även ha flera olika funktioner och då definieras var och en på samma sätt:

```
mrc/pkin-sj06/turnout/$type → "2turnout"
mrc/pkin-sj06/signal1/$type → "se2hsi"
mrc/pkin-sj06/signal2/$type → "se3hsi"
```

På följande sidor hittar du fler olika typer som är vanligt förekommande i mj-sammanhang.


## En enhets alla ämnen
Vissa kan tycka att MRC är ett ganska "pratigt" sätt att kommunicera. Vid första anblicken är det många olika ämnen att hålla reda på och flera av dem kanske inte har någon direkt betydelse för din enhets grundfunktion.

Men man får inte glömma att standarden är till för att hålla god ordning på *en hel massa* enheter som kommunicerar med varandra i ett och samma nätverk. Då behövs lite extra information för att få det smidigt. Viss information är även bra för att kunna övervaka och få information om enheterna i MRC-nätet.

För en försignal behövs följande ämnen för att följa MRC-standarden:

```
mrc/pkin-sj06/$name
mrc/pkin-sj06/$state
mrc/pkin-sj06/$nodes

mrc/pkin-sj06/signal/$name
mrc/pkin-sj06/signal/$type
mrc/pkin-sj06/signal/$properties

mrc/pkin-sj06/signal/approach/
mrc/pkin-sj06/signal/approach/set
mrc/pkin-sj06/signal/approach/$name
mrc/pkin-sj06/signal/approach/$datatype
```
