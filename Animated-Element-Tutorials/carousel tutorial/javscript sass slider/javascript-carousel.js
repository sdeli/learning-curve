window.addEventListener("load",function(){

	"use strict";

	var imageCarousel={

		next : document.getElementById("next"),

		prev : document.getElementById("prev"),

		imgDivs: document.getElementsByClassName("inner-items"),

		imageIndex:0,

		addEventNext: function(){
			imageCarousel.prev.addEventListener("click", function(){
				console.log(imageCarousel.prev+imageCarousel.next)
			})
		}
	}
imageCarousel.addEventNext();
	
});

/*imageCarousel.imageIndex++;

			if(imageCarousel.imageIndex>=imgDivs.length){
				imageCarousel.imageIndex=0;
				console.log(imageCarousel.imageIndex);
			} else console.log(imageCarousel.imageIndex);*/