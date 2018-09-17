const {MongoClient} = require('mongodb');
const client = require('socket.io').listen(4000).sockets

let collection = 'user-login-system';
var url = `mongodb://localhost:27017/${collection}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) throw err;
});