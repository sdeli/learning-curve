load data local infile '/home/sandor/Downloads/files-for-database/data.txt' into table newTable;
select * from newTable;

# ===============================

drop TABLE IF EXISTS subscriber;
create TABLE subscriber (
	id int(10) unsigned not null PRIMARY KEY AUTO_INCREMENT,
    name char(40) not null,
    address char(40) not null
);

select * from subscriber;

load DATA local INFILE '/home/sandor/Downloads/files-for-database/customers.txt' into TABLE subscriber(name, address);
SELECT * from subscriber;

# ========================
DELETE from subscriber;

load LOCAL DATA INFILE '' into TABLE subscriber(name, address);
SELECT * from subscriber(adress, name);

select * FROM subscriber;