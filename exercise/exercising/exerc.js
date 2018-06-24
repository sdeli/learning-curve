/*
    evallal fel kene szorni meg a variableket
*/

var logOut = require('./import.js').logOut;

let majom = 'faszom';
let majom1 = 'faszom1';
let majom2 = 'faszom2';
let majom3 = 'faszom3';
let majom4 = 'faszom4';
let majom5 = 'faszom5';

logOut(...argsForLogout())

majom = 'csoki';
majom1 = 'csoi1';
majom2 = 'csoi2';

logOut(...argsForLogout())

function argsForLogout() {
    return [majom, majom1, majom2, majom3, majom4, majom5]
}

console.log(...argsForLogout());