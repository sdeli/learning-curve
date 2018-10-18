/*Assignment 1
Create a SQL procedure that will produce the common rhyme 
Green bottles hanging on the wall.
The procedure will take one parameter which will be the amount of bottles we start off with.
As an example we call the procedure
Call greenBottles(3)
The first verse of the rhyme will be 
3 green bottles hanging on the wall
3 green bottles hanging on the wall
And If one green bottle should accidently fall
they’ll be two green bottles hanging on the wall
and on the procedure will continue until it gets to no green bottles hanging on the wall.
Assignment 2
Create a procedure that creates a number of calculations for a number passed to it. For instance we pass the number 4 to the procedure and the following output is produced
4X1=4
4X2=8
4X3=12
4X4=16
4X5=20
4X6=24
4X7=28
4X8=32
4X9=36
4X10=10
We would call this procedure by call timesTable(4)*/

#Assignment 1
/*==================================*/
use mydatabase;

delimiter //
drop procedure if exists greenBottles //

create procedure greenBottles(in bottleCount smallint)
begin
	while bottleCount > 0 do
	
        if bottleCount > 3 then
			select concat(bottleCount ,' | 3 green (or more) bottles hanging on the wall');
        elseif bottleCount = 3 then
			select concat(bottleCount ,' | And If one green bottle should accidently fall');
        else
			select concat(bottleCount ,' | they’ll be two green bottles hanging on the wall');
        end if;
        
        set bottleCount = bottleCount - 1;
    end while;
end //
delimiter ;

call greenBottles(4)

#Assignment 2
/*==================================*/