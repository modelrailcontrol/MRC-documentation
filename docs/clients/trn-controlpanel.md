---
title: Styrpanel
---

Växelstyrningen är gjord för att kunna hanteras både från distans och lokalt, d.v.s man kan även lägga om och se växelns riktning på en panel i närheten av växeln. Det finns tre olika paneler som kan användas med växelstyrningen, avsedda för vänster-, höger- och Y-växel.

![Tre olika styrpaneler](/img/clients/trn-controlpanel01.svg)

Panalerna finns framtagna för utskrift på 3D-skrivare.
Underlagen för all hårdvara finns i ett [Github repository](https://github.com/modelrailcontrol/MRC-3dprint).


## Panel i två delar
Panelerna är runda, med en diameter på 32 mm. Anledningen är att det brukar vara lättare att göra runda hål och i detta fall kan panelen alltså monteras i ett borrat hål på en modul eller layout. 

Panelen består av två delar, en front och ett bakstycke. För att montera ihop dem behövs en träskruv eller liknande, max 12 mm lång. Men innan monteringen behöver lite annat göras.

![Styrpanelens två delar](/img/clients/trn-controlpanel02.png)

## Indikeringsfönster
Panelerna har indikeringsfönster för att visa hur växeln ligger. Dessa är öppna hål vid utskriften och de måste få någon form av "glasruta" som samtidigt ska ge ett jämnare ljus från lysdioden bakom. Till detta kan man använda vitlim.

![Indikeringsfönster med vitlim](/img/clients/trn-controlpanel03.png)

Sätt en bit tejp på frontens framsida, så den är tät och täcker bägge indikeringshålen. För sen i vitlim från baksidan av fronten, i de "diken" som indikeringshålen bildat. Vitlimmet krymper ihop när det torkar, så fyll upp ordentligt. Låt det sedan torka och fyll på mer om det inte blev bra.

## Elektroniken
Nästa steg är att montera elektroniken. Här är det två lysdioder och en knapp som behövs. Dessa tre monteras i respektive hål i panelens backstycke. Eventuellt kan hålen behöva borras upp lite. Tänk på att montera från rätt håll, från sidan med skruvhålens försänkning. Genom att montera knappen på detta vis, undviker man att den sticker ut utanför modulen eller layoutens sida.

![Placering av knapp och LED](/img/clients/trn-controlpanel04.png)


## Skruva ihop
När grejorna sitter fast är det lämpligt att skruva ihop front och bakdel inför nästa moment.


## Koppla ihop
Från dessa tre grejor ska nu fyra kablar dras till en kontakt. Längden på kablarna beror på avståndet mellan styrenheten och panelen, men minst ett par decimeter är nog bra att ha.

![Lysdioder & knapp ihopkopplade](/img/clients/trn-controlpanel05.jpg)

Klipp till och vik ihop minussidan på lysdioderna. Löd ihop dessa tillsammans med en kabel som går till ena sidan av knappen. Därifrån dras sedan en minusledare till stiftkontakten. Sen dras en kabel från varje grej till sin egen pinne på stiftkontakten. Ordningen på stiftkontakten ska vara följande:

 1. Minus / jord
 2. Knapp
 3. Lysdiod 1, första medsols
 4. Lysdiod 2, andra medsols

![Stiftlist till styrpanel](/img/clients/trn-controlpanel06.png)

Om styrpanelen ska kopplas i och ur ibland, kan det vara bra att markera vilket stift som är minus / jord och var det ska sitta på styrenheten, exempelvis med en vit prick.

## Montera och koppla in
Styrpanelen kan nu monteras i sitt hål och är redo att kopplas in till styrelektroniken.

![Färdig styrpanel](/img/clients/trn-controlpanel07.jpg)
