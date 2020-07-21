---
title: Växlar
---

## Tvåvägsväxel
För växel med två lägen (vänster, höger eller Y) använder vi typen `2turnout`:

```
mmrc/[id]/[node]/$type = 2turnout
```

De ämnen som då _måste_ finnas för en tvåvägsväxel är dessa:

```
mmrc/[id]/[node]/2turnout/turn/
mmrc/[id]/[node]/2turnout/turn/set
```

och meddelanden som används är `throw` och `through`, exempelvis:

```
mmrc/[id]/[node]/2turnout/turn/ -> throw
mmrc/[id]/[node]/2turnout/turn/ -> through
```
där meddelanden betyder följande:

**throw** betyder att växeln ska lägga till sidospår

**through** betyder att växeln ska lägga rakt


## Trevägsväxel
För växel med tre lägen (vänster, höger och rakt) använder vi typen `3turnout`:

```
mmrc/[id]/[node]/$type = 3turnout
```

De ämnen som då _måste_ finnas för en trevägsväxel är dessa:

```
mmrc/[id]/[node]/3turnout/turn/
mmrc/[id]/[node]/3turnout/turn/set
```

och meddelanden som används är `left`, `right` och `through`, exempelvis:

```
mmrc/[id]/[node]/3turnout/turn/ -> left
mmrc/[id]/[node]/3turnout/turn/ -> right
mmrc/[id]/[node]/3turnout/turn/ -> through
```
där meddelanden betyder följande:

**through** betyder att växeln ska lägga rakt

**left** betyder att en 3-vägsväxel ska läggas till sidospår vänster

**right** betyder att en 3-vägsväxel ska läggas till sidospår höger


## Korsningsväxel
För en korsningsväxel med upp till fyra lägen använder vi typen `4turnout`:

```
mmrc/[id]/[node]/$type = 4turnout
```

De ämnen som då _måste_ finnas för en korsningsväxel är dessa:

```
mmrc/[id]/[node]/4turnout/turn/
mmrc/[id]/[node]/4turnout/turn/set
```

och meddelanden som används är `???`, `???`, `???` och `???`, exempelvis:

```
mmrc/[id]/[node]/4turnout/turn/ -> ???
mmrc/[id]/[node]/4turnout/turn/ -> ???
mmrc/[id]/[node]/4turnout/turn/ -> ???
mmrc/[id]/[node]/4turnout/turn/ -> ???
```
där meddelanden betyder följande:

**through-through** betyder att en korsningsväxel ska läggas för rakt genomgående trafik

**throw-through** betyder att en korsningsväxel ska läggas från svängande till rakt

**through-throw** betyder att en korsningsväxel ska läggas från rakt till svängande

**throw-throw** betyder att en korsningsväxel ska läggas för korsande trafik
