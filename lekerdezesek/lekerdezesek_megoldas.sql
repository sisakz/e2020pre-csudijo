A feladatok megoldására elkészített SQL parancsokat illessze be a feladat sorszáma után!
***
12. feladat
CREATE DATABASE csudijo;
***
13. feladat
SELECT COUNT(id)
AS 'etelek-szama' FROM termekek WHERE etel=0;
***
14. feladat
SELECT nev, ar FROM termekek INNER JOIN kategoriak ON termekek.kategoriaId = kategoriak.id WHERE kategoriak.name="Desszertek";
***
15. feladat
SELECT termekek.nev, SUM(rendelesek.mennyiseg) As mennyiseg 
FROM rendelesek INNER JOIN termekek ON termekek.id = rendelesek.termekId 
WHERE etel=1 GROUP BY termekek.nev ORDER BY mennyiseg DESC LIMIT 3;
***
16. feladat
SELECT SUM(rendelesek.ar*(1-1/(1+afakulcs))) As afa 
FROM rendelesek;