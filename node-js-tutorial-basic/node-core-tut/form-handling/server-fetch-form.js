// IMPORTANT NOTEs:
// you get the FORM DATA IN KEY VALUE PAIRS - first=Sandor&last=deli&email=bgfkszmsdeli%40gmail.com
// key is the formfieldname, value is the user input
// -----
// THE <FORM> ELEMENT DEFINES HOW THE DATA WILL BE SENT.
// ACTION attribute: defines where the data gets sent - <form action="/somewhere"> .
    // if no action attr than data is sent to present page 
// METHOD attr: defines the request method
// -----
// METHOD TYPES:
// 1. GET:
// The GET method to ask the server to for a given resource.
// In this case, the BROWSER SENDS AN EMPTY BODY. 
// Because the body is empty, the DATA SENT TO THE SERVER IS APPENDED TO THE URL.
// 2. POST: method to ask the server to for a given resource.
// the DATA IS APPENDED TO THE BODY of request - get the data by chunk of the req read stream

// STEPPS TO FETCH FORM DATA:
//      route get and post request => routeGetAndPostReqs()
//      collect query string for form data => getQueryStrFromPostReq()
//      organise query string into object - make data accessible => getQueryObj(queryStr)
//      validate and evaluate the data => handlePostRequest(req, res)
//      respond based on the data => handlePostRequest(req, res)
(function fetchPostData() {
    const http = require('http');
    const fs = require('fs');

    let formPagePath = './view/form.html';

    function routeGetAndPostReqs(){
        http.createServer((req, res) => {
            console.log(req.method);
            if (req.method === 'GET') {
                fileSendRouting(res, req.url);
            } else if (req.method === 'POST') {
                handlePostRequest(req, res);
            }
        }).listen(3000);
    }

    function fileSendRouting(res, url) {
        if (url === '/form') {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            fs.createReadStream(formPagePath, 'utf8').pipe(res);
        } else {
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.end('404 sorry');
        }
    }

    async function handlePostRequest(req, res){
        let queryStr = await getQueryStrFromPostReq(req).then((queryStr) => queryStr);
        let QueryObj = getQueryObj(queryStr);
        
        console.log(JSON.stringify(QueryObj));

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('thank you for the deatils');
    }

    function getQueryStrFromPostReq(req) {
        return new Promise(resolve => {
            let queryStr = "";

            req.on('data', (chunk) => {
                console.log(queryStr);
                queryStr += chunk;    
            });

            req.on('end', () => {
                console.log(queryStr);
                resolve(queryStr);
            });
        });
    }

    function getQueryObj(queryStr) {
        queryStr = decodeURIComponent(queryStr);
        queryStrArr = queryStr.split('&');

        return queryStrArr.reduce((accumulator, currValue, index) => {
            let keyValueArr = currValue.split('=');
            accumulator[keyValueArr[0]] = keyValueArr[1];
            return accumulator;
        }, {});
    }

    routeGetAndPostReqs();
}());
