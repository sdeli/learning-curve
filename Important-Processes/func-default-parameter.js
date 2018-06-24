
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