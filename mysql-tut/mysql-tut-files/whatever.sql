use world;
select * from Country;
select * from City;
select * from CountryLanguage;

select name, language from CountryLanguage
inner join Country
on CountryLanguage.CountryCode = Country.Code;

select name, group_concat(Language) from CountryLanguage
inner join Country
on CountryLanguage.CountryCode = Country.Code
where Country.Continent = 'europe'
group by Country.Name
order by Country.Name desc;