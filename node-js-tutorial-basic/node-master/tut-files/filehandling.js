/* SECTION: WORKING WITH THE FILESYSTEM*/
const fs = require('fs');
const myEmitter = require('node-js-tutorial-basic/node-master/tut-files/events');

/* SECTION: READ A FILE SYNC AND CONSOLE LOG IT */
(function(fs){

	var readMe = fs.readFileSync("./events.js","utf8");
	console.log(`readsync: ${readMe}`);
	
});

/* SECTION: READ FILE ASYNC and CALLBACKS*/
(function(fs, myEmitter){

	fs.readFile("./events.js","utf8", (err, data) =>{

		if(err){

			console.log(err);

		} else if(data) {

			console.log(`async: ${data}`);

			// WRITE INTO FILE ASYNC 
			fs.writeFile("./newfile.txt", data, () => {

				console.log(" + writing complete");
				fileHandler.fileReady(1);

			});

		} //else

	}); // fs.readfile
		
});

/* SECTION: DELETE FILE*/
(function(fs){

	fs.unlink('./newfile.txt', (err) => {
	  if (err) {
	  	console.log("impossible");
	  };
	  console.log('./newfile.txt was deleted');
	});
	
});

/* SECTION: APPEND FILE */
(function(fs){
 
	fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
 	
 }); 

/* SECTION: File Handler Module */
(function(){
	
	/* PSEUDO: This module demostrates how to:
		- read a file
		- write into a file
		- delete a file 
		- how to deal with nodes Async-non blocking-event driven runtime
	*/

	/* SECTION: IMPORT MODULES */
	const fs = require('fs');
	const myEmitter = require('node-js-tutorial-basic/node-master/tut-files/events');

	/* SECTION: FILE HANDLER CLASS */
	class FileHandler extends myEmitter {

		fileReady(param){

			this.emit('fileReady',{
				id : param
			});

			console.log("it is done");

		} // fileReady(func)

	} // FileHaendler class

	/* SECTION: Create New Instance of FileHandler and create eventlistener*/
	var fileHandler = new FileHandler();

	fileHandler.on("fileReady", (argsObj) => {
		wrappedUnlink();
	});

	myReadFile();

	/* SECTION: DELETE FILE WRAPPED IN A FUNCTION */
	function wrappedUnlink(){

		fs.unlink('./newfile.txt', (err) => {
			console.log("bejott");	
			if (err) {
				console.log("impossible");
			};

			console.log('./newfile.txt was deleted');

		}); // if

	} // fs.unlink

	/* SECTION: READ FILE ASYNC and CALLBACKS*/
	function myReadFile(){

		fs.readFile("./events.js", "utf8", (err, data) =>{

			if(err){

				console.log(err);

			} else if(data) {

				console.log(`async: ${data}`);

				// WRITE INTO FILE ASYNC 
				fs.writeFile("./newfile.txt", data, () => {

					console.log(" + writing complete");
					fileHandler.fileReady(1);

				}); // fs.writeFile

			} //else

		}); // fs.readfile()

	} // myReadFile()

});

/* SECTION: MAKE DIRECTORY */
(function(){

	let newDir = "exerciseDir"

	// create directory
	fs.mkdir(newDir,() => {

		console.log(newDir + " is readi to use");

		setTimeout(function(){ 

			// removing dir... dir needs to be empty
			fs.rmdir(newDir, () => {
				console.log("deleted");
			})

		 }, 3000);

	});
	
});

(function(){

pumpLorem(100);

/* SECTION: Creating a huge file with lorem ipsum separated by linebrake */
function pumpLorem(cycles){

	var fakeText = '\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo aperiam commodi, soluta et facere illum delectus esse ut at, repellat modi! Odit quis omnis ea quod, eaque sequi quia.\n'
	console.log(cycles);

	for (var i = 1; i <= cycles; i++) {
		
		if(i === 1){

			fs.writeFileSync("./newfile.txt", fakeText); // fs.writeFile
			console.log('written');

		} else {
			
			fs.appendFileSync('./newfile.txt', fakeText);
			console.log('appended ' + i);

		} // else

	}

	console.log('file finished');


}	

	
});

