/*
 * Title: getTemperature
 * Description: this module fetches temperature data from developer.forecast.io
 * Author: Sandor Deli
 * logic: 
 * further notes:
 *        example for a regular request:
 *        https://api.darksky.net/forecast/682ac7a419a45bc97cf6eb70047cf1cf/37.8267,-122.4233 
 *        https://api.darksky.net/forecast/682ac7a419a45bc97cf6eb70047cf1cf/47.5112782,19.1782718 
 */

const request = require('request');

const urlRoute = 'https://api.darksky.net/forecast'
const forecastApiKey = '682ac7a419a45bc97cf6eb70047cf1cf';

async function logic(lat, lng, callBackFn) {
    let reqUrl = `${urlRoute}/${forecastApiKey}/${lat},${lng}`
    let temperature = await getTemperatureReq(reqUrl, callBackFn)
    .then(temperature => temperature);

    return temperature;
}

async function getTemperatureReq(reqUrl, callBackFn) {
    return new Promise(resolve => {
        request({
            url : reqUrl,
            json : true
        }, (err, resp, body) => {
            let temperature = getTemperatureReqCallBack(err, resp, body, callBackFn)
            console.log(temperature);
            resolve(temperature);
        });    
    });
}

function getTemperatureReqCallBack(err, resp, body, callBackFn){
    if (err) {
        callBackFn(`there has been an error during the request:\n${err}`);
    } else if (body.error) {
        callBackFn(body.error);
    } else if (resp.statusCode !== 200) {
        callBackFn(`there has been an err during the request:\n${resp.statusCode}\n${resp.statusMessage}`);
    } else if (resp.statusCode === 200) {
        return body.currently.temperature;
    }
}

module.exports = logic;