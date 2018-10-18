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