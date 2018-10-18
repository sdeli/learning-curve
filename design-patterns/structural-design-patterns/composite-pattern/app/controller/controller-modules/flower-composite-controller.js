// A compoiste controllor calls a function - which is common to all nodes -
// recursively to all nodes in the composite


function compositeController(compositeObj){
	this.compositeObj = compositeObj;
}

compositeController.prototype.action = function(actionName){
	// Besides the actionName argument there are maybe 
	// other arguments for the method we need to call on the node
	// but we dont know that so need to leverage argument object and be sent into the method
	var args = Array.prototype.slice.call(arguments);
	args.shift(this.compositeObj);
	for (key in this.compositeObj) {
		// iff args array is empty apply wont send any arguments, thatswhy we need it
		this.compositeObj[key][actionName].apply(this.compositeObj[key], args)
	}
}

module.exports.compositeController = compositeController;