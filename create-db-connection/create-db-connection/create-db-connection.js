const MongoClient = require('mongodb').MongoClient;

const dbName = 'stock-data';
const dbUrl = `mongodb://localhost:27017/${dbName}`;

function createDbConnection() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
            if (err) {
                process.stdout.write('there has been an error during connecting to the db')
                process.stdout.write(err)
                reject(err)
            } else {
                resolve(client);
            }
        });
    })
}

module.exports = createDbConnection;