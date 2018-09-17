const {MongoClient, ObjectID} = require('mongodb');

let collection = 'TodoApp';
var url = `mongodb://localhost:27017/${collection}`;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    // clinet is an instance of MongoClient
    if (err) throw err;

    var db = client.db('TodoApp')

    let aggregationQuery1 = [
        {
            arr : {
                $elemMatch : {$eq : "farok"}
            }
        },
        {
            $lookup:
                {
                     from: "Todos2",
                     localField: "reference",
                     foreignField: "_id",
                     as: "textOfUser"
                }
        }
    ]

    let aggregationQuery2 = [
        {$match: {email : "bgfkszmsdeli@gmail.com"}},
        {
            $lookup:
                {
                     from: "Todos",
                     localField: "arr",
                     foreignField: "email",
                     as: "emailOfOther"
                }
        }
    ]

    let aggregationQuery3 = [
        {$match: {id : "faszom"}},
        {
            $lookup:
                {
                     from: "Todos2",
                     localField: "arr",
                     foreignField: "id",
                     as: "arr"
                }
        },
        {
            $lookup:
                {
                     from: "Todos2",
                     localField: "arr2",
                     foreignField: "id",
                     as: "arr2"
                }
        }
    ]

    function aggregationLookup (aggregationQuery1) {
        db.collection('Todos')
        .aggregate(aggregationQuery)
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch(e => {
            console.log(e);
        })
    }

    function aggregationLookupOnArr (aggregationQuery2) {
        db.collection('Todos2')
        .aggregate(aggregationQuery2)
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }).catch(e => {
            console.log(e);
        })
    }

    aggregationLookupOnArr (aggregationQuery3)

    client.close();
});