const {MongoClient, ObjectID} = require('mongodb');

let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // clinet is an instance of MongoClient
    if (err) throw err;

    var db = client.db('TodoApp')

    let findquery = {name : "idiot"};

    let updateQuery = { $push: { arr: 'you faggot' } };

    var updateOpts = {
        returnOriginal : false
    }

    db.collection('Todos')
    .updateOne(findquery, updateQuery, updateOpts)
    .then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(e => {
        console.log(e);
    })

    client.close();
});