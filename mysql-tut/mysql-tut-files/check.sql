/*updates and inserts have to satisfy certain conditions in the where clause or the table will not be updated or new view inserted
check caluse will disallow to insert population odenst meet a condition*/

CREATE or REPLACE VIEW VCountryPop AS
SELECT Country.Name, Country.Population 
FROM Country
WHERE Country.Population >= 1000000
WITH CHECK OPTION;

/*check option will let this fail, even if we insert vaules
which dont match the where clause in the views declaration*/
UPDATE VCountryPop
set Population=50
where name='Armenia';