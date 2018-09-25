const createDbConnection = require('./create-db-connection/create-db-connection.js');

var createDbConnectionSingleton = (function () {
    var clientInstance;
 
    function createClientInstance() {
        return new Promise((resolve, reject) => {
            if (!clientInstance) {
                createDbConnection()
                .then(resolvedClientInstance => {
                    clientInstance = resolvedClientInstance;
                    resolve(resolvedClientInstance);
                })
                .catch(e => {
                    reject(e);
                })
            }
        })
    }
 
    return {
        getClientInstance: function () {
            return new Promise((resolve, reject) => {
                if (!clientInstance) {
                    createClientInstance()
                    .then(resolvedClientInstance => {
                        resolve(resolvedClientInstance);
                    })
                    .catch(e => {
                        reject(e);
                    })
                } else {
                     resolve(clientInstance);   
                }
            })
        }
    };
})();

module.exports = createDbConnectionSingleton;