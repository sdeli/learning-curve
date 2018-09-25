/*
 * Title: fs module
 * Description: this file shows how to work with the fs module in node.js
 * Author: Sandor Deli
 * logic: 
 *
 */

const fs = require('fs');

(function readFile() {
    // when reading file always need to set the test encoding
    // whatever file it is javascript text....
    // otherwise node.js buffer class will handle the file
    fs.readFile("./events.js",'utf-8', (err, contents) => {
        if (err) throw err;
        console.log(contents);
    });
});

(function asyncReadAndWriteFile() {
    fs.readFile("./events.js","utf8", (err, data) =>{
        if(err) throw err;

        if(data) {
            fs.writeFile("./newfile.txt", data, () => {
                console.log(" + writing complete");
                fileHandler.fileReady(1);
            });
        }
    });    
});

(function appendToFile() {
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
});

(function renameAndCreateFile() {
    let fileToCreate = './utility/fileToRename.js';
    let newName = './utility/renamed.js';

    function logic() {
        if (!fs.existsSync(fileToCreate) && !fs.existsSync(newName)) {
            createEmptyFile()
                .then(renameFile())
        } else {
            console.log('sorry file exist');
        }        
    }

    function createEmptyFile() {
        return new Promise(resolve => {
            fs.writeFile(fileToCreate, 'empty', 'utf-8', (err) => {
                if (err) throw err;
                console.log(`${fileToCreate} has been created`);
                resolve();
            });
        });
    }

    function renameFile() {
        setTimeout(() => {
            fs.rename(fileToCreate, newName, (err) => {
                if (err) throw err;
                console.log(`${fileToCreate} has been renamed`);
            });
        }, 5000)
    }

    logic();
}());

(function deleteFile() {
    fs.unlink('./utility/asd.txt', (err) => {
      if (err) throw err;
      console.log('./utility/asd.txt has been deleted');
    });
});


(function createAndDelDir() {
	let newDir = "exerciseDir";

    if (!fs.existsSync(newDir)) {
    	fs.mkdir(newDir,() => {
    		console.log(newDir + " is readi to use, but will be deleted in 5 seconds");

    		setTimeout(function(){ 
    			// removing dir... dir needs to be empty
    			fs.rmdir(newDir, () => {
    				console.log("deleted");
    			})
    		 }, 5000);
    	});
    } else {
        console.log(`${newDir} already exist`);
    }
});

(function delNotEmptyDir(dir) {
    fs.readdirSync(dir).forEach(function(fileName) {
        fs.unlinkSync(`${dir}/${fileName}`);
    });

    fs.rmdirSync(newDir);
});

(function readDirContent() {
    function listFilesInDir() {
        fs.readdir('./utility', (err, files) => {
            console.log(files);
        });
    }

    listFilesInDirSync();
});

(function createFileAndDirStatistics() {
    let dirStats = fs.statSync('./utility/')
    console.log(dirStats);

    let fileStats = fs.statSync('./utility/contact.html')
    console.log(fileStats.isFile());
});

(function createHugeTextFile(cycles) {
    var fakeText = '\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo aperiam commodi, soluta et facere illum delectus esse ut at, repellat modi! Odit quis omnis ea quod, eaque sequi quia.\n'

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
}/*(100)*/);

/* PSEUDO: This module demostrates how to:
    - read a file
    - write into a file
    - delete a file 
    - how to deal with nodes Async-non blocking-event driven runtime
*/
(function(){
    const fs = require('fs');
    const myEmitter = require('events');

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