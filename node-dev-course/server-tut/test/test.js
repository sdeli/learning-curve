var ejs = require('ejs');
var fs = require('fs');

var res = {
    end : function(a){
        console.log(a);
    },
    arr : [],
    writeHead : function(){
        this.arr.push(...arguments)
        console.log(this.arr);
    }
}

function respondWithTemplate(res, templatePath, opts) {
    res.writeHead(200, 'OK', {contentType : 'text/html'})

    var htmlRenderized = ejs.renderFile(templatePath, opts);
    res.end(htmlRenderized);
}

respondWithTemplate(res, '../views/about.ejs', {pageTitle : 'faszom'})