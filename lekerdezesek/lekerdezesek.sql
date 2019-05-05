A feladatok megoldására elkészített SQL parancsokat illessze be a feladat sorszáma után!
***
12. feladat
CREATE DATABASE csudijo DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
***
13. feladat
SELECT COUNT(id)
AS 'etelek-szama' FROM termekek WHERE etel=0;
***
14. feladat
SELECT nev, ar FROM termekek INNER JOIN kategoriak ON termekek.kategoriaId = kategoriak.id WHERE kategoriak.name="Desszertek" ORDER BY termekek.nev;
***
15. feladat
INSERT INTO termekek (nev, ar, kategoriaId, etel) VALUES
('Málnahabos pohárkrém', '1190.00', 6, 1);
***
16. feladat
SELECT termekek.nev, SUM(rendelesek.mennyiseg) As mennyiseg 
FROM rendelesek INNER JOIN termekek ON termekek.id = rendelesek.termekId 
WHERE etel=1 GROUP BY termekek.nev ORDER BY mennyiseg DESC LIMIT 3;
***
17. feladat
SELECT ROUND(SUM(termekek.ar/(1+afakulcs)),0) AS netto, ROUND(SUM(termekek.ar*(1-1/(1+afakulcs))),0) AS afa 
FROM rendelesek
INNER JOIN termekek ON termekek.id = rendelesek.termekId; 