---
title: Mönsterkort
---

För att enklare koppla ihop sin MJ-styrning, kan man behöva ha mönsterkort att montera kretsar på. En del mönsterkort finns färdiga både för egen tillverkning och för beställning hos Aisler.

Underlagen för dessa mönsterkort finns att hämta i detta [Github repository](https://github.com/mekanoid/MMRC-pcb)


## Styra en växel
Mönsterkort till styrning av en växel. Växeln kan styras med en tryckknapp och har två lysdioder som indikerar växelläget. Växlar som kan hanteras är höger- och vänsterväxel eller Y-växel.

![Mönsterkort 2turnout](../img/pcb-2turnout-plain.svg)

Genom att kortet har anslutning för två servon, är det även möjligt att koppla in en växel till som styrs av samma tryckknapp som den första, exempelvis för spårbyte eller skyddsväxel.

Detta mönsterkort har testats och fungerar. Det finns att köpa färdigt (i 3-pack) [från Aisler](https://aisler.net/p/XVYMUWEX).

### Beskrivning
Mönsterkortet är dubbelsidigt och har måtten 17x35 mm. Det är tänkt att användas tillsammans med en kretskortsdator typ Arduino. Via kortet kan man ansluta två servon, en knapp och två lysdioder till kretskortsdatorn.

`R1` och `R2` är till för att begränsa strömmen till lysdioderna. De kan normal vara runt 120 Ohm för 3.3V matning och runt 330 Ohm för 5V-matning, men storleken är förstås beroende av vilken typ av lysdiod du använder och vilken ljusstyrka du vill ha. `R3` är ett pullup-motstånd och bör lämpligen vara på 10 kOhm.

![Anslutningar](../img/pcb-2turnout-connections.svg)

Till vänster finns anslutning för tryckknapp (`-` och `Btn`) och två lysdioder (`L1` och `L2`). 

Upptill i mitten kan man ansluta strömmatning på lite olika sätt. Man ansluter normalt en yttre strömmatning till en av `-` och `5V`-anslutningarna och kretskortsdatorns 5V-matning till de andra.
Om kretskortsdatorn använder 3.3V för sin kommunikation ansluts dess 3.3V-matning till `3V`, men om den har 5V för kommunikationen ansluts dess 5V-matning istället.

Till höger finns anslutningsmöjlighet för två servon (`S1` och `S2`). 

Nere till höger finns anslutningsmöjligheterna till kretskortsdatorn; lysdioder (`L1` och `L2`), tryckknapp (`Btn`) och servostyrning ()`S1` och `S2`).

För alla anslutningar kan man välja att antingen löda direkt mot mönsterkortet eller montera stift- eller hylslister för mer flexibel anslutning. Ett exempel på inkoppling och användning finns på sidan [Bygga växelstyrning](start-turnout)

### Strömmatning
Man kan strömmata kretskortet & kretskortsdatorn på lite olika sätt. Konstruktionen är gjord för att kunna hantera både 3.3V- och 5V-baserade kretskortsdatorer.

Hur man använder anslutningarna beror också på hur man vill (och kan) strömförsörja kretskortsdatorn samt om den orkar driva servona.

![Kopplingsschema](../img/pcb-2turnout-schematic.svg)

För 5V-baserade kretskortsdatorer finns följande alternativ:
 - Man matar kretskortsdatorn separat och ansluter `5V`- och `-` på kretskortet till extern strömmatning (t.ex USB-adapter)
 - Man matar kretskort och kretskortsdator gemensamt antingen från kretskortsdatorn om den orkar driva servon eller från `5V`- och `-` på kretskortet samt ansluter `5V`- och `-` mellan kretskort och kretskortsdator.
I bägge alternativen kopplar man ihop `5V`- och `3.3V`-pinnarna på kretskortet.

För 3.3V-baserade kretskortsdatorer gäller följande:
 - Man matar kretskortsdatorn separat och ansluter `5V`- och `-` på kretskortet till extern strömmatning (t.ex USB-adapter). Man ansluter `3V` till 3.3V-matning på kretskortsdatorn.

Det finns även en möjlighet att ansluta flera kretskort i serie och då använder man de både strömanslutningarna till att mata vidare strömförsörjningen.