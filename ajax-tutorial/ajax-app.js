let http = require('http'),
	fs = require("fs"),
	someDocumentPath = './assets/html/some-document.html',
	ajaxTutprialHtml = './assets/html/ajax-tutorial.html',
	usersJson = fs.readFileSync('./assets/json/users.json','utf8');
const exec = require('child_process').exec;
let sitename = 'Ajax-Tutorial - Google Chrome'

createServer();

function createServer(){
	var i =0;
	var server = http.createServer((req,res) => { 

		if (req.url === '/' || req.url === '/home'){
			//console.log(req.method);
			console.log(i);
			i++;
			setTimeout(function(){
	executeShell();
}, 3000);
			res.writeHead(200, {'Content-Type' : 'text/html'});
			fs.createReadStream(ajaxTutprialHtml, 'utf8').pipe(res);

		} else if(req.url === '/assets/html/some-document.html'){
			//console.log(req.method);
			res.writeHead(200, {'Content-Type' : 'text/html'});
			fs.createReadStream(someDocumentPath, 'utf8').pipe(res);

		} else if (req.url === '/assets/json/users.json') {
			console.log(usersJson);
			res.writeHead(200, {'Content-Type' : 'application/json'});
			res.end(usersJson);
		}

	});


	server.listen(3000, '127.0.0.1'	);

} // createServer()

function executeShell(){
	exec('rel', function(err, stdout,stderr){
		console.log(stdout);
	});
	
}
	/*


setTimeout(function(){
	executeShell();
}, 3000);

function executeShell(){
	exec('rel', function(err, stdout,stderr){
		console.log(stdout);
	});
	
}*/