// IMPORTANT NOTES:
// OUTGOING REQ OBJ (line 19) INSTANCE OF: http.ClientRequest or http.ServerResponse classes
// ClientRequest < OutgoingMessage < Stream < EventEmitter

const https = require('https');
const fs = require('fs');
const fileForReqBody = './utility/george-washington.html';

// https.request method expects this options object
let reqOpts = {
    hostname : 'en.wikipedia.org',
    port : 443,
    path : '/wiki/George_Washington',
    method : "GET"
}

let req = https.request(reqOpts, (res) => {
    console.log('url:', res.url);
    //console.log('headers:', res.headers);

    let resBody = "";

    res.setEncoding('utf-8');

    res.once('data', (chunk) => {
        console.log(chunk);
    });

    res.on('data', (chunk) => {
        resBody += chunk;
    });

    res.on('end', () => {
        fs.writeFile(fileForReqBody, resBody, 'utf-8', (err) => {
            if (!err) {
                console.log('george washington written into file')
            } else {
                console.log(`err during writing into file: ${err}`);
            }
        });
    });
});

req.on('err', (err) => {
    console.log(err);
});

req.end();

