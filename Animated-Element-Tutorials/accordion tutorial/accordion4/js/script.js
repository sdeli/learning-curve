
/*https://www.youtube.com/watch?v=qL01prxxO_s*/

(function(){
"use strict";
	
	var parentMenu=document.querySelector(".parent-menu");
	parentMenu.addEventListener("click", function(e){
		event.preventDefault();
		if (e.target.tagName==="A") {
			console.log(e);

		}

		var dropDown=e.target.parentNode.children[1].children;

		if ((e.target.id==="btn-sub-menu-1"|| e.target.id==="btn-sub-menu-2") && dropDown[0].style.top!=="34px") {
				

				for(var i=0; i<4; i++){
					dropDown[i].style.left="0px";
					dropDown[i].style.top=(i+1)*34+"px";
					dropDown[i].style.zIndex=-1*i;
				}

				/*dropDown[0].style.left="0px";
				dropDown[0].style.top="34px";
				dropDown[0].style.zIndex="-1";
				
				dropDown[1].style.left="0px";
				dropDown[1].style.top="68px";
				dropDown[1].style.zIndex="-2";

				dropDown[2].style.left="0px";
				dropDown[2].style.top="102px";
				dropDown[2].style.zIndex="-3";

				dropDown[3].style.left="0px";
				dropDown[3].style.top="136px";
				dropDown[3].style.zIndex="-4";*/
		}		else{
				dropDown[0].style.top="0px";
				dropDown[1].style.top="0px";
				dropDown[2].style.top="0px";
				dropDown[3].style.top="0px";

		}

	})

	

})();


/*section .parent-menu>li:hover .sub-menu li:nth-child(1) {left:0; top:34px; z-index:-3;}
section .parent-menu>li:hover .sub-menu li:nth-child(2) {left:0; top:68px; z-index:-4;}
section .parent-menu>li:hover .sub-menu li:nth-child(3) {left:0; top:102px; z-index:-5;}
section .parent-menu>li:hover .sub-menu li:nth-child(4) {left:0; top:136px; z-index:-6;}*/