(function(){
"use strict";

var fadeinFadeout = function(){
window.addEventListener("load", function(){
	var allCategories=document.querySelector(".allcategories-ul-div");
	var opacity = 0;

	/*fadeIn()*/
	document.querySelector(".allcategories-ul").addEventListener("mouseenter", function(){
	allCategories.style.display="block";
	allCategories.style.position="absolute";
	allCategories.style.opacity=opacity.toString();
	fadeIn()
	function show(){console.log(opacity);}
	});

	/*fadeOut()*/
	document.querySelector(".allcategories-ul").addEventListener("mouseleave", function(){
	fadeOut();
	});


	/*functions Declaration*/
	function fadeIn(){

			opacity=opacity+0.01;
			allCategories.style.opacity=opacity.toString();

			if(opacity<=1){
				console.log("+ " +opacity);
				setTimeout(function(){fadeIn()},5);
			
			}else {
				console.log("opacity="+opacity);
			}
			
		}

	function fadeOut(){

			opacity=opacity-0.01;
			allCategories.style.opacity=opacity.toString();

			if(opacity>=0){
				console.log("- " + opacity);
				setTimeout(function(){fadeOut()},5);
			
			}else {
				console.log("kesz opacity=" + opacity);
				setTimeout(function(){allCategories.style.display="none";},1000);

				}
			
		}
	
})

}

var x= new fadeinFadeout();
console.log(x);

}())