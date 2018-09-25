

var extract = (function(){

	function call(){
		console.log("call");
		var array=getArray();
		console.log(array);
		loop(array);

	}//call()

	function getArray(){
		console.log("getArray");
		return document.querySelectorAll("span.sr-hotel__name");

	}//getArray()


	function loop(array){
		console.log("loop");
		for(var i=0; i<array.length; i++){
			console.log("for");
			console.log(array[i].innerHTML);

		}

	}//loop

	return {

		call     : function(){ call(); },
		getArray : function(){ getArray(); },
		loop     : function(array){ loop(array); }

	}// return

})();//extract
