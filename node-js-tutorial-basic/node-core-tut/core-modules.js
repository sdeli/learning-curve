const nodeCoreModules = [ 
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'crypto',
    'dgram',
    'dns',
    'domain',
    'events',
    'fs',
    'http',
    'https',
    'net',
    'os',
    'path',
    'punycode',
    'querystring',
    'readline',
    'stream',
    'string_decoder',
    'tls',
    'tty',
    'url',
    'util',
    'v8',
    'vm',
    'zlib' 
]

// PATH MODULE
(function(){
    let path = require('path');
    console.log(__filename);
    console.log(path.basename(__filename));    
    console.log(path.join(__filename, 'www', 'files', 'uploads'));    
});

(function(){
    let util = require('util');
    util.log('you can log messages here with date and time stamp')
});


// V8 MODULE FOR MEMORY MANAGMENET
(function(){
    let util = require('util');
    let v8 = require('v8');

    // current memory statistics
    util.log(v8.getHeapStatistics())
});

// CREATE CLI INTERFACE WITH READLINE MODULE
(function(){
    let readline = require('readline');

    let rl = readline.createInterface(process.stdin, process.stdout)

    let you = {};

    rl.question('what is your name?> ', function(yourName) {

        you.name = yourName.trim();
        
        rl.setPrompt(`what do you like to do ${you.name} (type \'exit\' to quit)> `)
        rl.prompt();

        let i = 0;

        // line event fires when user submits an answer
        rl.on('line', function(hobbie){
            you['hobbie-' + i] = hobbie.trim();
            console.log(JSON.stringify(you));

            i++;
            if (hobbie.trim() === 'exit') {
                rl.close();
            } else {
                rl.setPrompt(`An what else (type \'exit\' to quit)> `)
                rl.prompt();
            }
        });
    });

    rl.on('close', function(){
        console.log('but whyyyyyyyyyyyy');
    })
}());