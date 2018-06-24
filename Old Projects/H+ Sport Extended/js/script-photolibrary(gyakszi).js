(function(){
	"use strict";

	var myNode=document.querySelector("form.row");
	myNode.addEventListener("click",function(e){
		
		if (e.target.tagName==="IMG") {
			var myOverlay= document.createElement("div");
			myOverlay.id="overlay";
			myOverlay.style.position="absolute";
			myOverlay.style.top=0;
			myOverlay.style.top=window.pageYOffset+"px";
			myOverlay.style.left=window.pageXOffset+"px";
			myOverlay.style.cursor="pointer";
			myOverlay.style.backgroundColor="rgba(0,0,0,0.7)";
			myOverlay.style.height=window.innerHeight + "px";
			myOverlay.style.width=window.innerWidth+ "px";
			document.body.appendChild(myOverlay);
		}

		var imgSrc=e.target.src;
		var largeImg=document.createElement("img");
		largeImg.src=imgSrc.substr(0, imgSrc.length-4);
		largeImg.src=largeImg.src+"_large.jpg";
		console.log(largeImg.src);

		largeImg.style.position="absolute";
		largeImg.style.display="block"
		
		largeImg.addEventListener("load", function(){
			if (this.height>window.innerHeight) {
			var ratio=window.innerHeight/this.height;
			this.height=this.height*ratio;
			this.width=this.width*ratio;
				
			}

			if (this.width>window.innerWidth) {
			var ratio=window.innerWidth/this.height;
			this.height=this.height*ratio;
			this.width=this.width*ratio;
				
			}
		centerImg(largeImg);
		myOverlay.appendChild(largeImg);

		})

		function centerImg(img){
			var myDifY=(window.innerHeight-img.height)/2;
			var myDifX=(window.innerWidth-img.width)/2;
			console.log(myDifX);
			img.style.top=myDifY+"px";
			img.style.left=myDifX+"px";
		}

		window.addEventListener("scroll", function(){
			if(myOverlay){
				myOverlay.style.top=window.pageYOffset+"px";
				myOverlay.style.left=window.pageXOffset+"px";

			}
		},false)

		window.addEventListener("resize", function(){
			if(myOverlay){
				
				myOverlay.style.width=window.innerWidth+"px";
				myOverlay.style.height=window.innerHeight+"px";
				centerImg(largeImg);
			
			}

		},false)

		myOverlay.addEventListener("click", function(){
			myOverlay.parentNode.removeChild(myOverlay);
			

		},false)

	})
})();