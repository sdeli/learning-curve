/*
 CHECK IF A TYPE HAS A VALUE
*/

// CASE
var a = 1;
if(a || a === 0){console.log("a is ok")} 

// CASE
var a = null;
if( !a || a !== 0){console.log("a is not ok")} 

// CASE
var arraym = [1,2]
if(!arraym[4] ||  arraym[4] !=== 0){console.log("nothing")} 

// CASE: test if a variable is declared or not, you'll need to catch any ReferenceError produced by referring to it:
var barIsDeclared = true; 
try{ bar; }
catch(e) {
    if(e.name == "ReferenceError") {
        barIsDeclared = false;
    }
}

// CASE: with typeof
if (typeof a === undefined) { //... }

// CASE: Default Parameter for functions
function greet(name){

	if( !name || name !== 0 ) {
		name = "Bob";
	}

	console.log(name);
	console.log("hallo " + name);

}

greet();

//or
function greet(name){

	name = name || "bob" // || operator searches for the first parameter which to true coerces

	console.log(name);
	console.log("hallo " + name);

}

greet();		