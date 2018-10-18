use courses3;

/*
    inner block are have separated namespaces
    but nested inner blocks have access to the mother blocks scope
*/

drop procedure if exists innerBlox;

delimiter //
create procedure innerBlox()
begin
	declare num, num2 int;
    declare number decimal(6,2);
    
    set num=11;
    set num2=56;
    /*inner blocks local vars are nto acccessible outside but conversly yes*/
    begin
		declare innernum int;
        set innernum = 1000;
        select innernum;
    end;
end //
delimiter ;

call innerBlox();

#CASE named inner block ====================
use courses3;

drop procedure if exists innerBlox;

delimiter //
create procedure innerBlox()
begin
    declare num, num2 int;
    declare number decimal(6,2);
    
    set num=11;
    set num2=56;
    /*inner blocks local vars are nto acccessible outside but conversly yes*/
    inner_blocks_name:begin
        declare innernum int;
        set innernum = 1000;
        select innernum;
    end inner_blocks_name;
end //
delimiter ;

call innerBlox();

#CASE leave inner block ==================
use courses3;

drop procedure if exists innerBlox;

delimiter //
create procedure innerBlox()
begin
    declare num, num2 int;
    declare number decimal(6,2);
    
    set num=11;
    set num2=56;
    /*inner blocks local vars are nto acccessible outside but conversly yes*/
    inner_blocks_name:begin
        declare innernum int;
        set innernum = 1000;
            if innernum > 9 then
                select 'we are leaving the block';
                leave inner_blocks_name;
            end if;
        select innernum;
    end inner_blocks_name;
end //
delimiter ;

call innerBlox();