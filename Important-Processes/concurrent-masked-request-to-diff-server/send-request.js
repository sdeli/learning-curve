const http = require('http');
const fs = require('fs'); 

const processArgvExtractor = require('./process-argv-extractor.js');

const argv = processArgvExtractor(process.argv);
const ip = (argv.ip.split(':'))[0];
const port = (argv.ip.split(':'))[1];
const fileNumb = argv.fileNumb;

var options = {
  host: ip,
  port: port,
  path: "http://www.infosniper.net/",
  headers: {
    Host: "www.infosniper.net"
  }
};

http.get(options, function(res) {
    res.setEncoding('utf8');

    let rawData = '';

    res.on('data', (chunk) => { 
        rawData += chunk; 
    });

    res.on('end', () => {
        try {
            fs.writeFileSync(`./test-model/data-${fileNumb}`, rawData);
            process.stdout.write('written');
            process.stderr.write('written');
        } catch (e) {
            process.stderr.write(e.message);
        }
    });
}).on('error', (e) => {
    process.stderr.write(e.message);
});

// request('http://www.infosniper.net/', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });