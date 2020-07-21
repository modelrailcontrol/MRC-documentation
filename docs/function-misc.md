---
title: Övrigt
---

## Block
När det gäller blockdetektering finns det inga kommando. Ett block är ju endast en avkänning och den använder typen `block`:

```
mmrc/[id]/[node]/$type = block
```

De ämnen som då _måste_ finnas för ett block är dessa:

```
mmrc/[id]/[node]/detection
mmrc/[id]/[node]/direction
```

Det betyder att ett block både kan känna av att det är upptaget och i vilken riktning tåget åker. Meddelanden som används för `detection` är:

```
mmrc/[id]/[node]/detection -> free
mmrc/[id]/[node]/detection -> occupied
```

**free** när inget tåg finns i blocket

**occupied** när ett tåg finns i blocket

och för `direction` (en funktion som kanske inte alltid finns):

```
mmrc/[id]/[node]/direction -> up
mmrc/[id]/[node]/direction -> down
mmrc/[id]/[node]/direction -> unknown
```

**up** ena riktningen (går inte att säga vilken)

**down** andra riktningen (går inte att säga vilken)

**unknown** för att indikera att riktning inte kan kännas av.

