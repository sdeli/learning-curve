use indexes;
drop table if exists t;
create table t(
	name char(50),
    index (name)
    );
    
insert into indexes.t select world.country.name
from
world.country;
select * from t;
use world;
select * from country;
select * from countrylanguage;
#show the sql code that was used to create the countrylanguage table
show create table countrylanguage;
#this table has two indexes, it has a concatenated primary key
#both countryCode and language fields combined uniquely identify each
#row
show index from countrylanguage;
#this will display all languages spoken in france
select * from countrylanguage
where countrycode='fra';
#this shows our search is only searching 6 rows
describe select * from countrylanguage
where countrycode='fra';
select * from countrylanguage
where language='french';
#french spoken in 25 countries
/*select count(*) from countrylanguage
where language='french';
*/
/*
this is searching all 984 as when you have a concatenated key, only the left most
index can be used in a select statement, if we ant to use 'language' index we
have to create a seperate index on language in the countrylanguage column
*/
describe select * from countrylanguage
where language='french';
#this is an exact copy of countryLanguage
drop table if exists t2;
create table t2 select * from countrylanguage;
select * from t2;
show index from t2;
alter table t2
add primary key(countryCode,language);
show index from t2;
#adding an new index to language, so this index can used in a select statement
alter table t2
add index langIndex(language);
show index from t2;
#only searches 25 rows
describe select * from t2
where language='french';