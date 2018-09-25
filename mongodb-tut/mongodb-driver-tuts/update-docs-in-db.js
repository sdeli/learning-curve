const {MongoClient, ObjectID} = require('mongodb');
// IMPORTANT NOTE
// UPDATE OPERATORS: 
let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // clinet is an instance of MongoClient
    if (err) throw err;

    var db = client.db('TodoApp')

    function updateDoc (argument) {
        // body... 
        var findDocQuery = {fasz : 2};

        var updates = { 
            $set: {
            em: 3,
          }
       }

        var updateOpts = {
            returnOriginal : false
        }

        // UPDATE ONE
        // The $set operator replaces the value of a field with the specified value.
        db.collection('Todos')
            .updateMany(findDocQuery, updates, updateOpts)
            .then((updates) => {
                console.log(JSON.stringify(updates.value, undefined, 2));
                console.log('------------------');
            }).catch(e => {
                console.log(e);
            })
    }

    function removeArrayItem() {
        let findDocQuery = {id : 'faszom'};
        //let updates = { $pull: { arr: { $in: [ 12 ] } } };
        let updates = {
            $pull : {arr : { $in : [23] } }
        }

        let updateOpts = {
            returnOriginal : false
        }
        db.collection('Todos2')
            .updateMany(findDocQuery, updates, updateOpts)
            .then((updates) => {
                console.log(JSON.stringify(updates, undefined, 2));
                console.log('------------------');
            }).catch(e => {
                console.log(e);
            })
    }
    removeArrayItem();

    client.close();
});