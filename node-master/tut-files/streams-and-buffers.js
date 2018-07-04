/* 
	TITLE: Streams And Buffers 
*/


/* TITLE: The Basics */
(function(){
	
	var http = require('http'),
	    fs = require('fs'),
	    readFileName  = './utility/myReadStream.txt',
	    writeFileName = './utility/myWriteStream.txt',
	    pipeFileName = './utility/readAndPipe.txt';

	console.log('1s');    
	pumpLorem(10000);

	//Creating a stream from a file 
	var myReadStream  = fs.createReadStream(readFileName, 'utf8');
	    //creating a stream to a destination
		myWriteStream = fs.createWriteStream(writeFileName),
		// write stream for pipeing
		writeAndPipeStream = fs.createWriteStream(pipeFileName);

	/* SECTION: As the buffer relinquishes a chunk of data we trigger the write stream */
	function onRelinquishChunk(){

		myReadStream.on('data', (chunk) => {

			console.log('new chunk received');
			myWriteStream.write(chunk);

		});
		
	}

	/* SECTION: Demonstrate PIPEING... ,pipe is a propr of the readstream */
	myReadStream.pipe(writeAndPipeStream);


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

	} // pumpLorem();	

}); // end iife


/* TITLE: Useing Basics in a server */
(function(){

	/* SECTION: Define Global Vars */
	var http = require('http'),
	    fs = require('fs'),
	    readFileName  = './utility/myReadStream.txt',
	    myReadStream  = fs.createReadStream(readFileName, 'utf8');
	
	callMainFunctions();

	function callMainFunctions(){

		pumpLorem(10000);
		createServer();
		
	} // callMainFunctions   


	function createServer(){

		var server = http.createServer((req,res) => { 

			res.writeHead(200, {'Content-Type' : 'text/plain'})
			myReadStream.pipe(res);

		});

		server.listen(4000, '127.0.0.1'	);

	} // createServer()

	function pumpLorem(cycles){

		var fakeText = '\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo aperiam commodi, soluta et facere illum delectus esse ut at, repellat modi! Odit quis omnis ea quod, eaque sequi quia.\n'

		for (var i = 1; i <= cycles; i++) {

			if(i === 1){
				fs.writeFileSync(readFileName, fakeText); // fs.writeFile
			} else {
				fs.appendFileSync(readFileName, fakeText);
			} // else

		} //for

		console.log(`Lorem pumping into ${readFileName} finished`);

	} // pumpLorem();	
	
}()); // end Anonymus function