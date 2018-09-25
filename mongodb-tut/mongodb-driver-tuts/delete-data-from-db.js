const {MongoClient, ObjectID} = require('mongodb');

let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // clinet is an instance of MongoClient
    if (err) throw err;

    var db = client.db('TodoApp')

    // DELETE MANY
    db.collection('Todos').deleteMany({text : 'some text'})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
            console.log('------------------');
        }).catch(e => {
            console.log(e);
        })

    // DELETE ONE => finds the first matching instance deletes and stopps
    db.collection('Todos').deleteOne({text : 'some other text'})
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
            console.log('------------------');
        }).catch(e => {
            console.log(e);
        })

    // DELETE ONE => finds the first matching instance deletes and stopps, and
    // gives value back
    db.collection('Todos').findOneAndDelete({
        _id : new ObjectID('5b425db0537915154311607a')
    })
    .then((deletedDoc) => {
        console.log(JSON.stringify(deletedDoc, undefined, 2));
        console.log('------------------');
    }).catch(e => {
        console.log(e);
    })

    client.close();
});