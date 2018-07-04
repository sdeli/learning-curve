const fs = require('fs');

function createChatLog(cycles, filePath){
    var fakeText = '\nYOU: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis explicabo aperiam commodi, soluta et facere illum delectus esse ut at, repellat modi! Odit quis omnis ea quod, eaque sequi quia.\n\nME: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quod voluptatem magni, ratione in commodi aliquam ipsam eius quibusdam consectetur recusandae officiis accusantium, sunt, inventore odio illum rerum sit, est!\n============================'

    for (var i = 1; i <= cycles; i++) {
        if (i === 1) {
            fs.writeFileSync(filePath, fakeText); // fs.writeFile
        } else {
            fs.appendFileSync(filePath, fakeText);
        }
    }

    console.log(`Lorem pumping into ${filePath} finished`);
}

module.exports = {
    createChatLog
}