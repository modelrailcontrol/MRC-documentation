---
title: Enheters inställningar
---

En viktigt tanke med MMRC är att enheter ska kunna kommunicera med varandra via trådlöst nätverk/wifi. När en MMRC-enhet startar, försöker den alltid koppla upp sig mot samma nätverk som förra gången. Skulle den då inte hitta nätverket, startar den istället en egen webbserver/accesspunkt och visar en sida där nya nätverksinställningar kan göras.

Dessutom kan man ställa in enheten så att den alltid startar med att visa sin egen webbserver/accesspunkt en viss tid, i normalfallet 30 sekunder. Under denna tid har man då möjlighet att komma åt och ändra de inställningar som finns i enheten.


## Starta MMRC-enheten
När du startar din MMRC-enhet första gången, eller när du bytt nätverk, måste du göra några nya inställningar. Det gör man lämpligen via en mobiltelefon eller surfplatta med wifi.

Starta först mobilen och gå till dess nätverksinställningar. Starta sedan MMRC-enheten. Efter en kort stund kan du troligen se eller ett öppet nätverk som vanligen heter “MMRC-client”. Eventuellt måste du manuellt scanna efter nya nätverk för att hitta enheten. I exemplet nedan heter nätverket “MMRC 2-signal”.

![](../../img/mmrc-settings01.png)

Anslut nu till detta nätverk. Har du inte ändrat själv i programkoden, så ska lösenordet vara “MmrcIsBest” (stora bokstaven I).

![](../../img/mmrc-settings02.png)

Du kan sedan starta mobiltelefonens webbläsare och surfa till godtycklig webbplats. Genom att du är ansluten till ett väldigt lokalt nätverk, kommer du bara att hamna på MMRC-enhetens egen startsida. Där får du lite information om enheten och en länk till inställningarna.

![](../../img/mmrc-settings03.png)


## Inställningar för wifi och MQTT
Om du klickar på länken Inställningar får du nu möjlighet att se och ändra alla enhetens inställningar. Första gången måste du alltid sätta nytt lösenord till inställningarna (AP password) och ange nätverksuppgifterna.

![](../../img/mmrc-settings04.png)

Olika enheter kan ha olika inställningar, men alla enheter har följande grundläggande för sin kommunikation:

 - `Thing name:` Det namn som visas t.ex när du via en mobiltelefon vill ansluta till enhetens eget nätverk.
 - `AP password:` Lösenordet som behövs för att ansluta till enhetens eget nätverk.
 - `WiFi SSID:` Namnet på det MMRC-nätverk du vill ansluta enheten till
 - `WiFi password:` Lösenordet för det MMRC-nätverk du ansluter enheten till
 - `Startup delay:` Den tid som du har på dig att ansluta till enhetens eget nätverk, varje gång den startas. Normalt 30 sekunder.

Dessutom behöver alla enheter ha en del grundläggande information för att kunna prata med varandra:

 - `Enhetens unika id:` Varje enhet på ett och samma MMRC-nätverk måste ha ett unikt id.
 - `Enhetens namn:` Ett mer ”läsvänligt” namn på enheten.
 - `MQTT IP-adress:` IP-adressen till den server (på MMRC-nätverket) där MQTT körs.
 - `MQTT-port:` Det portnummer som MQTT-servern använder, vanligen 1883


## Enhetsspecifika inställningar
Varje enhet har sen en del inställningar som är specifika för vad den gör. Vilka dessa är och hur de kan ställas in redovisas i respektive enhets dokumentation.


## Spara inställningarna
När du ställt in allting och vill spara det, går du längst ner på webbsidan och klickar på den blåa Apply-knappen. Då sparas inställningarna och enheten kommer att använda dem i fortsättningen.

![](../../img/mmrc-settings06.png)

Eftersom enhetens webbserver/accesspunkt finns kvar så länge du är ansluten till den, är det lämpligt att även koppla bort din telefon från enhetens accesspunkt “MMRC-client” (eller det namn du valt i ”Thing name”).
