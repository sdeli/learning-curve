(function (){
	"use strict";

	document.addEventListener("DOMContentLoaded", function(){
	console.log("one");	
	})

  var myNode = document.querySelector("form.row");

  myNode.addEventListener("click", function(e){
  	event.preventDefault()
  	
  	if(e.target.tagName==="IMG"){
  		
  		var myOverlay = document.createElement("div");
  		myOverlay.id="overlay";
  		document.body.appendChild(myOverlay);

  		myOverlay.style.position="absolute";
  		myOverlay.style.top=0;
  		myOverlay.style.backgroundColor= "rgba(0,0,0,0.7)";

  		myOverlay.style.width= window.innerWidth+"px";
  		myOverlay.style.height= window.innerHeight+"px";
  		myOverlay.style.top=window.pageYOffset+"px";
  		myOverlay.style.left=window.pageXOffset+"px";

  		
  	}

  	var myNodeSource = e.target.src;
  	var LargeImg = document.createElement("img");
  	LargeImg.src = myNodeSource.slice(0, -4)+"_large.jpg";

  	console.log(LargeImg.src);

  	LargeImg.style.position="absolute";
  	LargeImg.style.display="block";

  	LargeImg.addEventListener("load", function (){
  
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
  		centerImg(this);
  		myOverlay.appendChild(LargeImg);
  	});

  	myOverlay.addEventListener("click", function(){  //remove element
  		if(myOverlay){
  			myOverlay.parentNode.removeChild(myOverlay);
  		}
  	},false);

  	window.addEventListener("scroll", function(){
  		if(myOverlay){
  		myOverlay.style.top=window.pageYOffset+"px";
  		myOverlay.style.left=window.pageXOffset+"px";

  		}
  	},false);

  	window.addEventListener("resize", function(){
  		if(myOverlay){
  		myOverlay.style.width=window.innerWidth+"px";
  		myOverlay.style.height=window.innerHeight+"px";	

  		myOverlay.style.top=window.pageYOffset+"px";
  		myOverlay.style.left=window.pageXOffset+"px";

  		centerImg(LargeImg);

  		}
  	},false);

	function centerImg(img){
		var myDifY=(window.innerHeight-img.height)/2;
		var myDifX=(window.innerWidth-img.width)/2;

		console.log(myDifX+ "px");

		LargeImg.style.top=myDifY + "px";
		LargeImg.style.left=myDifX + "px";

	}  	

  }, false);


})(); //Self executing function

/* Tasks

 ad event listener to container, fix to execute when clicked the proper type of element clicked/ add & style new Element
 / find out which element is clicked/resize/center/ handle clicks(get rid of the img when clicking swhere else removechild) / scrolling 
 resize for the window*/

//document.getElementsByTagName("img"); not a function 8.sor
//why we needed to wait still the image has been loaded  40
//myNode.addEventListener("click",function(e){
		//if (e.target.tagName) {}

//new date