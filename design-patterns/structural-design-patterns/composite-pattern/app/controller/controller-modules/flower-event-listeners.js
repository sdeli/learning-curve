function clickOnAdvertArea(){
	let advert = document.querySelectorAll('.advert')[0];
	let flowerColorOptions = ['purple', 'yellow','green', 'basic'];

	advert.addEventListener('click', function(){
		let flowerSingleton = flowersCreatorSingl.getObject();
		let randTopPos = getRandNum(170, 320);
		let randLeftPos = getRandNum(20, window.innerWidth - 100);
		let flowerColorOptionsArr = Object.keys(flowerSingleton.getRegisteredColors());
		let colorForNow = flowerColorOptionsArr[getRandNum(0, flowerColorOptions.length)];
		let options = {
			color : colorForNow,
			animation : 'growFlower',
			size : 's',
			position : {
				top : randTopPos,
				left : randLeftPos
			}
		}
		let flower = flowerSingleton.createFlower(options);
		let isFlowerAppended = flowerSingleton.appendFlower(flower, this);
	});

	function getRandNum(min, max) {
	  return  Math.floor(Math.random() * (max - min)) + min
	}
}


function keypress(){
	window.addEventListener('keypress', function(e){
		let flowerSingleton = flowersCreatorSingl.getObject();
		console.log(typeof e.keyCode)
		if(e.keyCode === 97){
			flowerSingleton.moveFlowersRealTime('-5px');
			console.log('65')
		}
		if(e.keyCode === 115){
			console.log('83')
			flowerSingleton.moveFlowersRealTime('5px');
		}
	
	});
}

module.exports.clickOnAdvertArea = clickOnAdvertArea;
module.exports.keypress = keypress;
