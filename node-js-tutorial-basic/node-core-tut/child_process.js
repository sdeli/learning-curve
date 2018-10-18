/*
 * Title: Child Process
 * Description: tut file for the child_process module
 * Author: Sandor Deli
 * logic: 
 *
 */

let exec = require('child_process').exec;
let spawn = require('child_process').spawn;

// EXECUTE
// exec is for short processes execution
(function execForShorterProcesses(){
    exec('ls', function(err, stdout){
        if(err) throw err;
        console.log(stdout);
    })
});

(function openLinkedInLearning(){
    exec('xdg-open https://www.linkedin.com');
});

// SPAWN is for bigger codes execution
(function executeLongerCodes(){
    let childProcess = spawn('node', ['./utility/log.js']);

    // grab data sent by child process to stdout and display it
    childProcess.stdout.on('data', (data) => {
        console.log(`STDOUT: ${data}`);
    })

    // pass data from cli into child process
    process.stdin.on('data', () => {
        childProcess.stdin.write('data')
    });

    childProcess.on('exit', () => {
        console.log('child process has ended');
        process.exit();
    })
}());