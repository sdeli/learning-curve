use information_schema;

show tables;

SELECT * FROM GLOBAL_VARIABLES;

SELECT * from TABLES
where TABLES.TABLE_SCHEMA = 'mydatabase';

SELECT * FROM VIEWS
where TABLES.TABLE_SCHEMA = 'mydatabase';

use performance_schema;
SHOW tables;