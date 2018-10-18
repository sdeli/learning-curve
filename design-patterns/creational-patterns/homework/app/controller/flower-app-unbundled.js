// this application adds flowers onlcick to the page
// the flowers are defined in a constructor function and
// created by builders
// the builders are triggered and managed buy a singleton
// the singleton triggers a builder onclick and from 1-4 clicks
// different builders are initialized and after the fourth starts again 
const flowerFactory = (require('./controller-modules/flower-factory.js')).flowerFactory;
const flowerBuilders = require('./controller-modules/flower-builders.js');
const purpleOrangeFlowerBuilder = flowerBuilders.PurpleOrangeFlowerBuilder;
const yellowSalmonFlowerBuilder = flowerBuilders.YellowSalmonFlowerBuilder;
const greenFlowerBuilder = flowerBuilders.GreenFlowerBuilder;
const basicFlowerBuilder = flowerBuilders.BasicFlowerBuilder;
const possibleSizes = ['s', 'm', 'lg'];
console.log('jani2');
clickOnAdvertArea();

let flowersCreatorSingl = (function(){

	let underUserInterface;

	function init(){

		let number = Math.random();
		let newFlowerFactory = flowerFactory();

		registerFlowerBuilders();

		function registerFlowerBuilders(){
			newFlowerFactory.registerFlower('purple', purpleOrangeFlowerBuilder);
			newFlowerFactory.registerFlower('yellow', yellowSalmonFlowerBuilder);
			newFlowerFactory.registerFlower('green', greenFlowerBuilder);
			newFlowerFactory.registerFlower('basic', basicFlowerBuilder);
		}

		function getRegisteredColors(){
			return newFlowerFactory.flowerTypes
		}

		function createFlower(options){

			let newFlower;

			if (options.color) {
				newFlower = newFlowerFactory.createFlower(options.color);
			} else {
				throw 'please provide a color';
			} // else

			if (options.position) {
			 	newFlower.positionFlower(options.position.top, options.position.left);
			} else {
				throw 'to provide positins is obligatory. please provide positions'
			} // else

			if (options.size) {
			 	newFlower.setSize(options.size);
			} else {
				console.log('since you didnt provide any size you get default size');
			} // else

			if (options.animation) {
				newFlower.setAnimation(options.animation);
			} // iff

			return newFlower.getFlower();
		}

		function appendFlower(flower, parent){
			parent.appendChild(flower);
			removeItemOnClick(flower);
			return true;
		}

		function removeFlower(flower){
			flower.parentElement.removeChild(flower);
		}

		function removeItemOnClick(item){
			item.addEventListener('click', function(event){
				removeFlower(item);
				event.stopPropagation();
			});
		}

		return {
			createFlower : createFlower,
			appendFlower : appendFlower,
			removeFlower : removeFlower,
			getRegisteredColors : getRegisteredColors
		}
	}

	return{
		getObject : function(){
			if (!underUserInterface) {
				underUserInterface = init();
				return underUserInterface
			} else {
				return underUserInterface
			}
		}
	}
	
}());

function clickOnAdvertArea(){
	let advert = document.querySelectorAll('.advert')[0];
	let flowersOnScreen = [];

	advert.addEventListener('click', function(){
		let flowerSingleton = flowersCreatorSingl.getObject();
		let randTopPos = getRandNum(170, 320);
		let randLeftPos = getRandNum(20, window.innerWidth - 100);
		let flowerColorOptionsArr = Object.keys(flowerSingleton.getRegisteredColors());
		let options = {
			color : getRandItemFromArray(flowerColorOptionsArr),
			animation : 'growFlower',
			size : 's',
			position : {
				top : randTopPos,
				left : randLeftPos
			}
		}
		let flower = flowerSingleton.createFlower(options);
		let isFlowerAppended = flowerSingleton.appendFlower(flower, this);
		if (isFlowerAppended) flowersOnScreen.push(flower);
	});
}

function getRandNum(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min
}

function getRandItemFromArray(arr){
	let randItem = arr[getRandNum(0, arr.length)];
	console.log('138: ');
	console.log(randItem);
	return randItem;
}


// let newFlower = newFlowerFactory.createFlower('yellow');
// 	console.log('39: ');
// 	console.log(newFlower);
//  	newFlower.setSize('s');
//  	newFlower.positionFlower(500, 500);
//  	newFlower.setAnimation('growFlower');
// let advert = document.querySelectorAll('.advert')[0];
// advert.appendChild(newFlower.getFlower());
// newFlower.setAnimation('growFlower');
// newFlower.positionFlower(200, 220);

