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
