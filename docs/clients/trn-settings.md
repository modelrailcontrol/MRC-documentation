---
title: Inställningar
---

När du väl installerat programvara och fått igång enheten, behöver du göra en del specifika inställningar som gäller just växelstyrning.


## Wifi & MQTT-inställningar
Hur du hittar enhetens inställningar och för mer information om de generella MRC-inställningarna för nätverket och kommunikationen mellan enheter, se sidan [Enheters inställningar](intro-wifi).


## Servo-inställningar
Den här enheten hanterar ju i huvudsak servon, så den har flera olika inställningar för dessa. Det finns fyra olika inställningar för varje servo:

![Inställningar för en växel](/img/clients/trn-servosettings.svg)

 - `Servo X min:` Siffra mellan 0 och 255 som talar om var servots ena ändläge ska vara.
 - `Servo X max:` Siffra mellan 0 och 255 som talar om var servots andra ändläge ska vara.
 - `Servo X hastighet:` Siffra som anger hur lång tid det tar mellan varje steg när servot rör sig. Anges i mikrosekunder och ett värde kring 150 kan vara lagom att börja med.
 - `Servo X back:` En siffra från 0 och uppåt som anger antal extra steg servot ska ta utöver max/min-läget, för att sedan gå tillbaka till max/min-läget igen. Kan vara bra att justera om servot hamnar i ett spänt ändläge.

Just inställningarna av servots ändlägen är bra att göra grovt innan det har kopplats in mot växeln (eller vad det ska styra). Detta för att undvika att belasta servot för hårt om ändläget till en början hamnar fel.


## Spara inställningarna
När du ställt in allting och vill spara det, går du längst ner på webbsidan och klickar på den blåa Apply-knappen. Då sparas inställningarna och enheten kommer att använda dem i fortsättningen.

![Apply-knapp](/img/clients/apply-knapp.svg)

Eftersom enhetens webbserver/accesspunkt finns kvar så länge du är ansluten till den, är det lämpligt att även koppla bort din telefon från enhetens accesspunkt “MRC-client” (eller det namn du valt i ”Thing name”).

