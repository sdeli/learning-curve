/*
	primary key: should be always unique
*/

create database if not exists calling;
use calling;

create table if not exists unique_names(
	name char(20) not null primary key
);

create table if not exists dup_name (
	name char(20) not null
);

#CASE create table by select cata from other tables ==========
use world;

drop table if exists Capitols;

create table Capitols
	select Country.Capital, Country.Name, Country.Population
from Country;

select * from Capitol;

# Case create table with attached events =====
CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NULL,
  amount FLOAT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
  PRIMARY KEY(id)
);

#Case copy table with indexes
create table newTableName like databasName.tableToCopy