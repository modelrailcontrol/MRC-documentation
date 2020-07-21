---
title: Signaler
---

Det finns ju ett flertal olika signaler och signalbilder. MRC har inte ambitionen att ta hänsyn till alla, utan försöker ta hänsyn till de mest användbara, svenska signalerna. Har du specialbehov så ger MRC alltid möjlighet till att skapa egna typer och varianter.

## 2- och 3-ljus huvudsignaler
När det gäller huvudsignaler med två eller tre ljus definieras två olika typer. 

```
mrc/[id]/[node]/$type → "se2hsi"
mrc/[id]/[node]/$type → "se3hsi"
```

De ämnen som då _måste_ finnas för respektive signal är dessa:

```
mrc/[id]/[node]/main
mrc/[id]/[node]/main/set
```

och de meddelanden som används är följande:

|Meddelande|se2hsi|se3hsi|Förklaring                      |
|----------|:----:|:----:|--------------------------------|
|stop      |  x   |  x   |Ger signalbild Stopp            |
|fwd80     |  x   |  x   |Ger signalbild Kör 80           |
|fwd40slow |  x   |  x   |Ger signalbild Kör 40, varsamhet|
|fwd40sight|  x   |      |Ger signalbild Kör på sikt      |


Har man då exempelvis en signal med två eller tre ljus, kan man sätta den till grön med följande ämne och meddelande:

```
mrc/[id]/signal/main/set → "fwd80"
```

När signalen slagit om, meddelar den sin status genom att skriva samma meddelande i sitt statusämne:

```
mrc/[id]/signal/main/ → "fwd80"
```


## 4- och 5-ljus huvudsignaler
När det gäller huvudsignaler med fyra eller fem ljus definieras också två olika typer. 

```
mrc/[id]/[node]/$type → "se4hsi"
mrc/[id]/[node]/$type → "se5hsi"
```

Men när det gäller dessa signaler, skiljer man på hanteringen av för- och huvudsignalerna och de ämnen som då _måste_ finnas för respektive signal är dessa:

```
mrc/[id]/[node]/main
mrc/[id]/[node]/main/set
mrc/[id]/[node]/approach
mrc/[id]/[node]/approach/set
```

och de meddelanden som används är följande:

|Meddelande|se4hsi main|se5hsi main|Förklaring                      |
|----------|:---------:|:---------:|--------------------------------|
|stop      |     x     |     x     |Ger signalbild Stopp            |
|fwd80     |     x     |     x     |Ger signalbild Kör 80           |
|fwd40slow |     x     |     x     |Ger signalbild Kör 40, varsamhet|
|fwd40short|           |     x     |Ger signalbild Kör 40, kort väg |

|Meddelande|se4hsi approach|se5hsi approach|Förklaring                      |
|----------|:-------------:|:-------------:|--------------------------------|
|stop      |      x        |      x        |Ger signalbild Vänta stopp      |
|fwd80     |      x        |      x        |Ger signalbild Vänta Kör 80     |
|fwd40     |               |      x        |Ger signalbild Vänta Kör 40     |


## Försignaler
När det gäller försignaler så definieras två olika typer:

```
mrc/[id]/[node]/$type → "se2fsi"
mrc/[id]/[node]/$type → "se3fsi"
```

De ämnen som då _måste_ finnas för respektive signal är dessa:

```
mrc/[id]/[node]/approach
mrc/[id]/[node]/approach/set
```

och de meddelanden som används är följande:

|Meddelande|se2fsi|se3fsi|Förklaring                      |
|----------|:----:|:----:|--------------------------------|
|stop      |   x  |  x   |Ger signalbild Vänta stopp      |
|fwd80     |   x  |  x   |Ger signalbild Vänta Kör 80     |
|fwd40     |      |  x   |Ger signalbild Vänta Kör 40     |


<!--
## Dvärgsignal

mrc/[id]/[node]/$type = dwarfsignal

## Övriga signaler
Både Repetersignal, Vägskyddssignal och signaler för Bro, Tunnelport och Skredvarning kan använda samma princip för meddelandehantering
Kan använda `stop` & `go`
-->
