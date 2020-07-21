---
title: Device / enhet
---

Den andra nivån i MRC-strukturen är identiteten på, och informationen om, själva enheten:

```
mrc/pkin-sj06/
```

Här är alltså `pkin-sj06` enhetens identitet i MRC. Den identiteten måste vara unik och lämpligen skapar man den utifrån sitt namn, järnvägens eller modulens namn och ett löpnummer, datum eller liknande. Exempel på detta kan vara `twah-sj06`, `mne-1955` eller `hfs-170606`.


## Attribut

De attribut som finns till den här nivån är tre stycken och de bildar då tre ämnen som man både kan skicka meddelanden (publish) till och hämta information (subscribe) från:

```
mrc/pkin-sj06/$name
mrc/pkin-sj06/$state
mrc/pkin-sj06/$nodes
```
 
- **$name** är det mer läsvänliga namnet på enheten. _Exempelvis "Suckunge modul 6" eller "Holmfors station"_
- **$state** talar om i vilken status enheten befinner sig i. Detta är en speciell inställning som även kan visa när en enhet plötslig slutat fungera. Här finns det definierade status i [Konventionen](conv-restriction) som ska användas.
- **$nodes** är en kommaseparerad lista över vilka olika funktioner (noder) det finns i enheten. Olika funktioner kan göra olika saker, kanske både hantera en knapp, en lysdiod och en växel.  _Exempelvis "turnout1,turnout2" eller "button,led,turnout"._


## Några exempel

```
mrc/pkin-1234/$name → "Växel 22"
```

Här har alltså ämnet `mrc/pkin-1234/$name` fått innehållet `Växel 22`. Exempelvis kan andra enheter alltså få reda på vad denna enhet har för namn genom att hämta information (subscribe) från ämnet `mrc/pkin-1234/$name`.

```
mrc/pkin-1234/$state → "init"
```

Enhetens status har här satts till `init` vilket enligt konventionen betyder att den är på väg att starta men inte är rikigt färdig. Programvaran i enheten ska sen sätta meddelandet `ready` i detta ämne när den är klar att börja användas.

```
mrc/pkin-1234/$nodes → "turnout,button"
```

Det här ämnet talar om vilka funktioner en enhet har. Eftersom konventionen inte definierar vilka funktioner som kan finnas är deras namn/ämne valfritt. Men istället måste man då ange deras namn här. 

De funktioner som anges här, blir alltså ämnen för nästa nivå i strukturen. Så för enheten i detta exempel finns det två ämnen på nivå 3 i strukturen, nämligen `mrc/pkin-1234/turnout`och `mrc/pkin-1234/button`.

:::note Observera
I MRC finns det förslag på vanliga ämnen/funktioner som kan vara användbara på en modelljärnväg. Dessa är frivilliga att använda, men vill man vara säker på att enheterna kan kommunicera med varandra, är det bra att använda dem. Läs mer om detta i avdelningen [MRC funktioner](function-01-intro).