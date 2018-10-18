/*
 * Title: 
 * Description: 
 * Author: Sandor Deli
 * logic: 
 *
 */

const yargs = require('yargs');
const axios = require('axios');
const forecastRoute = 'https://api.darksky.net/forecast'
const forecastApiKey = '682ac7a419a45bc97cf6eb70047cf1cf';

const argv = createArgsObj(yargs); 

const googleMapsApiKey = 'AIzaSyCl4B1hB08--612VWipzGgzL6q_kE4KHfs';

async function logic() {
    let encodedAddressForMaps = encodeURIComponent(argv.address);

    let googleMapsReqUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${googleMapsApiKey}&address=${encodedAddressForMaps}`;

    axios.get(googleMapsReqUrl)
        .then(function (response) {
            if (response.data.status === 'ZERO_RESULTS') {
                throw new Error('unable to find this address');
            } else if (response.data.status === 'OVER_QUERY_LIMIT') {
                throw new Error('we are over query limit');
            }

            let addrRes = {
                status : response.data.status,
                address : response.data.results[0].formatted_address,
                lat : response.data.results[0].geometry.location.lat,
                lng : response.data.results[0].geometry.location.lng
            }

            let forecastReqUrl = `${forecastRoute}/${forecastApiKey}/${addrRes.lat},${addrRes.lng}`;
            console.log(`At the adress: ${addrRes.address}`);
            return axios.get(forecastReqUrl);
        })
        .then(response => {
            let currentTemp = response.data.currently.temperature;
            let apparentTemp = response.data.currently.apparentTemperature;
            console.log(`currently the temperature is: ${currentTemp}\nfahrenheit and it feels like: ${apparentTemp} fahrenheit`);
        })
        .catch(function (error) {
            if (error.code) {
                console.log('unable to connect to api server');
            } else {
                console.log(error.message);
            }
        });

}

function ifRouting(response) {
    if (Array.isArray(response.data.results)) {
        console.log(response.data.results[0]);
    } else {
        console.log(response.data.results);
    }
}

function createArgsObj(yargs) {
    return yargs
    .options({
        a : {
            alias : 'address',
            demand : true,
            string : true,
            describe : 'the adress details of the lat and lng data we want to get'
        },
    })
    .help()
    .argv
}

logic();