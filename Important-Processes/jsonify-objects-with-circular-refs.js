var http = require('http');
var fs = require("fs");
/* SECTION: CREATE A SERVER */
var server = http.createServer((req,res) => { /* SECTION: if a request is sent to the server the anonimus function fires
. It has 2 params: req: request object, responseobject
 */
 	console.log( req.valueOf() ) ;

 	var reqObj = (req) ? JSON.stringify(req ) : "no reqObj in existence",
 		separator = 'separator /////////////////////////////////////////////////////// sperator',
 		resObj = (res) ? JSON.stringify(res) : "no resObj in existence", 
 		content = reqObj + " " + separator + " " + resObj;

	fs.writeFile("./newfile.txt", content, () => {

		console.log(" + writing complete");

	}); // fs.writeFile;*/

 	// create the response header
	res.writeHead(200, {'Content-Type' : 'text/plain'})
	//end the response
	res.end('response finished')
});

server.listen(3000, '127.0.0.1'	);


/* SECTION: JSON object has a paramether called censor to filter the circular refernces but not in node.js. 
To fill out the absence of that param, this function is defined. It is a function from stack overflow,
and I have no idea how it works: https://stackoverflow.com/questions/5612787/converting-an-object-to-a-string */
function censor(censor) {
  var i = 0;

  return function(key, value) {
    if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      return '[Circular]'; 

    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';

    ++i; // so we know we aren't using the original object anymore

    return value;  
  }
}