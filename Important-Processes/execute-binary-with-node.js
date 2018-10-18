let exec = require('child_process').exec;
as
/*exec('google-chrome www.index.hu',(err, stdout, stderr) => {

});*/

// Require the file system
  fs = require("fs");
// Watch the sim directory
fs.watch(__dirname, { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // Prints: <Buffer ...>
  }
});