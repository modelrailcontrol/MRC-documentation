---
title: Montering
---

Hela växelstyrningen behöver kunna monteras på en modelljärnväg.

## Låda med hållare
Det finns en låda framtagen för växelstyrningen som är anpassad för 3D-utskrift. Den rymmer en Wemos kretskortsdator och ett kretskort. Den har öppningar för de anslutningar som behövs, resetknappen åtkomlig och ett hål så man ser statusdioden på kretskortsdatorn (på baksidan).


![Låda med växelkort](../../img/trn-mounting.svg)

Till lådan finns även en hållare och en avlastning/upphängning för USB-kabel.

Underlagen för all hårdvara finns i ett [Github repository](https://github.com/modelrailcontrol/MRC-3dprint).


## Hopkoppling
Nu är allting klart för att kopplas ihop till en fungerande växelstyrning.

 - Ett eller två servon kopplas till de trepoliga stiftlisterna på kretskortet
 - Knapp & lysdioder till den 4-poliga hylslisten
 - 5V-matning kan antingen ske via micro-USB-kontakten direkt på kretskortsdatorn, alternativt via en 2-polig hylslist till kretskortet.


### Lösa delar
Om du inte använder den föreslagna lådan, är det så här allting ska kopplas ihop.
![Hopkoppling](../../img/trn-assemble.svg)


### Koppla till låda
Använder du lådan och styrpanelen, är inkopplingen förstås densamma, men det enda du ser är nu de yttre anslutningarna som ska användas.

![Hopkoppling](../../img/trn-boxmounting.svg)
