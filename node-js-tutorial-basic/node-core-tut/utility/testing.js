
function getQueryObj(queryStr) {
    queryStr = decodeURIComponent(queryStr);
    queryStrArr = queryStr.split('&');

    return queryStrArr.reduce((accumulator, currValue, index) => {
        let keyValueArr = currValue.split('=');
        accumulator[keyValueArr[0]] = keyValueArr[1];
        return accumulator;
    } , {})
}

console.log(getQueryObj('first=Sandor&last=deli&email=bgfkszmsdeli%40gmail.com'));