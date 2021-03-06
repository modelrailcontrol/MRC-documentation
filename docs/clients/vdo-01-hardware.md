---
title: Materiel
---

Ett relativt enkelt sätt att sända trådlös video från din modelljärnväg, är att använda en Raspberry Pi med kamera och mjukvaran MotionEyeOS. Du behöver följande.

![Översikt](/img/clients/vdo-overview.svg)


## Raspberry Pi
Smidigast och billigast är att använda en Raspberry Pi Zero W som är en mindre Raspberry med trådlös nätverksanslutning. Man kan köpa en utan stiftlister och låda om man vill, men någon form av USB-laddare med micro-B-kontakt behövs.


## Kamera
Det är kameran som är den viktiga delen. Helst bör den ju vara liten så den kan gömmas i landskapet eller i en byggnad.
Här behöver man lämpligast hitta en Spy Camera eller något liknande, d.v.s en kameramodul som inte är monterad på ett kretskort så som den vanliga kameramodulen till Raspberryn.

När detta skrivs (juli 2020), kan man få tag på sådana hos Electrokit i utföranden med kort eller lång anslutningskabel:

 - [Spy Camera med lång sladd](https://www.electrokit.com/produkt/kamerakort-for-raspberry-pi-spy-camera/) - 599 kr
 - [Kamerakort för Raspberry Pi Zero](https://www.electrokit.com/produkt/kamerakort-for-raspberry-pi-zero/) - 299 kr

Ett större utbud av diverse olika kameror till både Raspberry och Arduino finns exempelvis hos [ArduCam](https://www.arducam.com/).


## Monteringskit
Raspberryn behöver fästas under landskapet och det får du förstås göra på ett sätt som passar just din layout eller modul. Enklast är att skruva fast den underifrån direkt i sina fyra fästhål, men jag har även tagit fram följande monteringskit som man kan skriva ut om man har tillgång till en 3D-skrivare.

Monteringskitet består av en platta som limmas mot undersidan av modulen och som sedan Raspberryn kan skruvas fast i.

![Kamera med monteringskit](/img/clients/vdo-spycam02.png)

Den har en en stång som både är stöd/fäste för kameran och gör det möjligt att vrida kameran i sidled. Eftersom kameran har en flatkabel kan man inte vrida den allt för mycket, så det är viktigt att tänka på var man placerar kameran & Raspberryn.

![Monteringskitets alla delar (utom skruv)](/img/clients/vdo-spycam03.png)

Med det här kitet hamnar mitten på kamerans lins cirka 45 mm ovanför där man fäster plattan på modulens eller layoutens undersida. Det kan alltså vara lämpligt att ha 40 mm "landskap" mellan över- och undersida där kameran placeras.

Underlagen för att skriva ut detta kit finns att hämta i [Github repository](https://github.com/mekanoid/MMRC-3dprint).
