/*MODULES*/
const logger = require('./logger.js');
const path = require("path");
const os = require("os");

/*THE PATH MODULE PARSE METHOD*/
//console.log(path.parse(__filename));


/*GET INFO ABOUT OP SYSTEM*/
console.log(os.totalmem() + " " + os.freemem());
// es6 syntaxsugar
console.log(`total memory is: ${os.totalmem()}; and the free: ${os.freemem()}`);
