/*
	 function has to return something
	 function is called by select statment
	 function dont use in and out vars
*/

use mydatabase;
drop FUNCTION IF EXISTS hello_world;

DELIMITER //

CREATE FUNCTION hello_world (addresse text)
RETURNS char(100)
BEGIN
	DECLARE num, num2, num3 int;
    DECLARE dnum, dnum2 double;
    set num=num=num3=45;
    
    return concat('hello ', addresse, ' and number is ', num);
END //
DELIMITER ;

select hello_world('harry');

