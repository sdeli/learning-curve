/*drop database if exists indexes;
In indexes you can not search in range of values
*/
use indexes;
#this table has an key called k_name on the column 'name'
drop table if exists t;
CREATE TABLE t(
	name char(255) default null,
    key k_name(name)
) ENGINE=Innodb DEFAULT CHARSET=latin1;

drop table if exists t2;
CREATE TABLE t2(
	name char(255)default null
    );
/*below is how we create the different types of indexes
and how we create them at time of creation of table and
how we modify existing tables and add indexes to them
don't overindex if you dont' refer to an column in comparisions
such as where, order by or group by clause, there is no 
need to index it
indexing a column, with very few distinct results will not 
do much good, i.e a column with only two values of 'yes' or 
'no', either search is likely to always return at least half
records so indexing won't really make any difference.
declare indexed column as not null if possible, an index 
without null can be processed more simply and faster.
indexing slows rdown table updates
choose unique and non-unique indexes appropriately
for example if choosing an enum (only
certain range of values allowed), the number of distinct values
is the amount of enum values plus 1 (plus 1 is for the empty
string '', when illegal values for an enum are entered).
also it makes sense to usually only make a enum a non unique 
index (unique and primary key means you can only have as many 
rows as you have enum values).
index a column prefix rather than entire column, as mysql
caches index information whenever it can to avoid continuous i/o
so shortening index can increase speed
avoid overlap of multiple indexes
alter table can add several indexes at once, where create index
only allows the creation of one index
*/
#during creation of tables you can create as many indexes as you want
drop table if exists t3;
create table t3(
	id int primary key,
    name char(10),
    index (name)
    );

drop table if exists t4;
create table t4(
	name char(10)unique,
    address char(10),
    age int,
    job char(15),
    #naming an index
    index ageIndex(age),
    key addressKey(address),
    fulltext jobtext(job)#used for text searching
    );

drop table if exists t5;
create table t5(
	name char(10)unique not null,
    address char(10),
    age int,
    job char(15)
    );
/*
CREATE INDEX we can only add ONE index at a time
*/
create index nameIndex on t5(name);
create unique index uniqueAddress on t5(address);
/*
alter table allows us to create as many indexes as want and also drop or modify
existing indexes
*/
ALTER TABLE T5
ADD PRIMARY KEY(age),drop index uniqueAddress;
select * from t;
select * from t2;
select * from t3;
select * from t4;
select * from t5;
#this has an index on the name column
insert into t values
('pat'),
('pat'),
('mary'),
('mary'),
('colm'),
('michael'),
('paul');
#this has no index
insert into t2 values
('pat'),
('pat'),
('mary'),
('mary'),
('colm'),
('michael'),
('paul');
select * from t where name='colm';
select * from t2 where name='colm';
select * from t where name='pat';
select * from t2 where name='pat';

#if you dont use an index in your table it means a lot more records
#have to be searched
describe select * from t where name='colm';
describe select * from t2 where name='colm';
describe select * from t where name='pat';
describe select * from t2 where name='pat';

select count(*) as 'total rows',
count(distinct name) as 'distinct values',
count(*)-count(distinct name)as 'duplicate values'
from t;

select count(distinct left(name,2)) as 'distinct prefix values',
count(*)-count(distinct left(name,2)) as 'duplicate prefix values',
count(*)as total
from t2;