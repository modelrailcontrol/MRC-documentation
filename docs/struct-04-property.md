---
title: Property / egenskaper
---


På den fjärde och sista nivån hittar man alla egenskaper som en funktioner har:
```
mrc/pkin-sj06/signal/main
```


Dessa egenskaper/ämnen ska tidigare ha definierats i funktionens ämne `mrc/[id]/[node]/$properties`.

Om det exempelvis står `approach` funktionens ämne `mrc/pkin-sj06/signal/$properties` står exempelvis betyder det alltså att det finns en egenskap i funktionen som motsvaras av ämnet:

```
mrc/pkin-sj06/signal/$properties → ""approach"
mrc/pkin-sj06/signal/approach
```


## Attribut
Varje egenskap kan ha några olika attribut som informerar om den mer i detalj. Följande attribut finns för en egenskap:

```
mrc/pkin-sj06/signal/approach/$name
mrc/pkin-sj06/signal/approach/$datatype
```

- **$name** är det mer läsvänliga namnet på egenskapen. _Exempelvis "Växelomläggning" eller "Signalbild"_
- **$datatype** beskriver vilken typ av data som kan läsas från och/eller skickas till egenskapen. Vilka egenskaper som kan förekomma finns att läsa i Konventionen. _Exempelvis "string" eller "boolean"._


## Några exempel
I MJ-sammanhang behöver man sällan ha så många olika egenskaper på en funktion, men det varierar förstås. Här är några vanliga egenskaper tagna från MRCs förslag till funktioner för modelljärnväg::

```
mrc/[id]/turnout/2turnout/
mrc/[id]/turnout/3turnout/
mrc/[id]/turnout/4turnout/

mrc/[id]/signal/main
mrc/[id]/signal/approach
mrc/[id]/signal/dwarf

mrc/[id]/button/push
mrc/[id]/button/switch
mrc/[id]/button/slide

mrc/[id]/block/direction
mrc/[id]/block/detection
mrc/[id]/block/velocity
mrc/[id]/block/trainid

mrc/[id]/output/digital/
mrc/[id]/output/analog/
mrc/[id]/output/ws2811b/

mrc/[id]/input/digital/
mrc/[id]/input/analog/
```

