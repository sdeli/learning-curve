const express = require('express');
const app = express();
const util = require('util');
var bodyParser = require('body-parser');

app.set('views', __dirname + '/wiev'); 
app.set('view engine', 'ejs');
 
// parse application/json
var jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/',(req,res) => {
	res.render('index');
});

app.get('/home',(req,res) => {
	res.render('index');
});

app.get('/contact',(req,res) => {
	/*structure of a guery: url?key=value&key=value*/
	res.render('contact', {qs:req.query});
});

/* SECTION: Here the form uses posts method so the data will be sent as query string to the server*/
app.post('/contact', (req,res) => {

	if(req.method === 'POST'){
		let body=[];
		/* SECTION: It is quite long, because it is prepared for containing a stream of info,
		 but if it is just a form you can cut the code */
		req.on('data', (chunk) => {
	  		body.push(chunk);
		}).on('end', () => {
	  		body = Buffer.concat(body).toString();
	  		console.log(queryStringToJSON(body));
	  	});

		res.render('contact', {qs:req.query});
	}	

});

app.post('/contact-ajax',jsonParser, (req,res) => {
	// works together with this file: submitAjaxForm.js
	console.log(req.body);

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

app.listen(3500);


function queryStringToJSON(queryString){            
    
    let pairs = queryString.split('&');

    let result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    return JSON.parse(JSON.stringify(result));

} // queryStringToJSON(queryString)
