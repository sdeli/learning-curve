use world;
drop table if exists countryNames;
create table countryNames select * from Country;
select * from countryNames;
 
 /*it creates an index prefixed to the first 2 letters of the indexed column . It  means the search will happened to 'ne' from netherlands*/
create index name
on countryNames(name(1));

describe select * from countryNames
where countryNames.Name='Netherlands';