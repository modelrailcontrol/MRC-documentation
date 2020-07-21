---
title: Knappar/omkopplare
---

## Tryckknapp
För en enkel tryckknapp (t.ex. i ett ställverk) använder vi typen `pushbutton`:

```
mmrc/[id]/[node]/$type = pushbutton
```

De ämnen som då _måste_ finnas för en tryckknapp är dessa:

```
mmrc/[id]/[node]/pushbutton
mmrc/[id]/[node]/pushbutton/set
```

och meddelandet som används är `push`, exempelvis:

```
mmrc/[id]/[node]/pushbutton/set -> push
mmrc/[id]/[node]/pushbutton/set -> idle
```

där meddelandet betyder följande:

**push** betyder att knappen har tryckts ner.

**idle** knappen är inte nedtryckt. 

Här bör knappen sätta status (publish) i sitt ämne `mmrc/[id]/[node]/pushbutton` bara under den stund knappen verkligen trycks ner. Sedan bör statusen ändras till **idle**.


## Omkopplare
För en omkopplare med två eller flera lägen använder vi typen `switch`:

```
mmrc/[id]/[node]/$type = switch
```

De ämnen som då _måste_ finnas för en tryckknapp är dessa:

```
mmrc/[id]/[node]/switch
mmrc/[id]/[node]/switch/set
```

och meddelandet som används är `stateN`, exempelvis:

```
mmrc/[id]/[node]/pushbutton/set -> state2
```

där meddelandet betyder följande:

**state0** omkopplarens utgångsläge, exempelvis en återfjädrande omkopplare

**state1** omkopplarens första funktionsläge

**state2** omkopplarens andra funktionsläge

Antalet lägen är valfritt och styr av behovet.


<!--
## Variabel reglering
Exempelvis potentiometer eller rotationsenkoder för att reglera hastighet med ett körhandtag.

-->
