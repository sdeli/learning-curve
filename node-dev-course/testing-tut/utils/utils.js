const https = require('https');
const fs = require('fs');

module.exports.add = (a,b) => a + b; 

module.exports.square = (a) => a * a; 

let setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}; 

module.exports.setName = setName;


function requestWikiPage() {
    const reqOpts = {
        hostname : 'en.wikipedia.org',
        port : 443,
        path : '/wiki/George_Washington',
        method : "GET"
    }

    return new Promise(resolve => {
        let req = https.request(reqOpts, (res) => {
            let resBody = "";
            res.setEncoding('utf-8');

            res.on('data', (chunk) => {
                resBody += chunk;
            });

            res.on('end', () => {
              resolve(resBody);  
            });
        });

        req.on('err', (err) => {
            console.log(err);
        });

        req.end();
    });
}

module.exports.requestWikiPage = requestWikiPage;