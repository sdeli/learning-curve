/*
CASE - IF

BIGGEST DIFFERENCE:
	> at CASE statement, you have to make sure that at least one of the CASE condition is matched. Otherwise, you need to define an error handler to catch the error.
	> with if statment no need to do this
*/

DELIMITER $$

DROP PROCEDURE IF EXISTS ifElseifElse $$

CREATE PROCEDURE ifElseifElse(
    in  p_customerNumber int(11), 
    out p_customerLevel  varchar(10))
BEGIN
    DECLARE creditlim double;
 
    SELECT creditlimit INTO creditlim
    FROM customers
    WHERE customerNumber = p_customerNumber;
 
    IF creditlim > 50000 THEN
 SET p_customerLevel = 'PLATINUM';
    ELSEIF (creditlim <= 50000 AND creditlim >= 10000) THEN
        SET p_customerLevel = 'GOLD';
    ELSEIF creditlim < 10000 THEN
        SET p_customerLevel = 'SILVER';
    END IF;
 
END$$

DELIMITER ;