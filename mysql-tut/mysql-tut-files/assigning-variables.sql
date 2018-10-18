

/* IN STORED PROCEDURE*/

use courses3;
drop procedure if exists myNameIs;
DELIMITER $$
CREATE PROCEDURE myNameIs(
	in myName varchar(30),
    out ifTrue bool)
BEGIN
	# case: LOCAL VARIABLE DECLARATION ====================================
	# variable scope is until the end of the BEGING END block
	DECLARE total_count INT DEFAULT 0;
	SET total_count = 10;

	# case: SELECT INTO ====================================
	DECLARE total_products INT DEFAULT 0;
	SELECT 
	   COUNT(*) INTO total_products
	FROM 
	   products;
END $$
DELIMITER ;