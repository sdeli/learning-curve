// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var quoteBox = document.querySelectorAll('#quote-box')[0];

var quotesArr = [
	{
		quote : 'A best friend is like a four leaf clover, hard to find, lucky to have',
		source : 'www.coolfunnyquotes.com',
		citation : 'publication',
		year : '2001'
	},
	{
		quote : 'As your best friend I\'ll always pick you up when you fall, after I finish laughing',
		source : 'www.coolfunnyquotes.com',
		citation : 'speach',
		year : '1997'
	},
	{
		quote : 'Never let your best friends get lonely... keep disturbing them.',
		source : 'www.coolfunnyquotes.com',
		
	},
	{
		quote : 'Friends come and go, like the waves of the ocean, but the true ones stay like an octopus on your face.',
		source : 'www.coolfunnyquotes.com',
	},
	{
		quote : 'Friends buy you food. Best friends eat your food.',
		source : 'www.coolfunnyquotes.com',
		citation : 'Walhalla',
		year : '1456'
	}
]

document.getElementById('loadQuote').addEventListener("click", 
	function(){
		var randomQuoteObj = getRandomQuote(quotesArr);
		printQuote(randomQuoteObj, quoteBox);
}, false);

function getRandomQuote(arrOfQuotes){
	var arrOfQuotesLegnth = Object.keys(arrOfQuotes).length
	var randomIndex = getRandNumber(arrOfQuotesLegnth)
	console.log(randomIndex);
	return arrOfQuotes[randomIndex];
} 

function getRandNumber(max){
	return Math.floor(Math.random() * max);
}

function printQuote(randomQuoteObj, motherElem){
	var htmlTemplate = `<p class="quote">${randomQuoteObj.quote}</p>
						<p class="source">${randomQuoteObj.source}`

	if (randomQuoteObj.citation) {
		htmlTemplate += `<span class="citation">${randomQuoteObj.citation}'</span>' `
	}

	if (randomQuoteObj.year) {
		htmlTemplate += `<span class="year">${randomQuoteObj.year}</span></p>`;
	}
	
	htmlTemplate += '</p>'
	motherElem.innerHTML = htmlTemplate;
}