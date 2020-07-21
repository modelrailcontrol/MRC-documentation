---
title: Introduktion
---

Principen för MQTT är att man skickar (publish) ett meddelande (payload) till ett specifikt ämne (topic). Andra kan sedan välja att lyssa på eller prenumerera (subscribe) på ett ämne. Så varje gång någon skickar (publish) ett meddelande (payload) till ett ämne (topic), kommer detta meddelande att vidarebefordras till alla som valt att prenumerera/lyssna (subscribe) på detta ämne.

![Principen för MQTT](../img/struct-overview.svg)

I centrum för detta förfarande finns en meddelandeserver (broker). Det är en central programvara vars enda uppgift lite förenklat är att hantera ämnen, meddelanden och prenumerationer. 
Man kan även göra liknelsen att brokerns uppgift är att hantera en massa fack (subject) med meddelanden (payload) som enheter kan skriva dit (publish) eller hämta (subsrcibe).


### Ordlista

|Svenska   |Engelska|Förklaring|
|----------|--------|----------|
|ämne      |topic   |          |
|meddelande|payload ||
|enhet     |device  ||
|funktion  |node    ||
|egenskap  |property||


## Uppbyggnad
Ett ämne i MMRC är alltid uppbyggt på följande sätt:

```
mmrc/device/node/property
```


## Attribut
På varje nivå i strukturen kan man sedan sätta attribut, vilka kan varierar beroende på nivån. Dessa attribut används till att ge information om just den nivå där attributet finns, exempelvis:

`mmrc/device/$name`
där man då har möjlighet att ge enheten ett läsbart namn, kanske "Växel 22".

`mmrc/device/node/$name`
där man ger en av enhetens funktioner ett läsbart namn, kanske "Växelstyrning".

`mmrc/device/node/property/$name`
där man ger funktionens egenskap ett namn, kanske "Riktning".

Vilka attribut som finns och måste användas, finns beskrivet i [Konventionen](conv-restriction.md).


## Base topic
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
