const https = require('https');
const cheerio = require('cheerio');

let testI = 0;

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

(function testRequestWikiPage() {
    testI++;
    let localIterator = testI;

    try {
        requestWikiPage().then(pageBody => {
            if (pageBody.indexOf('<!DOCTYPE') === 0) {
                ifTrueMsg(pageBody)
            } else {
                ifFalseMsg(pageBody)
            }
        })        
    } catch(e) {
        console.log('error in testRequestWikiPage: ' + e);
    }

    function ifTrueMsg(pageBody){
        console.log(`\n${localIterator} @PASSED: testRequestWikiPage`);
        console.log('  ' + 'pageBody.indexOf(\'<!DOCTYPE\') === 0');
        console.log('----------------------------');
    }

    function ifFalseMsg(pageBody){
        console.log(`\n${localIterator} #FAILED: testRequestWikiPage`);
        console.log('  ' +'pageBody.indexOf(\'<!DOCTYPE\') !== 0');
        console.log('  ' +'indexOf Doctype in resolved html body:');
        console.log('  ' + pageBody.indexOf('<!DOCTYPE'));
        console.log('----------------------------');
    }
}());

(function testRequestWikiPageWithCheero() {
    testI++;
    let localIterator = testI;

    try {
        requestWikiPage().then(html => {
            const $ = cheerio.load(html);
            let headingOneInnerText = $('h1#firstHeading').text();
            if (headingOneInnerText === 'George Washington') {
                ifTrueMsg(headingOneInnerText)
            } else {
                ifFalseMsg(headingOneInnerText)
            }        
        });

    } catch(e) {
        console.log('error in testRequestWikiPageWithCheero: ' + e);
    }

    function ifTrueMsg(headingOneInnerText){
        console.log(`\n${localIterator} @PASSED: testRequestWikiPageWithCheero`);
        console.log('     ' + 'headingOneInnerText === \'George Washington\'');
        console.log('---------------------------------');
    }

    function ifFalseMsg(headingOneInnerText){
        console.log(`\n${localIterator} #FAILED: testRequestWikiPageWithCheero`);
        console.log('     ' + 'headingOneInnerText:');
        console.log('     ' + headingOneInnerText);
        console.log('---------------------------------');
    }
}());