(function(){
"use strict";
 document.addEventListener("DOMContentLoaded", function(event) {
    
    console.log("DOM fully loaded and parsed");

    console.log(document.querySelector("nav.menu").style.left);

	document.querySelector("div.menu-icon").addEventListener("click", function(){

		if (document.querySelector("nav.menu").style.left!=="-240px") {
			document.querySelector("nav.menu").style.left="-240px";
		}	
	 	else {
	 		document.querySelector("nav.menu").style.left="0px"
	 	}
	})

 });	

})();