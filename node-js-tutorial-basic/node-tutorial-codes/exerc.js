/* 
TITLE: Streams And Buffers 
*/

/* SECTION: Import Modules */
console.log('0s');
var http = require('http'),
    fs = require('fs'),
    readFileName  = './utility/myReadStream.txt',
    writereadFileName = './utility/myWriteStream.txt';

console.log('1s');    
pumpLorem(10000);

var myReadStream  = fs.createReadStream(readFileName, 'utf8');
	myWriteStream = fs.createWriteStream(writereadFileName)

myReadStream.on('data', (chunk) => {

	console.log(chunk);
	console.log('// ------------------- //');

});


/* SECTION: Creating a huge file with lorem ipsum to provide some data for the stream */
function pumpLorem(cycles){
	console.log('2s');
	var fakeText = '\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo aperiam commodi, soluta et facere illum delectus esse ut at, repellat modi! Odit quis omnis ea quod, eaque sequi quia.\n'
	console.log(cycles);

	for (var i = 1; i <= cycles; i++) {
		console.log('3s');
		if(i === 1){

			fs.writeFileSync(readFileName, fakeText); // fs.writeFile
			console.log(i);
		} else {
			
			fs.appendFileSync(readFileName, fakeText);
			console.log(i);

		} // else

	}

	console.log('file finished');


}	

