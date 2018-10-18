use world;
select * from Country;
select * from City;
drop table if exists Captial;
/*
this creates a capital table that consists of the country, capital  name and population
of capital city*/
create table if not exists Capital
select Country.name as Country,City.name as CapitalCity,
City.Population as CityPopulation
from Country,City
where Country.Capital=City.ID;

select * from Capital;#
#this table will contain the new and old populations and the time changed
drop table if exists copyCapital;
create table copyCapital as
select * from Capital;
delete from copyCapital;
select * from copyCapital;
alter table copyCapital
add column oldPopuation int,
add column changeTime dateTime;
select * from copyCapital;
# a log of all your deleted records from the capital table#
create table capitalLog as
select * from Capital;
delete from capitalLog;
alter table capitalLog
add column deleteTime dateTime;
select * from capitalLog;
#create a table that is an exact copy of country
drop table if exists copyCountry;
create table copyCountry
select * from country;
select * from copyCountry;
#two tables that will be used for triggers
