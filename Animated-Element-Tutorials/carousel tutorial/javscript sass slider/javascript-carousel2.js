(function(){
	"use strict";
window.addEventListener("load",function(){
/*-------------------------------------------------------------------------------------------*/

document.getElementById("fuck").addEventListener("click",function(){console.log("vazze");})

var next=document.getElementById("next"),
	prev=document.getElementById("prev"),
	imgDivs=document.getElementsByClassName("inner-items"),
 	contentCarouselInner=document.querySelector(".content-carousel-inner"),
 	width=550,
	currentImageIndex=0;

	function switchImg(){
	contentCarouselInner.style.left=width*currentImageIndex +"px";
	console.log(currentImageIndex +" nak");
	};

	next.addEventListener("click",function(){
		currentImageIndex++;

		if(currentImageIndex>=imgDivs.length){
				currentImageIndex=0;
				console.log(currentImageIndex);
			}console.log(currentImageIndex +" nak");
		switchImg();
	})

	prev.addEventListener("click",function(){
		currentImageIndex--;

		if(currentImageIndex<-2){
				currentImageIndex=imgDivs.length-1;
				console.log(currentImageIndex);
			} else console.log(currentImageIndex +" meg");
		switchImg();
	})
/*-------------------------------------------------------------------------------------------*/
});
})();