/*
 * Title: 
 * Description: 
 * Author: Sandor Deli
 * logic: 
 *
 */

const request = require('request');
const yargs = require('yargs');

const geocode = require('./modules/geocode.js')
const getTemperature = require('./modules/getTemperature.js');
const argv = createArgsObj(yargs); 

async function logic() {
    let geocodeAddress = await geocode.address(argv.address, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })

    let tempFahrenheit = await getTemperature(geocodeAddress.lat, geocodeAddress.lng, (err) => {
        if (err) console.log(err);
    });

    let tempCelsius = 5/9 * (tempFahrenheit - 32);

    console.log('Adress details Obj');
    console.log(geocodeAddress);
    console.log('temperature at ' + geocodeAddress.address + ':');
    console.log(`${tempFahrenheit} fahrenheit`);
    console.log(`${tempCelsius} celsius`);
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