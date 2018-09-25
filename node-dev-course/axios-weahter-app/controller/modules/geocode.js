const request = require('request');
const googleMapsApiKey = 'AIzaSyCl4B1hB08--612VWipzGgzL6q_kE4KHfs';

async function logic(address, callBackFn) {
    let encodedAddress = encodeURIComponent(address);

    let reqdUrl = `https://maps.googleapis.com/maps/api/geocode/json?
            key=${googleMapsApiKey}&address=${encodedAddress}`;
                
    let coordinates = await getCoordinatesReq(reqdUrl, callBackFn)
    .then(coordinates => coordinates);

    return coordinates;
}

async function getCoordinatesReq(reqUrl, callBackFn) {
    return new Promise(resolve => {
        let coordinates = 'majom2';

        request({
            url : reqUrl,
            json : true
        }, (err, resp, body) => {
            coordinates = getCoordinatesCallBack(err, resp, body, callBackFn)
            resolve(coordinates);
        });    
    });
}

function getCoordinatesCallBack(err, resp, body, callBackFn){
    console.log('request status:');
    console.log(body.status);

    if (err) {
        callBackFn('we have experienced and error: ' + err);
        return 'we have experienced and error: ' + err;
    } else if (body.status === 'ZERO_RESULTS') {
        callBackFn('unable to find this address');
        return 'unable to find this address';
    } else if (body.status === 'OVER_QUERY_LIMIT') {
        callBackFn('we are over query limit');
        return 'we are over query limit';
    } else if (body.status === 'OK') {
        let addrRes = {
            status : body.status,
            address : body.results[0].formatted_address,
            lat : body.results[0].geometry.location.lat,
            lng : body.results[0].geometry.location.lng
        }

        callBackFn(undefined, addrRes);
        return addrRes;
    }
}

module.exports = {
    address : logic
}