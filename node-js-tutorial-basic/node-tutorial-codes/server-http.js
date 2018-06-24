/* SECTION: GLOBAL VARS */
var http = require('http');
var fs = require("fs");

/* TITLE: CREATE A SERVER */
(function(){

	var server = http.createServer((req,res) => { /* SECTION: if a request is sent to the server the anonimus function fires
	. It has 2 params: req: request object, responseobject
	 */
	 	// create the response header
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		//end the response
		res.end('response finished');
	});
		
	server.listen(3000, '127.0.0.1'	);

}()); // END CREATE A SERVER Anonymus function

/* TITLE: SERVE HTML */
(function(){

	
}); // END SERVE HTML


/* TITLE: SERVE JSON */
(function(){

	ContentType = 'application/json',
	objToSendByJson = {
		prop1  : 'monkey',
		prop2  : 'gorilla',
		method : () => {
			console.log(this);
		}
	},
	stringifiedObj = JSON.stringify(objToSendByJson);

	createServer();
	
	function createServer(){

		var server = http.createServer((req,res) => { 

			res.writeHead(200, {'Content-Type' : 'application/json'})
			res.end(stringifiedObj);

		});

		server.listen(3000, '127.0.0.1'	);

} // createServer()
	
}); // end SERVE JSON


/* TITLE: ROUTING AND SERVE HTML AND RENDER PAGES WITH EJS*/
// pathes in the are not existing	
(function(){

	var indexHtml  = './utility/index.html',
	    contactHtml  = './utility/contact.html',
	    fourOfourHtml  = './utility/404.html',
	    myObj = {
	    	andi : 'gorilla',
	    	pete : 'monkey',
	    	sandy : 'horse'
	    },
	    stringObj = JSON.stringify(myObj);

	createServer();
	
	function createServer(){

		var server = http.createServer((req,res) => { 

			if (req.url === '/' || req.url === '/home') {

				res.writeHead(200, {'Content-Type' : 'text/html'});
				fs.createReadStream(indexHtml, 'utf8').pipe(res);

			} else if (req.url === '/contact') {

				res.writeHead(200, {'Content-Type' : 'text/html'});
				fs.createReadStream(contactHtml, 'utf8').pipe(res);
				
			} else if (req.url === '/data-for-javascript'){

				res.writeHead(200, {'Content-Type' : 'application/json'});
				res.end(stringObj);

			} else {
				
				res.writeHead(200, {'Content-Type' : 'text/html'})
				fs.createReadStream(fourOfourHtml, 'utf8');
			
			} // else	

		});
		server.listen(3400, '127.0.0.1'	);

	} // createServer()

	
}()); // END ROUTING

/* TITLE: SEND FILE */
(function(){

	let express = require('express');

	let app = express();

	/* SECTION: setup a templating engine */
	// buy default folder where it looks for files to wiev is folder 'views' */
	// about the setup: http://ejs.co/
	// apt.render() method will send a rendered verison a the file wievd by the render method 
	// res.render('profile'); is resposible for pipe the rendered page into to the response stream
	app.set('views', __dirname + '/wiev') /* this line sets up where the templ 
	engine should look for the files to render*/
	app.set('view engine', 'ejs') /* this line is for setting up the templating engine to be ejs */

	app.get('/',(req,res) => {
		res.sendFile(__dirname + '/utils/index.html');
	});

	app.get('/home',(req,res) => {
		res.sendFile(__dirname + '/utils/index.html');
	});

	app.get('/contact',(req,res) => {
		res.sendFile(__dirname + '/utils/contact.html');
	});

	/* SECTION: Response to path with rout parameters... Route paramters are defined in
	 the path after a semicolon and located in the req.params property */
	app.get('/book/:title/:price',(req,res) => {
		console.log(req.params);
		res.send('hese are the parameters in the links: ' + JSON.stringify(req.params))
	});

	app.get('/accounts/:profile',(req,res) => {
		var accountDetails = {
			gender : "woman", 
			age : 21, 
			job : "Recruiter", 
			hobbies : ['php','mysql','nosql','node,js']}
		res.render('profile',{profile : req.params.profile, data : accountDetails}); /* you can access req.params.name in
		view/whichever ejs file as: */
	});

	app.listen(3400);
	
}); // END SEND FILE

/* TITLE: QUERY / RESPOND object methods */
(function(){

	app.get('/home',(req,res) => {

		console.log(req.url);
		console.log(req.params);
		console.log(req.query);
		
		res.writeHead(200, {'Content-Type' : 'application/json'});
		res.sendFile(__dirname + '/utils/index.html');
		res.end(stringObj);

	});
	
}); // QUERY / RESPOND object methods

