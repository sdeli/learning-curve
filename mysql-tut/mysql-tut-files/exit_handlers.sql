#CASE exit handler with table creation =========
create database if not exists calling;
use calling;

drop table if exists unique_names;
create table if not exists unique_names(
	name char(20) not null primary key
);

insert into unique_names (name) values ('monkey');

drop table if exists dup_name;
create table if not exists dup_name (
	name char(20) not null
);

drop procedure if exists add_name;
delimiter //

create procedure add_name(name_param char(20))
begin
	/*23000 for duplicate values*/
	declare exit handler for sqlstate '23000'
    /*if it sees we try to put a duplicate key dp what in the begin end block*/
    begin
		insert into dup_name(name) values (name_param);
    end;
end //
delimiter ;

call add_name('myname');
select * from unique_names;
select * from dup_name;