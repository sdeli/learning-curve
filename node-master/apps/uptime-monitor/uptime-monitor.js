/*
 * Title: Uptime-Monitor
 * Description: 
 * Author: Sandor Deli
 * Date: 
 *
 */
 const fs = require('fs');
 const http = require('http');
 const url = require('url');
 var StringDecoder = require('string_decoder').StringDecoder;

console.log('end ---------------------');

var idet = {
  gori : 'majom';
}
function idiot(){
  console.log(this);
}

idiot = idiot.bind(idet)
majom = majom.bind(idet);
majom();

 let server = http.createServer(function(req,res){
	// Parse the url
	let parsedUrl = url.parse(req.url, true);

  // Get the path
  let path = parsedUrl.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, '');

  let method = req.method.toLowerCase()

  let queryStringObj = parsedUrl.query;

  let headers = req.headers;

  var decoder = new StringDecoder('utf-8');
  var buffer = '';

  req.on('data', function(data) {
  	buffer += decoder.write(data);
  });

  req.on('end', function() {
  	buffer += decoder.end();

      // Send the response
      res.end('Hello World!\n');

      // Log the request/response
      console.log('Request received with this payload: ',buffer);
  });
});

 server.listen(3000, function(){
 	console.log('running');
 });