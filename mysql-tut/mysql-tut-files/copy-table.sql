DROP DATABASE IF EXISTS copyWorld;
CREATE DATABASE copyWorld;

use copyWorld;

CREATE TABLE newTable SELECT * FROM world.Country;
select * from newTable;