---
title: Knappar/omkopplare
---

## Tryckknapp
För en enkel tryckknapp (t.ex. i ett ställverk) använder vi typen `pushbutton`:

```
mrc/[id]/[node]/$type → "pushbutton"
```

De ämnen som då _måste_ finnas för en tryckknapp är dessa:

```
mrc/[id]/[node]/action
mrc/[id]/[node]/action/set
```

och meddelandet som används är `push`, exempelvis:

```
mrc/[id]/button/action/set → "push"
mrc/[id]/button/action/ → "idle"
```

där meddelandet betyder följande:

**push** betyder att knappen har eller ska tryckas ner.

**idle** knappen är inte nedtryckt. Detta kan *enbart vara en status*.

Här bör knappen sätta status (publish) i sitt ämne `mrc/[id]/[node]/pushbutton` bara under den stund knappen verkligen trycks ner. Sedan bör statusen ändras till **idle**.


## Omkopplare
För en omkopplare med två eller flera lägen använder vi typen `switchN`:

```
mrc/[id]/[node]/$type → "switchN"
```

Där bokstaven "N" ovan representerar en siffra som talar om hur många lägen omkopplaren har. De ämnen som då _måste_ finnas för en tryckknapp är dessa:

```
mrc/[id]/[node]/position
mrc/[id]/[node]/position/set
```

och meddelandet som används är `stateN`, exempelvis:

```
mrc/[id]/[node]/$type → "switch3"
mrc/[id]/button/position/set -> "state2"
```

där meddelandet betyder följande:

**state0** omkopplarens utgångsläge, exempelvis en återfjädrande omkopplare

**state1** omkopplarens första funktionsläge

**state2** omkopplarens andra funktionsläge

Antalet lägen styrs av typen `switchN` där "N" är en siffra som visar antalet möjliga lägen.


<!--
## Variabel reglering
Exempelvis potentiometer eller rotationsenkoder för att reglera hastighet med ett körhandtag.

```
mrc/[id]/[node]/$type → "slide"
```
-->
