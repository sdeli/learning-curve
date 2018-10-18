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
