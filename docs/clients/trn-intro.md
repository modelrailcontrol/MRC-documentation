---
title: Introduktion
---

På dessa sidor beskrivs hur du gör en MRC-enhet som kan hantera två växlar var för sig. Varje växel styrs av en egen knapp och har två lysdioder som lägesindikering. De kan dessutom styras från avstånd via trådlös anslutning (wifi).
Det finns även möjlighet att styra två servon till samma växel, så att enheten även kan hantera motstående växlar eller skyddsväxlar.

![Enhetens styrmöjligheter](/img/clients/mrc-2turnout-examples.svg)

## Materiel
För att bygga ihop *en* komplett växelstyrning, behöver du minst följande materiel:

 - Wemos-mini kretskortsdator (eller klon)
 - Mönsterkort, special (*ett per växel*)
 - Stiftlist, 2+3+3 pinnar
 - Hylslist, 4 pinnar
 - Resistorer, en stycken 10 kOhm och två stycken 330 Ohm
 - Lysdioder, två stycken
 - En tryckknapp
 - Ett eller två servon
 - Kopplingstråd, ett par decimeter
 - 5V strömförsörjning, t.ex. USB-laddare

Vill man dessutom ha lite bättre möjligheter att fästa alla prylarna, kan man även behöva följande:
 - 3D-utskriven multibox med lock
 - 3D-utskriven hållare till mulitboxen
 - 3D-utskriven sladdhållare
 - 3D-utskriven styrpanelhållare 

Observera att det här är mer ett exempel på material som kan användas. Det går även att använda helt andra kretskortsdatorer, men då måste man själv anpassa både mjukvara och programvara efter de nya förutsättningarna.

## Licens
Denna programvara är släppt under en GPL 3.0-licens, vilket betyder att du fritt får använda, ändra och publicera den vidare så länge du gör det under samma eller motsvarande licens. Så här säger den engelska versionen:

:::note GPL v3.0
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
:::

Du kan läsa hela licensen på [GNUs webbplats](http://www.gnu.org/licenses/gpl-3.0.html).


## Installation
När du laddat ner programvaran enligt den generella beskrivningen (avsnitt MRC programvara) och valt vilken kretskortsdator du har, ska du bara koppla in den och ladda upp mjukvaran till den. När mjukvaran är uppladda ska enheten vara klar att ställas in och användas.


## Referenser

 - [Kretskortsdator Wemos](https://www.lawicel-shop.se/microkontroller/esp8266-esp32) finns att få tag på hos exempelvis Lawicel.
 - Färdiga [mönsterkort för växelstyrning](https://aisler.net/p/XVYMUWEX) kan du beställa hos Aisler.

