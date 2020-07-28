---
title: Enheters grundinställning
---

En viktigt tanke med MRC är att enheter ska kunna kommunicera med varandra via trådlöst nätverk/wifi. När en MRC-enhet startar, försöker den alltid koppla upp sig mot samma nätverk som förra gången. Skulle den då inte hitta nätverket, startar den istället en egen webbserver/accesspunkt och visar en sida där nya nätverksinställningar kan göras.

Dessutom kan man ställa in enheten så att den alltid startar med att visa sin egen webbserver/accesspunkt en viss tid, i normalfallet 30 sekunder. Under denna tid har man då möjlighet att komma åt och ändra de inställningar som finns i enheten.


## Starta MRC-enheten
När du startar din MRC-enhet första gången, eller när du bytt nätverk, måste du göra några nya inställningar. Det gör man lämpligen via en mobiltelefon eller surfplatta med wifi.

Starta först mobilen och gå till dess nätverksinställningar. Starta sedan MRC-enheten. Efter en kort stund kan du troligen se eller ett öppet nätverk som vanligen heter “MRC-client”. Eventuellt måste du manuellt scanna efter nya nätverk för att hitta enheten.

![](../../img/clients/mrc-settings01.svg)

Anslut nu till detta nätverk. Har du inte ändrat själv i programkoden, så ska lösenordet vara “mrc4president” (stora bokstaven I).

![](../../img/clients/mrc-settings02.svg)

Du kan sedan starta mobiltelefonens webbläsare och surfa till godtycklig webbplats. Genom att du är ansluten till ett väldigt lokalt nätverk, kommer du bara att hamna på MRC-enhetens egen startsida. Där får du lite information om enheten och en länk till inställningarna.

![](../../img/clients/mrc-settings03.svg)


## Inställningar för wifi och MQTT
Om du klickar på länken Inställningar får du nu möjlighet att se och ändra alla enhetens inställningar. Första gången måste du alltid sätta nytt lösenord till inställningarna (AP password) och ange nätverksuppgifterna.

![](../../img/clients/mrc-settings04.svg)

Olika enheter kan ha olika inställningar, men alla enheter har följande grundläggande för sin kommunikation:

 - `Thing name:` Det namn som visas t.ex när du via en mobiltelefon vill ansluta till enhetens eget nätverk.
 - `AP password:` Lösenordet som behövs för att ansluta till enhetens eget nätverk.
 - `WiFi SSID:` Namnet på det MRC-nätverk du vill ansluta enheten till
 - `WiFi password:` Lösenordet för det MRC-nätverk du ansluter enheten till
 - `Startup delay:` Den tid som du har på dig att ansluta till enhetens eget nätverk, varje gång den startas. Normalt 30 sekunder.

Dessutom behöver alla enheter ha en del grundläggande information för att kunna prata med varandra:

 - `Enhetens unika id:` Varje enhet på ett och samma MRC-nätverk måste ha ett unikt id.
 - `Enhetens namn:` Ett mer ”läsvänligt” namn på enheten.
 - `MQTT IP-adress:` IP-adressen till den server (på MRC-nätverket) där MQTT körs.
 - `MQTT-port:` Det portnummer som MQTT-servern använder, vanligen 1883


## Enhetsspecifika inställningar
Varje enhet har sen en del inställningar som är specifika för vad den gör. Vilka dessa är och hur de kan ställas in redovisas i respektive enhets dokumentation.


## Spara inställningarna
När du ställt in allting och vill spara det, går du längst ner på webbsidan och klickar på den blåa Apply-knappen. Då sparas inställningarna och enheten kommer att använda dem i fortsättningen.

![Spara med Applyknappen](../../img/apply-knapp.svg)

Eftersom enhetens webbserver/accesspunkt finns kvar så länge du är ansluten till den, är det lämpligt att även koppla bort din telefon från enhetens accesspunkt “MRC-client” (eller det namn du valt i ”Thing name”).
