const express = require('express');
const app = express();
const request = require('request');
const fs = require("fs");
const readFileName  =  __dirname + '/assets/misc/sample.txt';
const url = 'https://api.coinmarketcap.com/v1/ticker/';
// setup template engine
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

// setupt serving of static files
app.use('/assets',express.static('assets'));

// ROUTINGS
app.get('/', function(req, res){
	res.render('home');
});

app.get('/autocomplete-critonames', function(req, res){
	res.render('home');
});

app.get('/crypto/:cryptoCurr/price/:curr', function(req, res){
	// example: https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR
	let fullUrl = `${url}${req.params.cryptoCurr}/?convert=${req.params.curr}`;
	
	request(fullUrl,function(error, response, body){
		if (error) console.log(err);
		res.json(body);
	});
});

app.listen(3000);



