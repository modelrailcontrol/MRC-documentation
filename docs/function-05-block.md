---
title: Block
---

När det gäller blockdetektering finns det inga kommandon. Ett block är ju endast en avkänning, men det kan vara flera olika typer av avkänning.

## Enkel blockavkänning
Den enklaste typen av blockavkänning är den som enbart känner av om det finns något på spåret eller inte:

```
mrc/[id]/[node]/$type → "blockdetect"
```

De ämnen som då _måste_ finnas för respektive block är dessa:

```
mrc/[id]/[node]/detection
mrc/[id]/[node]/detection/set
```

Meddelanden som används för `detection` är:

```
mrc/[id]/[node]/detection → "free"
mrc/[id]/[node]/detection → "occupied"
```

**free** när inget tåg finns i blocket

**occupied** när ett tåg finns i blocket


## Blockavkänning med riktning
En lite mer avancerad typ av blockavkänning är den som både kan känna av om det finns något på spåret eller inte samt meddela vilken riktning tåget har.

```
mrc/[id]/[node]/$type → "blockdirection"
```

De ämnen som då _måste_ finnas för respektive block är dessa:

```
mrc/[id]/[node]/detection
mrc/[id]/[node]/detection/set
mrc/[id]/[node]/direction
mrc/[id]/[node]/direction/set
```

Det betyder att detta block både kan känna av att det är upptaget och i vilken riktning tåget åker. Meddelanden som används för `detection` är:

```
mrc/[id]/[node]/detection → "free"
mrc/[id]/[node]/detection → "occupied"
```

**free** när inget tåg finns i blocket

**occupied** när ett tåg finns i blocket

och för `direction` (en funktion som kanske inte alltid finns):

```
mrc/[id]/[node]/direction → "up"
mrc/[id]/[node]/direction → "down"
mrc/[id]/[node]/direction → "unknown"
```

**up** ena riktningen (går inte att säga vilken)

**down** andra riktningen (går inte att säga vilken)

**unknown** för att indikera att riktning inte kan kännas av.


## Blockavkänning med riktning & hastighet
En blockavkänning som både kan känna av om det finns något på spåret eller inte samt meddela vilken riktning tåget har, skulle även kunna beräkna hastigheten på tåget. Ett sådant block har då typen:

```
mrc/[id]/[node]/$type → "blockspeed"
```

De ämnen som då _måste_ finnas för respektive block är dessa:

```
mrc/[id]/[node]/detection
mrc/[id]/[node]/detection/set
mrc/[id]/[node]/direction
mrc/[id]/[node]/direction/set
mrc/[id]/[node]/speed
mrc/[id]/[node]/speed/set
```

Det betyder att detta block både kan känna av att det är upptaget och i vilken riktning tåget åker. Meddelanden som används för `detection` är:

```
mrc/[id]/[node]/detection → "free"
mrc/[id]/[node]/detection → "occupied"
```

**free** när inget tåg finns i blocket

**occupied** när ett tåg finns i blocket

och för `direction` (en funktion som kanske inte alltid finns):

```
mrc/[id]/[node]/direction → "up"
mrc/[id]/[node]/direction → "down"
mrc/[id]/[node]/direction → "unknown"
```

**up** ena riktningen (går inte att säga vilken)

**down** andra riktningen (går inte att säga vilken)

**unknown** för att indikera att riktning inte kan kännas av.

och för `speed` anges hastigheten i meter per sekund (m/s) som ett flyttal:

```
mrc/[id]/[node]/speed → 2,4
```
