---
title: Meddelandestruktur
---

Principen för MQTT är att man skickar ett meddelande (payload) till ett specifikt ämne (topic). Andra kan sedan välja att lyssa på eller prenumerera (subscribe) på ett ämne. När någon sen skickar (publish) ett meddelande till ett ämne, kommer detta meddelande att vidarebefordras till alla som valt att prenumerera/lyssna på detta ämne.

I centrum för detta förfarande finns en meddelandeserver (broker). Det är en central programvara vars enda uppgift lite förenklat är att hantera ämnen, meddelanden och prenumerationer. 

### Ordlista

|Svenska   |Engelska|Förklaring|
|----------|--------|----------|
|ämne      |topic   |          |
|meddelande|payload ||
|enhet     |device  ||
|funktion  |node    ||
|egenskap  |property||


### Uppbyggnad
Ett ämne är alltid uppbyggt på följande sätt:

```
mmrc/device/node/property
```


### Attribut
På varje nivå i strukturen kan man sedan sätta attribut, vilka kan varierar beroende på nivån. Dessa attribut används till att ge information om just den nivå där attributet finns, exempelvis:

`mmrc/device/$name`
där man då har möjlighet att ge enheten ett läsbart namn, kanske "Växel 22".

`mmrc/device/node/$name`
där man ger en av enhetens funktioner ett läsbart namn, kanske "Växelstyrning".

`mmrc/device/node/property/$name`
där man ger funktionens egenskap ett namn, kanske "Riktning".

Vilka attribut som finns och måste användas, finns beskrivet i [Konventionen](conv-restriction.md).


### Base topic
Den första nivån i MMRC-strukturen och som grund för alla ämnen i MMRC används följande:

```
mmrc/
```

Denna start på ämnet visar att du följer MMRC-konventionen och då ska alltså alla ämnen börja med denna text, exempelvis

```
mmrc/pkin-to001/turnout/turn
mmrc/1270262539-af/pushbutton/push
mmrc/bwah-0012/signal/image`
```

Gör du din egen variant av MMRC eller MQTT ämnesstruktur, så måste du hitta på ett eget Base topic.



### Device
Den andra nivån i MMRC-strukturen är identiteten på och informationen om själva enheten:

```
mmrc/pkin-sj06/
```

Här är alltså `pkin-sj06` enhetens identitet i MMRC. Den identiteten måste vara unik och lämpligen skapar man den utifrån sitt namn, järnvägens eller modulens namn och ett löpnummer eller liknande. Exempel på detta kan vara `twah-sj06`, `mne-1955` eller `ssva-hfs`.

De attribut som finns till den hör nivån är tre stycken och de bildar då tre ämnen som man både kan skicka meddelanden (publish) till och hämta information (subscribe) från:

```
mmrc/pkin-sj06/$name
mmrc/pkin-sj06/$state
mmrc/pkin-sj06/$nodes
```
 
- **$name** är det mer läsvänliga namnet på enheten. _Exempelvis "Suckunge modul 6" eller "Holmfors station"_
- **$state** talar om i vilken status enheten befinner sig i. Detta är en speciell inställning som även kan visa när en enhet plötslig slutat fungera. Här finns det definierade status i [Konventionen](conv-restriction) som ska användas.
- **$nodes** är en kommaseparerad lista över vilka olika funktioner (noder) det finns i enheten. Olika funktioner kan göra olika saker, kanske både hantera en knapp, en lysdiod och en växel.  _Exempelvis "turnout1,turnout2" eller "button,led,turnout"._

### Några exempel

```
mmrc/pkin-1234/$name -> "Växel 22"
```

Här har alltså ämnet `mmrc/pkin-1234/$name` fått innehållet `Växel 22`. Exempelvis kan andra enheter alltså få reda på vad denna enhet har för namn genom att hämta information (subscribe) från ämnet `mmrc/pkin-1234/$name`.

```
mmrc/pkin-1234/$state -> "init"
```

Enhetens status har här satts till `init` vilket enligt konventionen betyder att den är på väg att starta men inte är rikigt färdig. Programvaran i enheten ska sen sätta meddelandet `ready` när den är klar att börja användas.

```
mmrc/pkin-1234/$nodes -> "turnout,button"
```

Det här ämnet talar om vilka funktioner en enhet har. Eftersom konventionen inte definierar vilka funktioner som kan finnas är deras namn/ämne valfritt. Men istället måste man då ange deras namn här.

De funktioner som anges här, blir alltså ämnet för nästa nivå i strukturen. Så för enheten i detta exempel finns det två ämnen på nivå 3 i strukturen, nämligen `mmrc/pkin-1234/turnout`och `mmrc/pkin-1234/button`.



### Node
På den tredje nivån hamnar all information om klientens olika noder, eller kanske man kan kalla dem funktioner. Följande inställningar behöver göras per node:

- **nodeID** är den unika identiteten för denna node. Det kan exempelvis vara "turnout", "signal" eller "button" och om det finns flera noder av samma sort, kanske "signal1" och "signal2".
- **$name** är det mer läsvänliga namnet på noden. _Exempelvis "Växel 01" eller "Infartssignal vänster"_
- **$type** beskriver vilken typ av nod det är - vad den gör/hanterar. Här är det ganska fritt vad som anges, men lämpligt kan vara att ange något i stil med "huvudsignal" eller "2-vägs-växel".
- **$properties** är en kommaseparerad lista över vilka olika egenskaper denna node har. Informationen i denna lista kommer från nodens respektive egenskaper.


### Föreslagna funktioner

```
mmrc/pkin-1234/turnout
mmrc/pkin-1234/button
mmrc/pkin-1234/switch
mmrc/pkin-1234/signal

mmrc/pkin-1234/barrier
mmrc/pkin-1234/decoupler
```

Har man flera liknande funktioner, exempelvis två knappar som styr två växlar, kan man använda följande namn/funktioner:

```
mmrc/pkin-1234/turnout1
mmrc/pkin-1234/turnout2
mmrc/pkin-1234/button1
mmrc/pkin-1234/button2
```


### Property
På sista nivån talar man om vilka egenskaper varje nod har.

- **property** är en (av kanske flera) egenskaper som denna denna node har. För en signal skulle det kunna vara "main" och "slave" för huvudsignal och försignal eller för enklare saker kanske bara "move", "light" eller "push".
- **$name** är det mer läsvänliga namnet på egenskapen. _Exempelvis "Växelomläggning" eller "Signalbild"_
- **$datatype** beskriver vilken typ av data som kan läsas från och/eller skickas till egenskapen. Vilka egenskaper som kan förekomma finns att läsa i MMRC Convention. _Exempelvis "string" eller "boolean"._



