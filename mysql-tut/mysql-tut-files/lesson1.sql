use world;
select * from Country;
select * from City;
drop table if exists Captial;
/*
this creates a capital table that consists of the country, capital  name and population
of capital city*/
create table if not exists Capital
select Country.name as Country,City.name as CapitalCity,
world.City.Population as CityPopulation
from Country,City
where Country.Capital = world.City.ID;

select * from Capital;
#create a table that is an exact copy of country
drop table if exists CopyCountry;
create table CopyCountry
select * from Country;
select * from CopyCountry;
#two tables that will be used for triggers
use calling;
drop table if exists employee;
create table employee(
	employeeNumber int auto_increment not null primary key,
    firstName char(15),
    lastName char(15)
);

drop table if exists employee_audit;
create table employee_audit(
	employeeNumber int,
    lastName char(15),
    changedat datetime
);
select * from employee;
select * from employee_audit;