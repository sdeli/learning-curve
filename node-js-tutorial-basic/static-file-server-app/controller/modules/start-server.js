// IMPORTANT NOTE
// in the view files static file need to be referenced relative to the public folder

const http = require('http');
const fs = require('fs');
const url = require('url');

function startServer(routeHandler) {
    http.createServer((req, res) => {
        // parse url => cutr query string
        let reqPath = url.parse(req.url).pathname

        routeHandler(res, reqPath);
    }).listen(3000);
}

module.exports = startServer;