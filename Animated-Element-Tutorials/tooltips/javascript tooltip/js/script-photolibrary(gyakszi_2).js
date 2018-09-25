(function(){
"use strict";

var myNode= document.querySelector("form.row div.row");

myNode.addEventListener("click", function(a){
	if (a.target.tagName==="IMG") {
		var myOverlay= document.createElement("div");
		
		myOverlay.id="overlay";
		myOverlay.style.position="absolute";
		myOverlay.style.width=window.innerWidth+"px";
		myOverlay.style.height=window.innerHeight+"px";
		myOverlay.style.backgroundColor="rgba(0,0,0,0.7)";
		myOverlay.style.top=window.pageYOffset+"px";
		myOverlay.style.left=window.pageXOffset+"px";

		document.body.appendChild(myOverlay);

		var largeImgSrc=a.target.src;
		largeImgSrc=largeImgSrc.slice(0, -4) + "_large.jpg";
		console.log(largeImgSrc);
		
		var largeImg= document.createElement("img");
		largeImg.src=largeImgSrc;
		largeImg.style.display="block";
		largeImg.style.position="absolute";

		largeImg.addEventListener("load", function(){
			if (this.height>window.innerHeight) {
				var ratio=window.innerHeight/this.height;
				this.height=this.height*ratio;
				this.width=this.width*ratio;
				
			}

			if (this.width>window.innerWidth) {
				var ratio=window.innerWidth/this.width;
				this.height=this.height*ratio;
				this.width=this.width*ratio;
			}
			centerImg(largeImg);
			myOverlay.appendChild(largeImg);
		})

		window.addEventListener("resize", function(){
		if(myOverlay){
			myOverlay.style.width=window.innerWidth+"px";
			myOverlay.style.height=window.innerHeight+"px";
			centerImg(largeImg);
		}
	}, false)	

		function centerImg(img){
			var myOffsetX=(window.innerWidth-img.width)/2;
			var myOffsetY=(window.innerHeight-img.height)/2;

			largeImg.style.top=myOffsetY+"px";
			largeImg.style.left=myOffsetX+"px";
		}

	}
	window.addEventListener("scroll", function(){
		if(myOverlay){
			myOverlay.style.top=window.pageYOffset+"px";
			myOverlay.style.left=window.pageXOffset+"px";

		}
	}, false)	


	myOverlay.addEventListener("click", function(){
	if (myOverlay) {
		myOverlay.parentNode.removeChild(myOverlay);
	}


})

});


})();

/*

photo library

behuzni a kepek divjet
ramenni csak a kepekre
clickre add overlay
igazit page offset
overlayre add photo
photo size ratio
center
resize overlay to window
clickre eltunik

*/