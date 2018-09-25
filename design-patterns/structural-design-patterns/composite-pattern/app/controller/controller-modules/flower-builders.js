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

	BasicFlower.call(this);
	this.changeColor(leavesPurpleCol, centerOrangeCol);
}
PurpleOrangeFlowerBuilder.prototype = new BasicFlower;

PurpleOrangeFlowerBuilder.prototype.buildSetSize = function(size){
	this.setSize(size);
}
PurpleOrangeFlowerBuilder.prototype.buildPositionFlower = function(top, left){
	this.positionFlower(top, left);
}

PurpleOrangeFlowerBuilder.prototype.buildSetAnimation = function(animation){
	this.setAnimation(animation);
}
PurpleOrangeFlowerBuilder.prototype.buildGetFlower = function(){
	return this.flower.wholeFlower;
}

module.exports.PurpleOrangeFlowerBuilder = PurpleOrangeFlowerBuilder;


function GreenFlowerBuilder(){
	let leavesGreenCol = '#86af49';
	let centerLightGreenCol = '#b5e7a0';

	BasicFlower.call(this);
	this.changeColor(leavesGreenCol, centerLightGreenCol);
}

GreenFlowerBuilder.prototype = new BasicFlower;

GreenFlowerBuilder.prototype.buildSetSize = function(size){
	this.setSize(size);
}
GreenFlowerBuilder.prototype.buildPositionFlower = function(top, left){
	this.positionFlower(top, left);
}

GreenFlowerBuilder.prototype.buildSetAnimation = function(animation){
	this.setAnimation(animation);
}
GreenFlowerBuilder.prototype.buildGetFlower = function(){
	return this.flower.wholeFlower;
}

module.exports.GreenFlowerBuilder = GreenFlowerBuilder;


// #ffcc5c :#ff6f69
function YellowSalmonFlowerBuilder(){
	let leavesYellowCol = '#ffcc5c';
	let centerSalmonCol = '#ff6f69';

	BasicFlower.call(this);
	this.changeColor(leavesYellowCol, centerSalmonCol);
}

YellowSalmonFlowerBuilder.prototype = new BasicFlower;

YellowSalmonFlowerBuilder.prototype.buildSetSize = function(size){
	this.setSize(size);
}
YellowSalmonFlowerBuilder.prototype.buildPositionFlower = function(top, left){
	this.positionFlower(top, left);
}

YellowSalmonFlowerBuilder.prototype.buildSetAnimation = function(animation){
	this.setAnimation(animation);
}
YellowSalmonFlowerBuilder.prototype.buildGetFlower = function(){
	return this.flower.wholeFlower;
}

module.exports.YellowSalmonFlowerBuilder = YellowSalmonFlowerBuilder;


function BasicFlowerBuilder(){
	BasicFlower.call(this);
}

BasicFlowerBuilder.prototype = new BasicFlower;

BasicFlowerBuilder.prototype.buildSetSize = function(size){
	this.setSize(size);
}
BasicFlowerBuilder.prototype.buildPositionFlower = function(top, left){
	this.positionFlower(top, left);
}

BasicFlowerBuilder.prototype.buildSetAnimation = function(animation){
	this.setAnimation(animation);
}
BasicFlowerBuilder.prototype.buildGetFlower = function(){
	return this.flower.wholeFlower;
}

module.exports.BasicFlowerBuilder = BasicFlowerBuilder;
