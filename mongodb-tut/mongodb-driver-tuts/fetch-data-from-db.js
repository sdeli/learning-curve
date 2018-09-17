const {MongoClient, ObjectID} = require('mongodb');

let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // clinet is an instance of MongoClient
    if (err) throw err;

    var db = client.db('TodoApp')

    // find() returns a mongodb cursor => pointer to the documents and methods
    // get all items from db
    function getAllItemsFromDb() {
        db.collection('Todos2')
        .find()
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
            console.log('------------------');
        }).catch(e => {
            console.log(e);
        })
    }

    // get items by query
    function getItemsByQuery() {
        db.collection('Todos').find({text : 'some text'}).toArray()
        .then((docs) => {
            //console.log(JSON.stringify(docs, undefined, 2));
            docs.map(item => {
                console.log(item);
            });
            console.log('-------------------');
        }).catch(e => {
            console.log(e);
        })
    }

    // get item by ObjectId
    function finditemsByObjectId() {
        db.collection('Todos')
        .find({
            _id : new ObjectID('5b424f995f33c02a4afff47d')
        })
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
            console.log('-------------------');
        }).catch(e => {
            console.log(e);
        })
    }

    // count to query matching items
    function countQueryMatchingItems () {
        db.collection('Todos')
        .find({text : 'some text'})
        .count()
        .then((count) => {
            console.log(count);
            console.log('-------------------');
        }).catch(e => {
            console.log(e);
        })
    }

    // count to query matching items
    function findItemByMatchingArrItems () {
        db.collection('Todos')
        .find({
            arr : {
                $elemMatch : {$eq : "farok"}
            }
        })
        .toArray()
        .then((count) => {
            console.log(count);
            console.log('-------------------');
        }).catch(e => {
            console.log(e);
        })
    }

    function getUserInfosFromDb(db) {
        return new Promise((resolve, reject) => {
            db.collection('Todos')
                .findOne({name : 'majom'}).then(result => {
                    if (result) {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                }).catch(e => {
                    console.log(e);
                    reject('there has been an error with the db')
                });
        });
    }

    getUserInfosFromDb(db)
    client.close();
});