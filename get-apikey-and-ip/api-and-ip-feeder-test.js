var apiAndIpFeederSingleton = require('./get-api-key-and-ip-singleton.js');
var apiAndIpFeeder = apiAndIpFeederSingleton.getInstance();

for (var i = 0; i < 48; i++) {
    objShouldHaveIpPortAndApikey(i);
}

function objShouldHaveIpPortAndApikey(i) {
    apiAndIpFeeder.getApiKeyAndIp()
    .then(apiAndIpObject => {
        let hasIp = Boolean(apiAndIpObject.ip);
        let hasPort = Boolean(apiAndIpObject.port);
        let hasApiKey = Boolean(apiAndIpObject.apiKey);

        console.log(i);
        console.log(hasIp && hasPort && hasApiKey);
        console.log('----------------');
    })

}
