(function(){
"use strict";
	var accordion=document.getElementById("accordion");
	var tagNames=accordion.getElementsByTagName("h2");

	 function clickandbuy(e){
			console.log(e);
			var one=e.target;

			if(one.tagName==="H2" && one.nextElementSibling.style.display=="none"){
				one.nextElementSibling.style.display="block";		
			}else one.nextElementSibling.style.display="none";
		
	};

	tagNames[0].addEventListener("click",clickandbuy);
	tagNames[1].addEventListener("click",clickandbuy);
})();


/*
	



*/