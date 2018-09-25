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
const compositeController = (require('./controller-modules/flower-composite-controller.js')).compositeController;
const eventListenrs = require('./controller-modules/flower-event-listeners.js')
const keyPressListener = eventListenrs.keypress;
const clickOnAdvertAreaListener = eventListenrs.clickOnAdvertArea;

clickOnAdvertAreaListener();
keyPressListener();

let flowersCreatorSingl = (function(){

	let underUserInterface;

	function init(){
		let flowersOnScreen = [];
		let number = Math.random();
		let newFlowerFactory = flowerFactory();
		let compController = new compositeController(flowersOnScreen);
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
			 	newFlower.buildPositionFlower(options.position.top, options.position.left);
			} else {
				throw 'to provide positins is obligatory. please provide positions'
			} // else

			if (options.size) {
			 	newFlower.buildSetSize(options.size);
			} else {
				console.log('since you didnt provide any size you get default size');
			} // else

			if (options.animation) {
				newFlower.buildSetAnimation(options.animation);
			} // iff
			return newFlower;
		}

		function appendFlower(newflower, parent){
			let flower = newflower.buildGetFlower();
			parent.appendChild(flower);
			flowersOnScreen.push(newflower);
			removeItemOnClick(newflower);
			return true;
		}

		function removeFlower(flower){
			flower.parentElement.removeChild(flower);
		}

		function removeItemOnClick(newflower){
			let flower = newflower.getFlower()	
			flower.addEventListener('click', function(event){
				removeFlower(newflower.getFlower());
				event.stopPropagation();
				flowerToRemovesIndex = flowersOnScreen.indexOf(newflower);
				flowersOnScreen.splice(flowerToRemovesIndex,1)
			});
		}

		function moveFlowersRealTime(leftInPx){
			compController.action('moveLeftOrRight', leftInPx);
		}

		return {
			createFlower : createFlower,
			appendFlower : appendFlower,
			removeFlower : removeFlower,
			getRegisteredColors : getRegisteredColors,
			moveFlowersRealTime : moveFlowersRealTime
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

