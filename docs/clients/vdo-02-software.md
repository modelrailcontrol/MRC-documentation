---
title: Programvara
---

För att allting ska fungera och video kunna skickas från kameran via Raspberryn ut på trådlösa nätet, behöver programvara.


## MotionEyeOS
Här är det smidigt att använda [MotionEyeOS](https://github.com/ccrisan/motioneyeos/wiki) som enkelt installeras på ett SD-kort enligt instruktionerna på deras wiki.

Det finns två viktiga saker att tänka på med MotionEyeOS på en Raspberry Pi Zero W:

 - Du behöver *inte* packa upp filen du laddar hem
 - Du får inte glömma att konfigurera trådlösa nätverket

Trots att installationssidan (i juli 2020) påstår att du behöver packa upp den fil du laddar hem, så behövs inte det. Filen laddas hem i ett format som du kan skriva direkt till ditt SD-kort.

På en Raspberry Pi Zero W behöver man särskilt tänka på att konfigurera det trådlösa nätverket innan man startar sin Raspberry första gången. Det finns beskrivet på olika sidor för Linux (direkt på [installationssidan](https://github.com/ccrisan/motioneyeos/wiki/Installation)) och Windows (enligt sidan [Wifi Preconfiguration](https://github.com/ccrisan/motioneyeos/wiki/Wifi-Preconfiguration)).


## Montera ihop allting
Det näst sista steget är att bara montera ihop Raspberry Pi Zero W med kameramodulen och stoppa i SD-kortet. FRör att testa är det nu bara att ansluta USB-laddaren så ska allting starta igång.

![Raspberry Pi Zero W med Spy Camera](../../img/misc-spycam01.png)

Men här följer förstås även ett arbete med att bygga in Raspberryn i din layout och kanske snyggt dölja kameran.


## IP-adressen
För att titta på videon behöver man hitta IP-adressen (webbadressen) till Raspberryn. Det behöver man göra via sin router och det görs på olika sätt i olika routrar.

När du väl hittat IP-adressen, tar du en annan dator, läsplatta eller smartphone och startar dess webbläsare. Skriv sedan in IP-adressen till Raspberryn i webbläsarens adressrad och strax ska du komma till MotionEyeOS.
Du kan nu logga in med användarnamn `admin` utan lösenord och börja utforska video-möjligheterna!
