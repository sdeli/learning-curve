const myEmitter = require('events');

const url = "https://www.youtube.com/watch?v=TlB_eWDSMt4";



class Logger extends myEmitter {

log(messages){

	this.emit('messageLogged',{
		id : 1,
		url : "http://youtube.com"
	});

	console.log(messages);
}

};

module.exports.Logger = Logger;
	
