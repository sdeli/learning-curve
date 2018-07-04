// Objects Available On the GLOBAL OBJECT:

    // CLass: Buffer
    // __dirname
    // __filename
    // clearImmediate(immediateObject)
    // clearInterval(intervalObject)
    // clearTimeout(timeoutObject)
    // console
    // exports
    // global
    // module
    // process
    // require()
    // setImmediate(callback[, ...args])
    // setInterval(callback, delay[, ...args])
    // setTimeout(callback, delay[, ...args])
    // URL
    // URLSearchParams

// PROCESS
(function consoleLog() {
    process.stdout.write('console.log is basically writing to the stdout and put a linebrake\n');
}());

/*process.argv arr contains the params passed into the executed file*/
(function() {
    // node filename --address '1163 budapest feher sas utca 23'
    function grabParams(flag) {
        let index = process.argv.indexOf(flag);
        return index === -1 ? null : process.argv[index + 1];
    }

    let address = grabParams('--address');
    console.log('address:');
    console.log(address); // 1163 budapest feher sas utca 23
});

(function() {
    function getDataFromUserOnCli() {
        let questionsArr = ['is it hot today?'];

        process.stdout.write(`${questionsArr}\n>`)

        process.stdin.on('data', function(data){
            console.log(data.toString().trim());
            process.exit();
        });
    }

    getDataFromUserOnCli();
    
    process.on('exit', function(){
        console.log('you have exited');
    });  
});