---
title: Materiel
---

Ett relativt enkelt sätt att sända trådlös video från din modelljärnväg, är att använda en Raspberry Pi med kamera och mjukvaran MotionEyeOS. Du behöver följande.

![](../../img/other-video.svg)


## Raspberry Pi
Smidigast och billigast är att använda en Raspberry Pi Zero W som är en mindre Raspberry med trådlös nätverksanslutning. Man kan köpa en utan stiftlister och låda om man vill, men någon form av USB-laddare med micro-B-kontakt behövs.

Raspberryn behöver fästas under landskapet och det får du förstås göra på ett sätt som passar just din layout eller modul. Enklast är att skruva fast den underifrån direkt i sina fyra fästhål.


## Kamera
Det är kameran som är den viktiga delen. Helst bör den ju vara liten så den kan gömmas i landskapet eller i en byggnad.
Här behöver man lämpligast hitta en Spy Camera eller något liknande, d.v.s en kameramodul som inte är monterad på ett kretskort så som den vanliga kameramodulen till Raspberryn.

När detta skrivs (juli 2020), kan man få tag på sådana hos Electrokit i utföranden med kort eller lång anslutningskabel:

 - [Spy Camera med lång sladd](https://www.electrokit.com/produkt/kamerakort-for-raspberry-pi-spy-camera/) - 599 kr
 - [Kamerakort för Raspberry Pi Zero](https://www.electrokit.com/produkt/kamerakort-for-raspberry-pi-zero/) - 299 kr

Ett större utbud av diverse olika kameror till både Raspberry och Arduino finns exempelvis hos [ArduCam](https://www.arducam.com/).


## Monteringskit
För att kunna montera kameran på en av mina moduler, konstruerade jag ett monteringskit. Det består av en platta som limmas mot undersidan av modulen och som sedan Raspberryn kan skruvas fast i.

![Kamera med monteringskit](../../img/misc-spycam02.png)

Den har en en stång som både är stöd/fäste för kameran och gör det möjligt att vrida kameran i sidled. Eftersom kameran har en flatkabel kan man inte vrida den allt för mycket, så det är viktigt att tänka på var man placerar kameran & Raspberryn.

![Monteringskitets alla delar (utom skruv)](../../img/misc-spycam03.png)

Med det här kitet hamnar mitten på kamerans lins cirka 45 mm ovanför där man fäster plattan på modulens eller layoutens undersida. Det kan alltså vara lämpligt att ha 40 mm "landskap" mellan över- och undersida där kameran placeras.

Underlagen för att skriva ut detta kit finns att hämta i [Github repository](https://github.com/mekanoid/MMRC-3dprint).


## Resultatet
När jag väl fäst Raspberryn på modulen (med dubbelhäftande tejp) och limma fast lite låg marktäckning på modulen, såg det ut så här:

![Kameran sticker upp ur landskapet](../../img/misc-spycam04.png)

Jag fortsatte och fäste lite låga buskar kring kameran. I kamerans riktning sluttar landskapet neråt, så jag kunde sätta  allt högre "buskar" längre bort från kameran. De kan inte vara mer än nån centimeter höga, men det är ändå tillräckligt för att få till ett bra landskap.

Runt kameran gjorde jag sedan en större buske, så att kameran döljs från tre håll. Kanske ser busken lite konstig ut med ett hål på ena sidan, men troligen är det inget som betraktaren märker av...

![En bild från kameran](../../img/misc-spycam05.jpg)

Bilderna från kameran kan bli ganska bra, men tyvärr har kameran fel fokusområde för att passa bra till just detta. Och när fokus ändå inte blir bra, har jag även valt att minska upplösningen. På bilden ovan är det 800x600 pixlar, men det fungerar bra även med 640x480 pixlar. Det viktiga med denna modul är ju bara att se om ett tåg står vid signalen och väntar.


## Ändra fokus?
Enligt information på nätet, ska det kunna gå att justera kamerans fokus, trots att den är såld som fastfokus-kamera. Linsen är tydligen bara limmad och med rätt verktyg samt lite "våld" ska man kunna vrida den för att ändra fokus. Har dock inte vågat prova detta ännu, kan kanske bli en senare justering om jag ser behovet eller bygger fler videomoduler.