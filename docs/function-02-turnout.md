---
title: Växlar
---

## Tvåvägsväxel
För växel med två lägen (vänster, höger eller Y) använder vi typen `2turnout`:

```
mrc/[id]/[node]/$type → "2turnout"
```

De ämnen som då _måste_ finnas för en tvåvägsväxel är dessa:

```
mrc/[id]/[node]/direction/
mrc/[id]/[node]/direction/set
```

och meddelanden som används är `closed`, `thrown`, `toggle`, `moving` och `unknown`, exempelvis:

```
mrc/[id]/turnout/direction/ → "closed"
mrc/[id]/turnout/direction/set → "toggle"
mrc/[id]/turnout/direction → "moving"
mrc/[id]/turnout/direction/set → "unknown"
```
där meddelanden betyder följande:

**thrown** betyder att växeln ska lägga till sidospår

**closed** betyder att växeln ska lägga rakt

**toggle** betyder att växeln ska lägga om - till rakt om den är mot sidospår och tvärtom

**moving** betyder att växeln är under omläggning ()och inte tar emot nya kommandon)

**unknown** när växeln är i okänt läge, exempelvis direkt efter en start av enheten


## Trevägsväxel
För växel med tre lägen (vänster, höger och rakt) använder vi typen `3turnout`:

```
mrc/[id]/[node]/$type → "3turnout"
```

De ämnen som då _måste_ finnas för en trevägsväxel är dessa:

```
mrc/[id]/[node]/direction/
mrc/[id]/[node]/direction/set
```

och meddelanden som används är `left`, `right`, `closed`, `moving` och `unknown`, exempelvis:

```
mrc/[id]/turnout/direction/set → "left"
mrc/[id]/turnout/direction/ → "right"
mrc/[id]/turnout/direction/set → "closed"
mrc/[id]/turnout/direction → "moving"
mrc/[id]/turnout/direction/set → "unknown"
```
där meddelanden betyder följande:

**closed** betyder att växeln ska lägga rakt

**left** betyder att en 3-vägsväxel ska läggas till sidospår vänster

**right** betyder att en 3-vägsväxel ska läggas till sidospår höger

**unknown** när växeln är i okänt läge, exempelvis direkt efter en start av enheten


## Korsningsväxel
För en korsningsväxel med upp till fyra lägen använder vi typen `4turnout`:

```
mrc/[id]/[node]/$type → "4turnout"
```

De ämnen som då _måste_ finnas för en korsningsväxel är dessa:

```
mrc/[id]/[node]/[property]/
mrc/[id]/[node]/[property]/set
```

och meddelanden som används är `???`, `???`, `???`, `???`, `moving` och `unknown`, exempelvis:

```
mrc/[id]/turnout/direction/ → "?"
mrc/[id]/turnout/direction/set → "?"
mrc/[id]/turnout/direction/set → "?"
mrc/[id]/turnout/direction/ → "?"
mrc/[id]/turnout/direction → "moving"
mrc/[id]/turnout/direction/set → "unknown"
```
där meddelanden betyder följande:

**closed-closed** betyder att en korsningsväxel ska läggas för rakt genomgående trafik

**thrown-closed** betyder att en korsningsväxel ska läggas från svängande till rakt

**closed-thrown** betyder att en korsningsväxel ska läggas från rakt till svängande

**thrown-thrown** betyder att en korsningsväxel ska läggas för korsande trafik

**unknown** när växeln är i okänt läge, exempelvis direkt efter en start av enheten
