---
title: Elektroniken
---
Elektroniken för MMRC växel-/servostyrning är ganska enkel, några resistorer, lysdioder och en tryckknapp behöver monteras tillsammans med en kretskortsdator och ett mönsterkort.

## Kretskortet
Börja tillverkningen av kretskortet genom att först löda resistorerna på sina platser. Värdet på dessa kan behöva varieras beroende på vilken färg man har på lysdioderna och vilken spänning kretskortsdatorn har på sina utgångar. I detta fall har vi 3.3V-utgångar och gröna lysdioder så då fungerar 330 Ohm resistorer bra.

![Kretskortet](../../img/turnout-pcb.svg)

För att tryckknappen ska kunna detekteras behövs även en resistor på 10 kOhm. Löd till sist stiftlister för 5V-matning (2 pin), servon (2 x 3 pin) samt en hylslist för styrning/indikering (4 pin).


## Styrning och indikering
För att både kunna styra växeln/servot och se i vilken läge den står, behöver man koppla in en tryckknapp och två lysdioder. Dessa måste först fysiskt placeras i någon panel eller liknande. Därefter kopplas sladdarna för lysdioder och tryckknapp till en stiftlist. (Det är denna stiftlist som senare kopplas in till kretskortets hylslist.)

![Styrning](../../img/turnout-button.svg)

Har man inte behov av indikering, kan man bara låta bli att ansluta lysdioderna.


## Styrenheten
Till sist behöver man koppla ihop kretskortsdator med kretskortet. Det sker genom att löda åtta olika kablar enligt schemat som visas här. **Observera** att kablarnas längd måste anpassas efter den låda allting sedan ska stoppas in i!

![Styrenheten](../../img/turnout-solder.svg)


## Hopkoppling
Nu är allting klart för att kopplas ihop till en fungerande enhet.

 - Ett eller två servon kopplas till de trepoliga stiftlisterna på kretskortet
 - Knapp & lysdioder till den 4-poliga hylslisten
 - 5V-matning kan antingen ske via micro-USB-kontakten direkt på kretskortsdatorn, alternativt via en 2-polig hylslist till kretskortet.

![Hopkoppling](../../img/turnout-assemble.svg)

Det enda som nu saknas för att kunna styra en växel, är att ladda mjukvaran i kretskortsdatorn.

