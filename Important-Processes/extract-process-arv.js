function processArgvExtractor(processArgs){
    let args = {};
        args.noName = [];

    processArgs.forEach((currArg) => {
        let isArgWithName = currArg.indexOf('=') > -1;

        if (isArgWithName) {
            currArg = currArg.split('=');
            args[currArg[0]] = currArg[1];
        } else {
            args.noName.push(currArg);
        }
    });

    return args;
}

module.exports = processArgvExtractor;