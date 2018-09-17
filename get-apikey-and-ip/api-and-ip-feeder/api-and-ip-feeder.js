const fs = require('fs');
const apiKeysAndIpsObj = require('./assets/apiKeysAndIpsObj.js');

let apiAndIpFeeder = {
    getApiKeyAndIp,
    apiKeysAndIpsObj
}

function getApiKeyAndIp() {
    return new Promise((resolve) => {
        let apiKeyAndIp = getapiKeyAndIpUsedMoreThan12SecsBefore(this.apiKeysAndIpsObj);
        isUsableApiKeyAndIp = Boolean(!apiKeyAndIp.errmsg);

        if (isUsableApiKeyAndIp) {
            let msg = `${JSON.stringify(apiKeyAndIp)}\n${new Date()}\n---------------`
            // logMsgIntoLoggingFile(msg)
            // process.stdout.write(apiKeyAndIp);
            // process.stdout.write(new Date());
            // process.stdout.write('---------------');
            resolve(apiKeyAndIp);
        } else {
            setTimeout(() => {
                let msg = `${JSON.stringify(apiKeyAndIp)}\n${new Date()}\n---------------`
                logMsgIntoLoggingFile(msg)
                // process.stdout.write(apiKeyAndIp.earliestApiAndIpInUse);
                // process.stdout.write(new Date());
                // process.stdout.write('---------------');
                resolve(apiKeyAndIp.earliestApiAndIpInUse);
            }, apiKeyAndIp.releaseTimeInMs);
        }
    });
}

function getapiKeyAndIpUsedMoreThan12SecsBefore(apiKeysAndIpsObj) {
    let currTime = new Date();
    let earliestApiAndIpInUse = {};

    for (let i = 0; i < apiKeysAndIpsObj.length; i++) {
        let ifhaveNeverBeenUsed = checkIfhaveNeverBennUsed(apiKeysAndIpsObj[i]); 
        if (ifhaveNeverBeenUsed) return getApiKeyAndIpObj(apiKeysAndIpsObj[i]);

        isProperIpAndApyKey = checkIfUsedMoreThan12SecsBefore(apiKeysAndIpsObj[i]);
        if (isProperIpAndApyKey) return getApiKeyAndIpObj(apiKeysAndIpsObj[i]);

        earliestApiAndIpInUse = getTheEarlierApiAndIpObj(earliestApiAndIpInUse, apiKeysAndIpsObj[i]);
    }

    let releaseTimeInMs = getApiKeyAndIpsReleaseTime(earliestApiAndIpInUse);

    return {
        errmsg : 'all ips and api keys have been used in 12 second, so we need to wait until the earliest used will be out of the 12 second time restriction',
        releaseTimeInMs,
        earliestApiAndIpInUse : getApiKeyAndIpObj(earliestApiAndIpInUse, releaseTimeInMs)
    }
}

function checkIfhaveNeverBennUsed(apiKeyAndIpObj) {
    let haveNeverBeenUsed = apiKeyAndIpObj.lastTimeInUse === null;

    if (haveNeverBeenUsed) {
        return true;
    } else {
        return false;
    }
}

function checkIfUsedMoreThan12SecsBefore(apiKeyAndIpObj) {
    let currTime = new Date();
    let usedMoreThan12SecsBefore = (currTime.getTime() - apiKeyAndIpObj.lastTimeInUse.getTime()) > (19000);

    if (usedMoreThan12SecsBefore) {
        return true;
    } else {
        return false;
    }
}

function getApiKeyAndIpObj(apiKeyAndIpObj, releaseTimeFromNow) {
    let currTime = new Date();

    if (releaseTimeFromNow) {
        let timeWhenApiKeyAndIpWillBeReleased = new Date(currTime.getTime() + releaseTimeFromNow);
        apiKeyAndIpObj.lastTimeInUse = timeWhenApiKeyAndIpWillBeReleased;
    } else {
        apiKeyAndIpObj.lastTimeInUse = currTime;
    }

    return {
        ip : apiKeyAndIpObj.ip,
        port : apiKeyAndIpObj.port,
        apiKey : apiKeyAndIpObj.apiKey
    } 
}

function getTheEarlierApiAndIpObj(earliestApiAndIpInUse, currApiAndIp) {
    let isJustPlainObject = Boolean(!earliestApiAndIpInUse.lastTimeInUse);
    if (isJustPlainObject) return currApiAndIp;

    let lastTimeInUseOfearliest = earliestApiAndIpInUse.lastTimeInUse.getTime();
    let lastTimeInUseOfCurr = currApiAndIp.lastTimeInUse.getTime();

    let isearliesterlierThanCurr = lastTimeInUseOfearliest < lastTimeInUseOfCurr;

    if (isearliesterlierThanCurr) {
        return earliestApiAndIpInUse
    } else {
        return currApiAndIp
    }
}

function getApiKeyAndIpsReleaseTime(apiKeyAndIp) {
    let currTime = new Date();
    let releaseTime = (19000) - (currTime.getTime() - apiKeyAndIp.lastTimeInUse.getTime())
    
    return releaseTime;
}

// function logMsgIntoLoggingFile(msg) {
//     let preparedMsg = `\n${new Date()}:\n${msg}\n`
    
//     fs.appendFileSync('./logging/feeder-log.txt', preparedMsg)
// }
module.exports = apiAndIpFeeder;