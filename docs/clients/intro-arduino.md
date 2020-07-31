---
title: Börja programmera
---
Det krävs en del förberedelser för att kunna programmera en Arduino kretskortsdator. Det mesta gör man bara en gång och nedan följer en beskrivning av de olika stegen.

## Arduino IDE
Börja med att ladda hem Arduinos IDE/utvecklingsmiljö från sidan https://www.arduino.cc/en/Main/Software. Det finns versioner för både Windows, Mac och Linux. Installera utvecklingsmiljön på din dator, instruktioner finns på sidan https://www.arduino.cc/en/Guide/HomePage.

![Ladda hem Arduion IDE](/img/mrc-sw01.png)

Observera att man i Linux kan få ett felmeddelande om åtkomst till serieporten (Error opening serial port…) första gången man startar utvecklingsmiljön. Detta har att göra med en begränsad behörighet och det finns instruktioner för hur det åtgärdas längst ner på installationssidan för Linux.


## Drivrutin för USB-krets CH340
För vissa (billigare?) kretskortsdatorer måste man på Windows installera drivrutiner för en USB-krets som heter CH340. Det finns en beskrivning av hur man gör detta hos exempelvis Lawicel: http://www.lawicel.se/blog/esp8266-d1-mini-med-ch340/


## Kretskortsdatorn
För att kunna programmera Arduinos med ESP8266-kretsar behöver den typen av kort läggas till i Arduinos utvecklingsmiljö. Det sker på följande sätt.

### Steg 1 - Lägg till kort
Gå till utvecklingsmiljöns inställningar via Fil -> Inställningar. Lägg sen till webbadressen ”http://arduino.esp8266.com/stable/package_esp8266com_index.json” i fältet “Additional Board Manager URLs” och klicka på Ok-knappen.

![Lägg till kort](/img/mrc-sw02.png)

### Steg 2 - Installera kort
Öppna sedan Korthanteraren via menyn Verktyg -> Kort: ”xxxx” -> Korthanterare… Scrolla ner till eller sök efter “esp8266” och klicka sedan på Install-knappen (saknas på denna bild) för att installera kortet. Stäng sedan Korthanteraren.

 ![Installera kort](/img/mrc-sw03.png)

### Steg 3 - Välj kretskortsdator
Välj nu den kretskortsdator du vill arbeta med via menyn Verktyg -> Kort: ”xxxx”. I fallet med en Wemos eller klon, kan man välja “LOLIN(WEMOS) D1 R2 & Mini”. Du måste även välja vilken port kretskortsdatorn är ansluten via menyn Verktyg -> Port.

![Välj kretskortsdator](/img/mrc-sw04.png)

### Steg 4 - Starta om
Avsluta nu Arduinos utvecklingsmiljö och starta den igen.


## Bibliotek

Programvaran för MRC använder en del färdiga funktioner från olika bibliotek eller ”libraries”. Dessa bibliotek måste också läggas till i utvecklingsmiljön.

### Steg 1 - Hantera bibliotek
I Arduino utvecklingsmiljön väljer du menyn Verktyg -> Hantera bibliotek… Sök sedan efter biblioteket i filtreringsrutan.

![Hantera bibliotek](/img/mrc-sw05.png)

### Steg 2 - Installera bibliotek
När du hittat rätt bibliotek, klickar då på Installera-knappen (saknas i bilden ovan) för att installera den senaste versionen av biblioteket. Upprepa nu detta för de tre bibliotek som behövs:

 - EasyButton by Evert Arias
 - IotWebConf by Balazs Kelemen
 - PubSubClient by Nick O’Leary

När du nu installerat alla nödvändiga kort och bibliotek, är utvecklingsmiljön klar för programmering.


## MRC programvara
Nu är det dags att ladda hem och installera själva MRC-programvaran. Först ska programvaran laddas hem och från Github, normalt via en ZIP-fil.

![MRC programvara](/img/mrc-sw06.png)

Packa sedan upp ZIP-filen i mappen för Arduino utvecklingsmiljöns skissbok (var den mappen finns, kan man se via menyn Fil -> Inställningar). Starta sedan Arduino utvecklingsmiljön och välj Fil -> Skissbok och sen den programvara du nyss laddade hem.

![Lägg i skissbok](/img/mrc-sw08.png)


### Övervaka programvaran
Första gången du installerar och kör MRC-programvaran kan det vara lämplig att se vad som händer i programmet. Starta därför Seriell monitor via menyn Verktyg -> Seriell monitor och se till att hastigheten är satt till 9600 baud.

![Serial monitor](/img/mrc-sw09.png)


### Anslut kretskortsdatorn
Anslut nu kretskortsdatorn via vald USB-port (Verktyg -> Port). Det kan vara lämpligt att inte ha servon anslutna till kretskortsdatorn första gången man startar den, eftersom deras läge är okänt och de kan ställas i fel/konstiga lägen.

![Installera programvaran](/img/mrc-sw11.png)

Som nästa steg är det nu dags att installera programvaran på kretskortsdatorn. Det gör man via menyn Skiss –> Ladda upp, Ctrl+U eller med pilhöger-symbolen i verktygsraden. Uppladdningen kan ta några sekunder och sen är MRC förhoppningsvis igång.


### Testa!
Har allt gått bra så ska du nu i Seriell Monitor kunna se att kretskortsdator gör en massa olika saker. Du ska exempelvis kunna se att MRC försöker skapa ett eget nätverk (AP) och att den publicerar och prenumererar på en del MQTT-meddelanden. Beroende på vad du nu har kopplat till kretskortsdatorn ska du nu kunna testa dess olika funktioner och se vad som händer i Seriell monitor.


## Stänga av meddelanden
En nackdel med Seriell monitor är att den ibland kanske ”krockar” med en utgång på kretskortsdatorn som även MRC använder. Så när du är klar med testandet och ser att MRC fungerar som det ska, kan du lämpligen stänga av utskrifterna till Seriell monitor.

![Visa felsökningsmeddelanden](/img/mrc-sw10.png)

Du stänger av utskrifterna genom att leta reda på raden ”byte debug = 1;” i programkoden. Ändra till en nolla (0) istället ”byte debug = 0;” och spara programmet. Ladda upp programvaran i kretskortsdatorn igen och därefter ska även funktioner kopplade till kretskortsdatorns Tx-utgång fungera med MRC.
