(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// colorrs:
// #d64161 : #ff7b25
// #86af49 : #b5e7a0
// #ffcc5c :#ff6f69
// let myFlower = new PurpleOrangeFlowerBuilder();
// console.log(myFlower.positionFlower);
//  	myFlower.setSize('s');
//  	myFlower.positionFlower(500, 500);
//  	myFlower.setAnimation('growFlower');
// let advert = document.querySelectorAll('.advert')[0];
// advert.appendChild(myFlower.getFlower());
// myFlower.setAnimation('growFlower');
// myFlower.positionFlower(200, 220);

let BasicFlower = (require('./flower-constructor.js')).BasicFlower; 

function PurpleOrangeFlowerBuilder(){
	let leavesPurpleCol = '#d64161';
	let centerOrangeCol = '#ff7b25';

	this.purpleOrangeFlowerObj = new BasicFlower();
	this.purpleOrangeFlowerObj.changeColor(leavesPurpleCol, centerOrangeCol);
}

PurpleOrangeFlowerBuilder.prototype.setSize = function(size){
	this.purpleOrangeFlowerObj.setSize(size);
}
PurpleOrangeFlowerBuilder.prototype.positionFlower = function(top, left){
	this.purpleOrangeFlowerObj.positionFlower(top, left);
}

PurpleOrangeFlowerBuilder.prototype.setAnimation = function(animation){
	this.purpleOrangeFlowerObj.setAnimation(animation);
}
PurpleOrangeFlowerBuilder.prototype.getFlower = function(){
	return this.purpleOrangeFlowerObj.flower.wholeFlower;
}

module.exports.PurpleOrangeFlowerBuilder = PurpleOrangeFlowerBuilder;


function GreenFlowerBuilder(){
	let leavesGreenCol = '#86af49';
	let centerLightGreenCol = '#b5e7a0';

	this.greenFlowerObj = new BasicFlower();
	this.greenFlowerObj.changeColor(leavesGreenCol, centerLightGreenCol);
}

GreenFlowerBuilder.prototype.setSize = function(size){
	this.greenFlowerObj.setSize(size);
}
GreenFlowerBuilder.prototype.positionFlower = function(top, left){
	this.greenFlowerObj.positionFlower(top, left);
}

GreenFlowerBuilder.prototype.setAnimation = function(animation){
	this.greenFlowerObj.setAnimation(animation);
}
GreenFlowerBuilder.prototype.getFlower = function(){
	return this.greenFlowerObj.flower.wholeFlower;
}

module.exports.GreenFlowerBuilder = GreenFlowerBuilder;


// #ffcc5c :#ff6f69
function YellowSalmonFlowerBuilder(){
	let leavesYellowCol = '#ffcc5c';
	let centerSalmonCol = '#ff6f69';

	this.yellowSalmonFlowerObj = new BasicFlower();
	this.yellowSalmonFlowerObj.changeColor(leavesYellowCol, centerSalmonCol);
}

YellowSalmonFlowerBuilder.prototype.setSize = function(size){
	this.yellowSalmonFlowerObj.setSize(size);
}
YellowSalmonFlowerBuilder.prototype.positionFlower = function(top, left){
	this.yellowSalmonFlowerObj.positionFlower(top, left);
}

YellowSalmonFlowerBuilder.prototype.setAnimation = function(animation){
	this.yellowSalmonFlowerObj.setAnimation(animation);
}
YellowSalmonFlowerBuilder.prototype.getFlower = function(){
	return this.yellowSalmonFlowerObj.flower.wholeFlower;
}

module.exports.YellowSalmonFlowerBuilder = YellowSalmonFlowerBuilder;


function BasicFlowerBuilder(){
	this.basicFlowerObj = new BasicFlower();
}

BasicFlowerBuilder.prototype.setSize = function(size){
	this.basicFlowerObj.setSize(size);
}
BasicFlowerBuilder.prototype.positionFlower = function(top, left){
	this.basicFlowerObj.positionFlower(top, left);
}

BasicFlowerBuilder.prototype.setAnimation = function(animation){
	this.basicFlowerObj.setAnimation(animation);
}
BasicFlowerBuilder.prototype.getFlower = function(){
	return this.basicFlowerObj.flower.wholeFlower;
}

module.exports.BasicFlowerBuilder = BasicFlowerBuilder;

},{"./flower-constructor.js":2}],2:[function(require,module,exports){
// create flower
// color
// size xs s m lg
// transition

function BasicFlower(){

	// size l represented by basic styles
	this.flowerSizes = {
		cssClassS : 'flower__small',
		cssClassM : 'flower__medium',
		cssClassXl : 'flower__xlarge',
	}

	this.flower = createFlower();

	function createFlower(){
		let flower = document.createElement('div');
		flower.setAttribute('class', "flower");

		let flowerLeaves = createAllLeaves();
		flowerLeaves.forEach((leave) => {
			flower.appendChild(leave);
		});

		let flowerCenter = createFlowerCenter();
		flowerLeaves[2].appendChild(flowerCenter);
		

		return {
			wholeFlower : flower,
			flowerCenter : flowerCenter,
			flowerLeaves : flowerLeaves,
		}
	}

	function createAllLeaves(){
		let leavesArr = [];

		for(let i = 0; i <= 2; i++){
			leavesArr[i] = document.createElement('div');

			if (i === 0) {
				leavesArr[i].setAttribute('class', 'leave')
			} else if (i === 1) {
				leavesArr[i].setAttribute('class', 'leave leave__before')
			} else if (i === 2) {
				leavesArr[i].setAttribute('class', 'leave leave__after')
			}

		} // for

		return leavesArr;
	}

	function createFlowerCenter(){
		let flowerCenter = document.createElement('div');
		flowerCenter.setAttribute('class', 'center');
		return flowerCenter;
	}

}

BasicFlower.prototype.changeColor = function(leavesColor, centerColor){
	console.log(this);
	this.flower.flowerCenter.style.background = centerColor;

	let leaves = this.flower.flowerLeaves;

	leaves.forEach( function(leave) {
		leave.style.background = leavesColor;
	});

}

BasicFlower.prototype.positionFlower = function(topInPx, leftInPx){
	let flower = this.flower.wholeFlower;
	let top = (topInPx / 16) + "rem"
	let left = (leftInPx / 16) + "rem"
	flower.style.top = top;
	flower.style.left = left;
	console.log(flower);
}

BasicFlower.prototype.setSize = function(size){
	/* In case of size l Sizes dont need to be changes, 
	they are defined in basic css styles*/
	let flowerSizes = this.flowerSizes;
	let flower = this.flower.wholeFlower;
	switch (size) {
		case 's':
			this.setClassOnItem(flowerSizes.cssClassS, flower);
			break;
		case 'm':
			this.setClassOnItem(flowerSizes.cssClassM, flower);
			break;
		case 'xl':
			this.setClassOnItem(flowerSizes.cssClassXl, flower);
			break;
	}
}

BasicFlower.prototype.setAnimation = function(animation){
	let wholeFlower = this.flower.wholeFlower;

	switch (animation) {
		case 'spinFlower':
			break;

		case 'growFlower':
			this.setClassOnItem('scaleFlower', wholeFlower);
			break;
	}

}

BasicFlower.prototype.spinFlowerOnAppend = function(){
	let flower = this.flower.wholeflower
	setTimeout(function(){
		flower.style.transform = "rotate(180deg)";
	}, 0)
}

BasicFlower.prototype.setClassOnItem = function(cssClass, item){
	let currentCssClasses = item.getAttribute('class');
	newClasses = item.setAttribute('class', currentCssClasses + " " + cssClass)
}


BasicFlower.prototype.getFlower = function(){
	return this.flower;
}

module.exports.BasicFlower = BasicFlower;
},{}],3:[function(require,module,exports){
let flowerFactory = (function(){

	let flowerTypes = {};
	
	function createFlower(type){
		if (flowerTypes[type]) {
			let newType = new flowerTypes[type]();
			return new flowerTypes[type]();
		}
	}

	function registerFlower(type, cls){
		if (cls.prototype.getFlower) {
			flowerTypes[type] = cls;
		}
	}

	return {
		createFlower : createFlower,
		registerFlower : registerFlower,
		flowerTypes : flowerTypes
	}

});

module.exports.flowerFactory = flowerFactory;

},{}],4:[function(require,module,exports){
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


},{"./controller-modules/flower-builders.js":1,"./controller-modules/flower-factory.js":3}]},{},[4]);
