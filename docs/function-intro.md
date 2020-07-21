---
title: Introduktion
---

På den här sidan definieras en gemensam standard för en del MMRC-funktioner som vanligen förekommer på en modelljärnväg, exempelvis hur man hanterar växlar, signaler och ställverk.

Detta är en viktig del i att enheter från olika personer ska kunna kommunicera med varandra och ger förutsättningar för att till exempel kunna använda MMRC på modulbanor med moduler från olika ägare.

**Observera** att det inte är ett krav att följa denna standard om du inte har behov av att kommunicera med andra personers MMRC-enheter. Det finns inte heller något som hindrar att du har _fler_ funktioner än dessa.


## Sätta typen
För att tala om vilken typ funktion är, anger man typens benämning i detta ämne:
```
mmrc/[id]/[node]/$type
```

Exempelvis:

```
mmrc/pkin-sj06/turnout/$type -> 2turnout
```

för att tala om att det är en växel med två lägen eller

```
mmrc/pkin-sj06/signal2/$type -> mainsignal
```

för att ange att det är en huvudsignal.

På följande sidor hittar du fler olika typer som är vanligt förekommande i mj-sammanhang.

