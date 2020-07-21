---
title: Signaler
---

## Huvud- och försignaler
Det finns ju ett flertal olika signaler och signalbilder. Men i MMRC förenklar vi detta något genom att skilja på hanteringen av huvudsignal (`mainsignal`) och försignal (`nextsignal`). Det är sedan upp till varje enhet att kombinera dessa meddelanden beroende på vilken typ av signal den styr.

```
mmrc/[id]/[node]/$type = mainsignal
mmrc/[id]/[node]/$type = nextsignal
```

De ämnen som då _måste_ finnas för respektive signal är dessa:

```
mmrc/[id]/[node]/mainsignal
mmrc/[id]/[node]/mainsignal/set
mmrc/[id]/[node]/nextsignal
mmrc/[id]/[node]/nextsignal/set
```
och de meddelanden som används är följande:

|Meddelande|Hsi|Fsi|Förklaring                      |
|----------|:-:|:-:|--------------------------------|
|stop      | x |   |Ger signalbild Stopp            |
|stop      |   | x |Ger signalbild Vänta stopp      |
|fwd80     | x |   |Ger signalbild Kör 80           |
|fwd80     |   | x |Ger signalbild Vänta Kör 80     |
|fwd40     | x |   |Ger signalbild Kör 40           |
|fwd40     |   | x |Ger signalbild Vänta Kör 40     |
|fwd40slow | x |   |Ger signalbild Kör 40, varsamhet|
|fwd40short| x |   |Ger signalbild Kör 40, kort väg |
|fwd40sight| x |   |Ger signalbild Kör på sikt      |


Har man då en signal som kombinerar både huvud och försignal i en tavla, behöver enheten hantera två olika ämnen för att ge rätt signalbild:

```
mmrc/[id]/[node]/mainsignal/set -> fwd80
mmrc/[id]/[node]/nextsignal/set -> stop
```
För en 4- eller 5-ljussignal som visar Kör och Vänta stop.

<!--
## Dvärgsignal

## Övriga signaler
Både Repetersignal, Vägskyddssignal och signaler för Bro, Tunnelport och Skredvarning kan använda samma princip för meddelandehantering
Kan använda `stop` & `go`
-->
