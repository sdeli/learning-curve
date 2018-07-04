/* SECTION: GLOBAL VARS */
var http = require('http');
var fs = require("fs");

(function setUpBasicServer() {
	var server = http.createServer((req,res) => { 
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('response finished');
	});
		
	server.listen(3000, '127.0.0.1'	);
});

(function serveJson() {
	let objToSend = {
		prop1  : 'monkey',
		prop2  : 'gorilla',
		method : () => {
			console.log(this);
		}
	}

	let stringifiedObj = JSON.stringify(objToSend);

    function createServer(){
        var server = http.createServer((req,res) => { 
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(stringifiedObj);
        });
        server.listen(3000, '127.0.0.1' );
    }

	createServer();
}());
	
(function serveHtmlWithStreamAndRouting() {
    var indexHtml  = './utility/index.html',
        contactHtml  = './utility/contact.html',
        fourOfourHtml  = './utility/404.html',
        myObj = {
            andi : 'gorilla',
            pete : 'monkey',
            sandy : 'horse'
        };
    
    function createServer(){
        var server = http.createServer((req,res) => { 
            if (req.url === '/' || req.url === '/home') {
                sendHomePage(res);
            } else if (req.url === '/contact') {
                sendContactPage(res);
            } else if (req.url === '/data-for-javascript') {
                sendObject(res);
            } else {
                send404Page(res);
            } // else   
        });

        server.listen(3400, '127.0.0.1' );
    }

    function sendHomePage(res) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(indexHtml, 'utf8').pipe(res);
    }  

    function sendContactPage(res) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        fs.createReadStream(contactHtml, 'utf8').pipe(res);
    }

    function sendObject(res) {
        let stringObj = JSON.stringify(myObj);
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(stringObj);
    }

    function send404Page(res){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        fs.createReadStream(fourOfourHtml, 'utf8').pipe(res);
    }

    createServer();
});

(function serverWithSimpleRouting() {
    const http = require('http');
    const fs = require('fs');
    const path = require('path');

    let homePagePath = './utility/static-assets/home.html';
    let articlePath = './utility/static-assets/article.html';
    let Four0fourPagePath = './utility/static-assets/404.html';


    http.createServer((req,res) => {
        // display what has been requested from/with each page
        console.log(`requested: ${req.url} with the method:${req.method}`);

        if (req.url === '/') {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            sendFile(res, homePagePath)
        } else {
            res.writeHead(404, {'Content-Type' : 'text/plain'})
            res.end('404 file not found')
        }
    }).listen(3100)

    function sendFile(res, filePath) {
        fs.readFile(filePath, (err, file) => {
            if (!err) {
                res.end(file)
            } else {
                console.log(err);
            }
        })
    }
});

(function simpleFileServer() {
    // IMPORTANT NOTE
    // in the view files static file need to be referenced relative to the public folder
    const http = require('http');
    const fs = require('fs');
    const url = require('url');
    const path = require('path')

    const rootDir = '../public/';

    function startServer() {
        http.createServer((req, res) => {
            // parse url => cutr query string
            let pathName = url.parse(req.url).pathname
            console.log('pathName: ' + pathName);

            // find the requested file
            let fileLocation = path.join(rootDir, pathName);
            console.log('fileLocation: ' + fileLocation);

            let readerFromFileLocation = fs.createReadStream(fileLocation);

            readerFromFileLocation.pipe(res);
        }).listen(3000);
    }

    module.exports = startServer;
});

(function fetchDataFromRequest() {
    
});

    
(function expressServerAndEjsTemplating() {
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
});