/*
 * Title: STREAMS
 * Description: this file demosntrates the use of streams
 * Author: Sandor Deli
 * logic: 
 *
 */

// IMPORTANT NOTES:
// Streams are doing the same file opertions as writeFile/appendFile/readile, they just stop at the -
// procedure when the bufer limit reached and restart as stream.push() finished
// ------
// Streams are EXPOSING METHODS via their API
// ------
// Streams are INSTANCES of the EVENTEMITTER OBJ - STREAMS ARE LSITENING
// ------
// stream types: READABLE, WRITABLE, DUPLEX, TRANSFORM
// ------
// STREAMS on the fs module are INSTANCE OF STREAM OBJECT'
// Streams are working on STRINGS and BUFFERS'

// READABLE STREAM API
// stream.Readable
//     Event: 'close'
//     Event: 'data'
//     Event: 'end'
//     Event: 'error'
//     Event: 'readable'
//     readable.destroy([error])
//     readable.isPaused()
//     readable.pause()
//     readable.pipe(destination[, options])
//     readable.read([size])
//     readable.readableHighWaterMark
//     readable.readableLength
//     readable.resume()
//     readable.setEncoding(encoding)
//     readable.unpipe([destination])
//     readable.unshift(chunk)
//     readable.wrap(stream)

const fs = require('fs');

(function basicStreamFunctions() {
    readFileName  = './utility/chatlog.txt',
    writeFileName = './utility/chatlog-to-fill.txt',
    pipeFileName = './utility/readAndPipe.txt';

	//Creating a readstream from a file - GET THE DATA STREAMED
	var myReadStream  = fs.createReadStream(readFileName, 'utf8');
    //creating a stream to a destination - WRITING BIG DATA CHUNK BY CHUNK
	var myWriteStream = fs.createWriteStream(writeFileName);
	// write stream for pipeing
	var writeAndPipeStream = fs.createWriteStream(pipeFileName);    
});

(function writeBigDataCunkByChunkIntoFile() {
    const createBigChatLog = require('./utility/utility-modules/util.js').createChatLog
    const bigChatLogPath  = './utility/big-chat-log.txt';
    const bigChatLogCopy = './utility/big-chat-log-copy.txt';

    function logic() {
        if (!fs.existsSync(bigChatLogPath)) {
          createBigChatLog(10000, bigChatLogPath);  
        }

        createBigVariable()
            .then(bigVariable => {
                // point to file we will stream data into
                myWriteStream = fs.createWriteStream(bigChatLogCopy);
                // writing into the writestream
                myWriteStream.write(bigVariable)
            });

    }

    function createBigVariable() {
        return new Promise((resolve, reject) => {
            let myReadStream  = fs.createReadStream(bigChatLogPath, 'utf8');
            let bigVariable = '';

            myReadStream.on('data', (chunk) => {
                bigVariable += chunk;
            });

            myReadStream.on('end', () => {
                resolve(bigVariable);
            });
        })
    }

    logic();
}());

(function pipeOneStreamIntoOther() {
    var fs = require("fs");

    // Create a readable stream
    var readerStream = fs.createReadStream('input.txt');

    // Create a writable stream
    var writerStream = fs.createWriteStream('output.txt');

    // Pipe the read and write operations
    // read input.txt and write data to output.txt
    readerStream.pipe(writerStream);

    console.log("Program Ended");
});

(function getAndSendStreamedDataToPage() {
	const http = require('http');

    const createChatLog = require('./utility/utility-modules/util.js').createChatLog

    const chatLogFile  = './utility/chatlog.txt';
    
    function streamFileContentToPageLogic(){
        if (!fs.existsSync(chatLogFile)) {
          createChatLog(10000, chatLogFile);  
        }

        let myReadStream  = fs.createReadStream(chatLogFile, 'utf8');

        createServer(3000, myReadStream); 
    }

    function createServer(port, readStream){
        let server = http.createServer((req, res) => { 
            res.writeHead(200, {'Content-Type' : 'text/plain'})
            readStream.pipe(res);
        });

        server.listen(port);
    }

    streamFileContentToPage();
});

(function getAndDisplayStreamedData() {
    const chatLogFile  = './utility/chatlogShort.txt';
    const createChatLog = require('./utility/utility-modules/util.js').createChatLog

    function streamFileContentToCliLogic() {
        if (!fs.existsSync(chatLogFile)) {
          createChatLog(5, chatLogFile);  
        }

        let myReadStream = fs.createReadStream(chatLogFile);
        let data = '';

        myReadStream.once('data', () => {
            console.log('started reading the file\n===================\n');

        });

        myReadStream.on('data', (chunk) => {
            data += chunk;
            process.stdout.write(`${chunk}\n---------\n`);
        });

        myReadStream.on('end', () => {
            process.stdout.write(`all done, all charcters length: ${data.length}\n`);
        });
    }

    streamFileContentToCliLogic();
});