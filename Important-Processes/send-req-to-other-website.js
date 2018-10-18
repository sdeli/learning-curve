/*
 * Title: Send Request to other website - no thrd party lib
 * Description: Get resp of request and display on page
 * Author: Sandor Deli
 * logic: 
 *
 */

const request = require('request');

const http = require('http');
const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
let data = '';
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
 
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        let ser = createServer(data)
        ser.listen(3100, '127.0.0.1' );
    });
 
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

function createServer(data) {
    return http.createServer((req,res) => {
        // create the response header
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        //end the response
        res.end(data);
    });
}
