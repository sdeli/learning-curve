const fs = require('fs');

let getContentType = require('./utils.js').getContentType;

function streamFileLogic(res, filePath, options) {
    var options = options || {};
    let statusCode = options.statusCode || 200;
    let contentType = options.contentType || getContentType(filePath);

    res.writeHead(200, {'Content-Type' : contentType});

    let readerFromFileLocation = getReadStream(filePath, contentType);

    readerFromFileLocation.on('err', (err) => {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('404 there was an error with the file sorry');
    });
    
    readerFromFileLocation.pipe(res);
}

function getReadStream(filePath, contentType) {
    isTypeOfText = contentType.indexOf('text') > -1;
    isTypeOfApplication = contentType.indexOf('application') > -1;

    if (isTypeOfText || isTypeOfApplication) {
        return fs.createReadStream(filePath, 'utf-8');
    } else {
        return fs.createReadStream(filePath);
    }
}

module.exports = streamFileLogic