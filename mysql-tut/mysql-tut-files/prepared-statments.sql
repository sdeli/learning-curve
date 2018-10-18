/*
	prepared statments are living until the session is alive
*/

use world;
PREPARE my_stmt from
	'SELECT COUNT(*) FROM
    CountryLanguage
    WHERE CountryLanguage.CountryCode=?';

set @code='afg';
EXECUTE my_stmt using @code; # prep statment needs to be executed

# or ==================================
use world;
PREPARE my_stmt from
	'SELECT COUNT(*) FROM Country
    WHERE Country.Continent=?';

set @myContinent='Europe';
EXECUTE my_stmt using @myContinent; /* the var after 'using' will replace the '?' in the query*/

#CASE: prep statment with multi vairables ==========================
use world;
PREPARE my_stmt from
	'SELECT COUNT(*) FROM Country
     WHERE Country.Population BETWEEN ? and ?;';
     
set @popFew='100000000';
set @popLot='200000000';
EXECUTE my_stmt using @popFew, @popLot; /* the var after 'using' will replace the '?' in the query*/

# CASE Calling same perp stament in same session (in different wont work) ======
set @popFew='50000000';
set @popLot='100000000';
EXECUTE my_stmt using @popFew, @popLot;

# delete prepared statment =======================
deallocate my_stmt;