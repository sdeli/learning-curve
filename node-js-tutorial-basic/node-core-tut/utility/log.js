process.stdout.write('I am running\ntype sthing to exit');

process.stdin.on('data', function(data){
    console.log(data.toString().trim());
    process.exit();
});