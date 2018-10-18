/*
triggers automatically run when a certain action is carried out on your database
they do not need to be explicitly called like a prepared statement, procedure or
function.
there are five types
AFTER INSERT-action that is carried out always after a record is inserted into a particular
table - can only use the NEW keyword-New refers to the new values input
BEFORE INSERT-action that is carried out always before a record is inserted into a 
particular table - can only use the NEW keyword-new refers to the new values input
AFTER UPDATE- after a record is changed in a table or tables this action will run
with UPDATE you can use both OLD and NEW keywords. Old means the old value you
changed FROM, NEW means the new value you changed too.
BEFORE UPDATE- before a record is changed in a table or tables this action will run
AFTER DELETE - after a record is deleted this action will run
*/
/*
every time a new employee is added to our employees table, this will be added to the 
employee_audit table
*/

/*
	To ensure ony creating varialbles get entered into tables we use triggers,
    specifically BEFORE INSERT
*/
#insert can only use NEW
use calling;
DROP TRIGGER IF EXISTS after_employee_insertion
DELIMITER $$
CREATE TRIGGER after_employee_insertion
#a trigger has to be one of the above five types and it has to based on a table
#after you insert a record into the employee table
#the following will always happen automatically
	AFTER INSERT ON employee
		for each row#this will be done for every row
        BEGIN
			INSERT INTO employee_audit
            #to refer to the value just entered, use the keyword new
            values(new.employeeNumber,new.lastName,now());
        END $$

DELIMITER ;

#DROP TRIGGER IF EXISTS before_employee_insertion


/*TEST THE TRIGGER:
use calling;

select * from employee_audit;
insert into calling.employee(firstName, lastName)
values ('mySecond', 'nameSecond');
select * from employee_audit;
*/

/*TRIGGERS CHECKS IF INSERTED VALUE IS VALID if not modifies it and insert corrected value*/
use world;

drop trigger if exists capitalPositivePop;
delimiter //

create trigger capitalPositivePop
before insert
on Capital
for each row /*Fro each is for in case we insert more rows*/
	begin
		set new.CityPopulation =
				if(new.CityPopulation < 0, 0, new.CityPopulation);
	end //
delimiter ;

/* TEST SCRIPT
use world;
insert into Capital (CapitalCity, Country, CityPopulation) values('narnia', 'CapitCity', -10);
select * from Capital where Capital.CapitalCity = 'narnia';
*/


/*BEFORE UPDATE OF A TABLE saves mixture of new and old data into a second table*/
 use world;
 
 drop trigger if exists capitalsPopulation;
 delimiter //
 create trigger capitalsPopulation
 before update on Capital
 for each row
	begin
		insert into copyCapital (Country, CapitalCity,CityPopulation,oldPopuation,changeTime)
        values(new.Country, new.CapitalCity, new.CityPopulation,old.CityPopulation, now());
	end //
delimiter ;

/* TEST TRIGGER
use world;

update Capital 
set Capital.CityPopulation = '10000'
where Capital.Country = 'Netherlands';

select * from copyCapital where copyCapital.Country = 'Netherlands';
*/

/* BEFORE DELETE ONA  TABLE WE SAVE DATA ABOUT TO BE DELETED INTO AN OTHER TABLE
*/
use world;

drop trigger if exists capital_add;
delimiter //

create trigger capital_add
after delete on Capital
	for each row
		begin
			insert into capitalLog
            (Country, CapitalCity, CityPopulation, deleteTime)
            values(old.Country, old.CapitalCity, old.CityPopulation, now());
		end //
delimiter ;

/* TEST TRIGGER
use world;

delete from Capital
where Capital.Country = 'Albania';
select * from Capital;
select * from capitalLog;
*/

/*
before update
creates a trigger that before it updates assigns the old value to
a user variable
*/
select * from copyCapital;
use world;
DROP TRIGGER IF EXISTS capital_bu_population
DELIMITER $$
CREATE TRIGGER capital_bu_population
BEFORE UPDATE ON capital
FOR EACH ROW
	BEGIN
    #if we dont change the value of country then new and old will be the same
		set @oCountry=old.country;
        set @nCountry=new.country;#new value of country
        set @oCapital=old.capitalCity;
        set @nCapital=new.capitalCity;
        set @ocityPopulation=old.cityPopulation;
        set @ncityPopulation=new.cityPopulation;
   /*     insert into copyCapital values(@nCountry,@nCapital,@ncityPopulation,
        @ocityPopulation,now());*/
        #this keeps a log of all your population changes
        insert into copyCapital values(new.country,new.capitalCity,new.cityPopulation,
        old.cityPopulation,now());
        
    END $$

DELIMITER ;

/*TRIGGER WITH ENUMD TYPE FIELDS and trigger enters invalid if invalid data coms in (invalid = not specified at enum)
*/
use calling;

drop table if exists tickets;
create table tickets (
	ticket_id smallint not null auto_increment primary key,
	ticketName varchar(30) not null default 'no name',
    priority enum ('low', 'medium', 'high', 'invalid')
);

drop trigger if exists itckets_bi;

delimiter //

create trigger itckets_bi
	before insert on tickets
    for each row
		begin
			set new.priority=if(new.priority not in ('low', 'medium', 'high'), new.priority, 'invalid');
		end //
delimiter ;

/*TEST SCRIPT
use calling;

insert into tickets (ticketName, priority) values ('sanyis ticket', 'medium');

select * from tickets;
*/






