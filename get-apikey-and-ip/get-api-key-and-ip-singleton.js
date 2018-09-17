const apiAndIpFeeder = require('./api-and-ip-feeder/api-and-ip-feeder.js');

var apiAndIpFeederSingleton = (function () {
    var apiAndIpFeederInstance;
 
    function createInstance() {
        var object = new Object(apiAndIpFeeder);

        return object;
    }
 
    return {
        getInstance: function () {
            if (!apiAndIpFeederInstance) {
                apiAndIpFeederInstance = createInstance();
            }

            return apiAndIpFeederInstance;
        }
    };
})();

module.exports = apiAndIpFeederSingleton;