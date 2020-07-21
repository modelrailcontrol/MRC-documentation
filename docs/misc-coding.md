---
title: Kodning
---

Här samlar jag tills vidare en del utvekclar-information kring MMRC.

## Servostyrning

### Inkludera
Tidigt i programmet behöver man inkludera själva servostyrningsklassen. Dessförinnan måste filerna `mmrcServo.h` och `mmrcServo.cpp` ha placerats i samma mapp som ditt styrprogram.

```
#include "mmrcServo.h"        // Handle turnout servos
```

Nästa steg är att definiera ett objekt för ett servo.

```
mmrcServo turnoutServo(pin);
```


### Användning
Ett första biblioteket är gjort för styrning av ett servo. Du som programmerare behöver inte bry dig om hur koden ser ut, utan behöver bara lära dig hantera de funktioner du behöver, exempelvis:

```
servoVx1.limits(max, min, speed, back);
```

Sätter värdena för servot: max utslag, min utslag och med vilken hastighet det ska röra sig

```
servoVx1.onFinished(functionName);
```

Talar om vilken funktion som ska köras när servo rört sig klart (så man kan sätta t.ex en signal eller statusdiod).

```
servoVx1.through();
```
Ställer växeln (servot) i läge rakt fram.

```
servoVx1.diverge();
```

Ställer växeln (servot) i läge sväng


## Github issues
Så här används etiketterna för Ärenden på Github:

![](../img/github-issues.svg)