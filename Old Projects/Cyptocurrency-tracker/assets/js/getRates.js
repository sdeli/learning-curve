/* SECTION: GLOBAL VARIABLES */
const btnAllRates = document.querySelectorAll('#allRates')[0];
const btnReqOneRate = document.querySelectorAll('#requestRate')[0];
const inpCurrTags = document.querySelectorAll('#currencytags')[0];
const UlOutput = document.querySelectorAll('#output')[0];
const selectCurr = document.querySelectorAll('#selectCurr')[0];

const url = 'https://api.coinmarketcap.com/v1/ticker/';
const currArr = ["AUD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK",
				 "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", 
				 "INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", 
				 "PHP", "PKR", "PLN", "RUB", "SEK", "SGD", "THB", 
				 "TRY", "TWD", "ZAR"];

/* SECTION: CALL FUNCTIONS */
createCurrDrpdwn(currArr, selectCurr);
btnAllRates.addEventListener('click',getAllRates);
btnReqOneRate.addEventListener('click',function(){
	getOneRateByInpValue(inpCurrTags);
});


/* SECTION: FUNCTION DECLARATIONS */
function getOneRateByInpValue(inputField){
	///crypto/:curr
	let curr = selectCurr.value;
	let cryptoCurr = inputField.value;

	if(cryptoCurr == "") throw 'please provide a currency to look up';

	cryptoCurr = replaceSpaceToDash(cryptoCurr);
	urlForOneCurr = `/crypto/${cryptoCurr}/price/${curr}`;

	fetch(urlForOneCurr).then(function(res) {
		return res.json();
	}).then(function(data){
		outputOneCrypto(JSON.parse(data),curr);
	}).catch(function(err){
		console.log(err);
	});

}

function getAllRates(){
	//'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10'
	let curr = selectCurr.value;
	let currInUrl = '?convert=' + curr;
	let fullUrl = url + currInUrl;

	fetch(fullUrl).then(function(res) {
		return res.json();
	}).then(function(data){
		outputAllCrypto(data, curr);
	}).catch(function(err){
		console.log(JSON.stringify(err));
	});

}

function outputAllCrypto(arr, currency){

	UlOutput.innerHTML = "";
	var propAccerssor = 'price_' + currency.toLowerCase();

	arr.forEach(function(item, i) {
		let priceFixed = Math.round(item[propAccerssor] * 100) / 100;
		let li = document.createElement('li');
		let span = document.createElement('span');
		span.innerHTML = `${item.name} ${item.symbol} ${priceFixed}`
		li.appendChild(span);
		UlOutput.appendChild(li);		
	});

}

function outputOneCrypto(arr, currency){

	UlOutput.innerHTML = "";
	buildUpCryptoList();
	createCryptoHeader();

	function buildUpCryptoList(){
		for (key in arr[0]) {
			let li = document.createElement('li');
			li.innerHTML =key + ": " + arr[0][key];
			UlOutput.appendChild(li);
		}
	}

	function createCryptoHeader(){

		let cryptoTitle = document.createElement('h2');
		let cyptoTitleTextNode = formateTitleText(arr[0].id)

		cryptoTitle.innerHTML = cyptoTitleTextNode;

		UlOutput.insertBefore(cryptoTitle, UlOutput.childNodes[0]);

		function formateTitleText(titleStr){

			if( titleStr.indexOf('-') >= 0 ){
				titleStr = titleStr.replace('-', ' ');
			} //if

			titleStr = titleStr.toUpperCase();

			return titleStr;

		} // formateTitleText()

	} // createCryptoHeader() 

} // outputOneCrypto()

function createCurrDrpdwn(currArr, selectMenu){

	currArr.forEach(function(item, i){
		let optionTag = document.createElement('option');
		optionTag.innerHTML = item;
		optionTag.setAttribute("value", item);
		selectMenu.appendChild(optionTag);
	});

}

function replaceSpaceToDash(string){
	
	if( string.indexOf(' ') >= 0 ){
		string = string.replace(' ','-').toLowerCase();
	}

	return string;
}