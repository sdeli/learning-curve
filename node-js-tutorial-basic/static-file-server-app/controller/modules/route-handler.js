const fs = require('fs');
const path = require('path');
const streamFile = require('./route-handler-utils/streamFile.js');

const rootDir = '../public/';
const fourOfourPagePath = '../views/404.html';
const articlePagePath = '../views/article.html';
const homePagePath = '../views/home.html';

function routeHandlerLogic(res, reqPath) {
    if (!path.extname(reqPath)) {
        servePages(res, reqPath);
    } else {
        serveStaticFiles(res, reqPath);
    }
}

function servePages(res, reqPath) {
    if (reqPath === '/') {
        streamFile(res, homePagePath);
    } else if (reqPath === '/article') {
        streamFile(res, articlePagePath);
    } else {
        streamFile(res, fourOfourPagePath);
    }
}

function serveStaticFiles(res, filePath) {
    let fileLocation = path.join(rootDir, filePath);

    if (fs.existsSync(fileLocation)) {
        streamFile(res, fileLocation);
    } else {
        streamFile(res, fourOfourPagePath);
    }
}

module.exports = routeHandlerLogic;