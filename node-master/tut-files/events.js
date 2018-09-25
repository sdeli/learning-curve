/*HANDLING EVENTS*/
const loggerImport = require('./logger.js');
console.log(loggerImport);
const logger = new loggerImport.Logger();

(function(logger){

	logger.on("messageLogged", (argsObj) => {
		
});

	logger.log("message");
	
});