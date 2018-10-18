use courses3;

use courses3;
drop procedure if exists loopInProcedure;
DELIMITER $$
CREATE PROCEDURE loopInProcedure()
BEGIN
	set @i = 0;

myLoop:loop
	set @i = @i + 1;
    
    if	@i > 5 then
		select concat(@i, ' left');
        LEAVE myloop;
    else 
		select concat(@i, ' i still less');
	end if;
end loop myLoop;
END $$
DELIMITER ;

call loopInProcedure();

/* ---------------------  */

use courses3;
drop procedure if exists loopInProcedure;

DELIMITER $$

CREATE PROCEDURE loopInProcedure()
BEGIN
	set @i = 0;

	myLoop:loop
		set @i = @i + 1;
	    
	    if	@i > 5 then
			select concat(@i, ' left');
	        LEAVE myloop;
		elseif @i = 5 then
			iterate myLoop;
	    else 
			select concat(@i, ' i still less');
		end if;
	    
	    select concat(@i, ' ', 'not iterated before last statment');
	end loop myLoop;
END $$

DELIMITER ;

call loopInProcedure();

/* ---------------------  */

use courses3;
drop procedure if exists whileInProcedure;

DELIMITER $$

CREATE PROCEDURE whileInProcedure()
BEGIN
	set @i = 0;

	while @i <= 5 do	
		set @i = @i + 1;
	    
	    if	@i = 4 then
			select concat(@i, ' was 4');
		elseif @i = 5 then
			select concat(@i, ' was <=5');
	    else 
			select concat(@i, ' i still less');
		end if;
	    
	    select concat(@i, ' ', 'not iterated before last statment');
	end while;
END $$

DELIMITER ;

call whileInProcedure();
