function fvNeve() {
	//
}
//(function() {
	"use strict";

var fadeInFrom=0;
		var fadeOutFrom=1;
		var max=0;
		function fadeout(element){
			var target=document.getElementById(element);
			target.style.display="block";
			target.style.opacity=fadeOutFrom.toString();
			console.log(fadeOutFrom)
			console.log(element)
			fadeOutFrom=fadeOutFrom-0.01;	
			if (fadeOutFrom<=0) {
       			 max=0;
				 console.log("kesz");
				 fadeOutFrom=1;
    			} else {
       				setTimeout(function(){fadeout(element)},50);
   				 }
		}

		function fadein(element){
			var target=document.getElementById(element);
			target.style.display="block";
			target.style.opacity=fadeInFrom.toString();
			console.log(fadeInFrom)
			console.log(element)
			fadeInFrom=fadeInFrom+0.01;	
			if (fadeInFrom>=1) {
       			 max=0;
				 console.log("kesz");
				 fadeInFrom=0;
    			} else {
       				setTimeout(function(){fadein(element)},50);
   				 }
		}
//})();