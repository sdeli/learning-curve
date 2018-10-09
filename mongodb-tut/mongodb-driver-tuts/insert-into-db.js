// IMPORTANT NOTES
 // we dont need to create db before using it
 // db doesnt get created until data insertion


const MongoClient = require('mongodb').MongoClient;

<<<<<<< HEAD
let collection = 'stock-data';
var url = `mongodb://sdeli:Bgfkszm1234@ds161102.mlab.com:61102/stock-data`;
=======
let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;
>>>>>>> 0027b162b95a334519d1bff0cca323cb83156393

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // clinet is an instance of MongoClient
    if (err) throw err;

<<<<<<< HEAD
    var db = client.db()
=======
    var db = client.db('TodoApp')
>>>>>>> 0027b162b95a334519d1bff0cca323cb83156393
    
    db.collection('Todos')
    .insertOne({
        text : 'some te'
    }, (err, result) => {
    if (err) throw err;
        // result.ops => all of the docs have been inserted
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.collection('Todos2').insertMany([
        {text : 'some teeeee1'},
        {text : 'some teeeeeee2'},
        {text : 'some teeeeeeeee3'},
    ], (err, result) => {
        if (err) throw err;
        // result.ops => all of the docs have been inserted
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});