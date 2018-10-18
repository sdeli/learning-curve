
		


$(document).ready(function(){productslider()})
// Define Global variables-------------------------------
		var allSlideItemOnScreenParent=$("#weighted-vest-slider")[0];
		var allSlideItem=$("#weighted-vest-slider .card-item");
		var SlideItemHeight=" ";
		var ContainerOflastCardItems=[];
		var controllerRight=$("#controller-right")[0];
		var controllerLeft=$("#controller-left")[0];
		var classLeftMinus=0;
		var classRightMinus=0;


function productslider(){

		// Call Functions-------------------------------
		fillInObject()
		defineSlideRowHeight();
		setTimeout(function(){ 
					createOnLoadCssPositionProperties();
					repositionOnWindowResize();
		}, 0);
		controllerLeft.addEventListener("click", slideLeft);
		controllerRight.addEventListener("click", slideRight);




	// Define product slider row height-------------------------------
	function defineSlideRowHeight(){
		

	var slideRow=allSlideItemOnScreenParent;
	console.log(slideRow);
		SlideItemHeight = parseInt(window.getComputedStyle(allSlideItem[0], null).getPropertyValue("height"));

	var styleTag= document.createElement("style");
		styleTag.type="text/css";
	    styleTag.innerHTML=".slide-row-height{ height:"+SlideItemHeight+"px;}";
		$("head")[0].appendChild(styleTag); 


	    setTimeout(function(){ 
				slideRow.classList.add("slide-row-height");
	     }, 0);
	 }

// Cards dont have enough space put into ContainerOflastCardItems global defined---------------------------------------------------------------------

	function fillInObject(){

		var widthOfallCards=0;
		
		var SlideRowWidth = parseInt(window.getComputedStyle(allSlideItemOnScreenParent, null).getPropertyValue("width"));
	
		for (var i = 0; i<7; i++) {
				
					ThisSlideItemWidth = parseInt(window.getComputedStyle(allSlideItem[i], null).getPropertyValue("width"));
					if(ThisSlideItemWidth+widthOfallCards>SlideRowWidth){

							var elementInnerHtml=allSlideItem[i].innerHTML;
							allSlideItem[i].parentElement.removeChild(allSlideItem[i]);
							ContainerOflastCardItems.push(elementInnerHtml);

					}else{widthOfallCards+=ThisSlideItemWidth;}
			}

		}	


// count position properties of each item on screen---------------------------------------------------------------------------------------


	function createOnLoadCssPositionProperties(){
			
			var ItemWidth=parseInt(window.getComputedStyle(allSlideItem[0], null).getPropertyValue("width"));
			classLeftMinus=0-ItemWidth;
			classRightMinus=ItemWidth*allSlideItem.length;


			var styleTagContinous=document.createElement("style");
			styleTagContinous.type="text/css";
			styleTagContinous.id="cont";
			styleTagContinous.innerHTML+=".classPosProp{position: absolute;}";
			styleTagContinous.innerHTML+=".classTransProp{transition: all 1s 0s;}";
			$("head")[0].appendChild(styleTagContinous);

			var styleTagDin=document.createElement("style");
			styleTagDin.type="text/css";
			styleTagDin.id="dinamic";
			styleTagDin.innerHTML+=".classLeftMinus{left: "+classLeftMinus+"px;}";
			styleTagDin.innerHTML+=".classRightMinus{left: "+classRightMinus+"px;}";
			$("head")[0].appendChild(styleTagDin);
		

			for(i=0; i<=allSlideItem.length-1; i++){

					var leftProp=parseInt(window.getComputedStyle(allSlideItem[i], null).getPropertyValue("width"))*(i);

					styleTagDin.innerHTML+="[data-left='"+i+"']{left:"+leftProp+"px;}";

					allSlideItem[i].classList.add("classPosProp","classTransProp");
					allSlideItem[i].setAttribute("data-left",i);
			}
	}

// Slide right---------------------------------------------------------------------------------------
		

		function slideRight(){
			 var allSlideItem= $("#weighted-vest-slider .card-item");
			var allSlideItemOnScreen= allSlideItem;
			
			if(allSlideItemOnScreenParent.hasAttribute("data-animation")===false){
				allSlideItemOnScreenParent.setAttribute("data-animation","in")
				getElementFromArray();
				setTimeout(function(){ moveRight(); }, 0);
				setTimeout(function(){ dismissLastItem(); }, 1200);
			}

			function moveRight(){

				var allSlideItemOnScreen=$("#weighted-vest-slider .card-item");
				for(i=0; i<=allSlideItemOnScreen.length-1; i++){

						var moveingRightProp=parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("left"))+
						parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("width"));

						allSlideItemOnScreen[i].style.left=moveingRightProp+"px";
				}
			}

			function getElementFromArray(){

				var newItem=document.createElement("div");
				newItem.classList.add("col-sm-3-sajat", "card-item","classPosProp","classLeftMinus","classTransProp");
				
				var lastArrayitem=ContainerOflastCardItems.pop();
				newItem.innerHTML=lastArrayitem;
				$("#weighted-vest-slider")[0].insertBefore(newItem,allSlideItemOnScreen[0]);
			}

			function dismissLastItem(){

				var lastRightItem=$("#weighted-vest-slider .card-item")[$("#weighted-vest-slider .card-item").length-1];
				ContainerOflastCardItems.unshift(lastRightItem.innerHTML);
				$("#weighted-vest-slider")[0].removeChild(lastRightItem);

				allSlideItemOnScreenParent.removeAttribute("data-animation");
			}
		}


// Slide Left---------------------------------------------------------------------------------------
		
		function slideLeft(){
			var allSlideItemOnScreenParent=$("#weighted-vest-slider")[0];

			if(allSlideItemOnScreenParent.hasAttribute("data-animation")===false){
				
				allSlideItemOnScreenParent.setAttribute("data-animation","in")
					
				getElementFromArray();
				moveLeft();
			 
			setTimeout(function(){ 
				dismissLastItem(); 
			}, 1200);
			}else{console.log("nyasgem")}
			
			function moveLeft(){

				var allSlideItemOnScreen=$("#weighted-vest-slider .card-item");
				for(i=0; i<=allSlideItemOnScreen.length-1; i++){

						var moveingRightProp=parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("left"))-
						parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("width"));

						allSlideItemOnScreen[i].style.left=moveingRightProp+"px";
				}
			}

			function getElementFromArray(){

				var newItem=document.createElement("div");
				newItem.classList.add("col-sm-3-sajat", "card-item","classPosProp","classRightMinus","classTransProp");
				
				var firstArrayitem=ContainerOflastCardItems.shift();
				newItem.innerHTML=firstArrayitem;
				$("#weighted-vest-slider")[0].appendChild(newItem);
			}

			function dismissLastItem(){
				var allSlideItemOnScreenParent=$("#weighted-vest-slider")[0];
				var lastLeftItem=$("#weighted-vest-slider .card-item")[0];
				ContainerOflastCardItems.push(lastLeftItem.innerHTML);
				$("#weighted-vest-slider")[0].removeChild(lastLeftItem);
					
				allSlideItemOnScreenParent.removeAttribute("data-animation");
				
			}
		}


/* manage width on win resize--------------------------------------------------------------------------------------------------*/

		
		function repositionOnWindowResize(){

			window.addEventListener("resize", function(){recountLeftOfItems();});
			window.addEventListener("resize", function(){recountitemsOnScreen();});
			timeoutresizeWidthOfItems();

				function recountLeftOfItems(){
					var allSlideItemOnScreen=$("#weighted-vest-slider .card-item");
					var ItemWidth=parseInt(window.getComputedStyle(allSlideItemOnScreen[0], null).getPropertyValue("width"));
					var rowWidth= parseInt(window.getComputedStyle($("#weighted-vest-slider")[0], null).getPropertyValue("width"));
					classLeftMinus=0-ItemWidth;
					classRightMinus=rowWidth+10;

					
					$("head #dinamic")[0].innerHTML=".classLeftMinus{left: "+classLeftMinus+"px;}";
					$("head #dinamic")[0].innerHTML+=".classRightMinus{left: "+classRightMinus+"px;}";

					for(i=0; i<=allSlideItemOnScreen.length-1; i++){
						var width = parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("width"));
						var leftPropOnResize=width*i;

						allSlideItemOnScreen[i].style.left=leftPropOnResize+"px";
						
					}
				}

				function timeoutresizeWidthOfItems(){
					var allSlideItemOnScreenParent=$("#weighted-vest-slider")[0];
					
					if(allSlideItemOnScreenParent.hasAttribute("data-animation")===false){
						recountitemsOnScreen();
        				recountLeftOfItems();
						setTimeout(function () {timeoutresizeWidthOfItems();}, 500);
				        						    	
					}else{
						setTimeout(function (){timeoutresizeWidthOfItems();}, 500);				    	
					}
				}

				function recountitemsOnScreen(){
					var allSlideItemOnScreen=$("#weighted-vest-slider .card-item");
					var itemWidth= parseInt(window.getComputedStyle(allSlideItemOnScreen[0], null).getPropertyValue("width"));
					var rowWidth= parseInt(window.getComputedStyle($("#weighted-vest-slider")[0], null).getPropertyValue("width"));
					var ratio=(rowWidth-(itemWidth*allSlideItemOnScreen.length))/itemWidth;
					
						if(ratio>0.5 && allSlideItemOnScreen[0].hasAttribute("data-change")===false ){
							for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].setAttribute("data-change","in")
							}
							
							
							var newItem=document.createElement("div");
							newItem.classList.add("col-sm-3-sajat", "card-item","classPosProp","classRightMinus","classTransProp");
							console.log(newItem);
							var firstArrayitem=ContainerOflastCardItems.shift();
							newItem.innerHTML=firstArrayitem;
							$("#weighted-vest-slider")[0].appendChild(newItem);

							setTimeout(function (){
								
								var moveingRightProp=parseInt(window.getComputedStyle(newItem, null).getPropertyValue("left"))-
								parseInt(window.getComputedStyle(newItem, null).getPropertyValue("width"));
								newItem.style.left=moveingRightProp+"px";
					    	}, 0);
					    	setTimeout(function (){
			
								for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].removeAttribute("data-change")
								}
					    	}, 1000);
						}
					
				    	if(ratio<-0.5 && allSlideItemOnScreen[0].hasAttribute("data-change")===false ){
				    		console.log(allSlideItemOnScreen[0].hasAttribute("data-change")===false);									
			    			for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].setAttribute("data-change","in")
							}
							console.log(ratio);
				    		var lastRightItem=$("#weighted-vest-slider .card-item")[$("#weighted-vest-slider .card-item").length-1];
				    		var moveingRightProp=parseInt(window.getComputedStyle(lastRightItem, null).getPropertyValue("left"))+
							parseInt(window.getComputedStyle(lastRightItem, null).getPropertyValue("width"));
							
							lastRightItem.style.left=moveingRightProp+"px";

							setTimeout(function(){ 
								var lastRightItem=$("#weighted-vest-slider .card-item")[$("#weighted-vest-slider .card-item").length-1];	
					    		ContainerOflastCardItems.unshift(lastRightItem.innerHTML);
					    		lastRightItem.parentElement.removeChild(lastRightItem);
							 }, 800);
							setTimeout(function (){
	
								for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].removeAttribute("data-change")
								}
						    }, 1000);
				    	}
				}

		}

//------END----------------------------------------------------------------------------------------------------------------------------
}

/*
	ha item rowwidth/width roundup>=length
*/

/*felkesy--------------------------------------------------------------------------------------------------------------*/



		


$(document).ready(function(){
	productslider();


})

// Define Global variables-------------------------------

		var classIdentifier="weightedves";
		var allSlideItemOnScreenParent=$("#weighted-vest-slider")[0];
		var allSlideItem=$("#weighted-vest-slider .card-item");
		var SlideItemHeight=" ";
		var ContainerOflastCardItems=[];
		var controllerRight=$("#controller-right");
		var controllerLeft=$("#controller-left");
		var classLeftMinus=0;
		var classRightMinus=0;

		var allSlideItemOnScreenParentSelector="#weighted-vest-slider";
		var allSlideItemSelector = "#weighted-vest-slider .card-item";
function productslider(a,b,d){

		// Call Functions-------------------------------
		fillInObject()
		defineSlideRowHeight();
		setTimeout(function(){ 
					createOnLoadCssPositionProperties();
					repositionOnWindowResize();
		}, 0);
		controllerLeft[0].addEventListener("click", slideLeft);
		controllerRight[0].addEventListener("click", slideRight);

function RFObj(item){
	var selector="#"+item.id;
	var y=$(x); 
}

	// Define product slider row height-------------------------------
	function defineSlideRowHeight(){
		

	var slideRow=$(allSlideItemOnScreenParentSelector)[0];
	
		SlideItemHeight = parseInt(window.getComputedStyle(allSlideItem[0], null).getPropertyValue("height"));

	var styleTag= document.createElement("style");
		styleTag.type="text/css";
	    styleTag.innerHTML=".slide-row-height{ height:"+SlideItemHeight+"px;}";
		$("head")[0].appendChild(styleTag); 


	    setTimeout(function(){ 
				slideRow.classList.add("slide-row-height");
	     }, 0);
	 }

// Cards dont have enough space put into ContainerOflastCardItems global defined---------------------------------------------------------------------

	function fillInObject(){

		var widthOfallCards=0;
		
		var SlideRowWidth = parseInt(window.getComputedStyle(allSlideItemOnScreenParent, null).getPropertyValue("width"));
	
		for (var i = 0; i<7; i++) {
				
					ThisSlideItemWidth = parseInt(window.getComputedStyle(allSlideItem[i], null).getPropertyValue("width"));
					if(ThisSlideItemWidth+widthOfallCards>SlideRowWidth){

							var elementInnerHtml=allSlideItem[i].innerHTML;
							allSlideItem[i].parentElement.removeChild(allSlideItem[i]);
							ContainerOflastCardItems.push(elementInnerHtml);

					}else{widthOfallCards+=ThisSlideItemWidth;}
			}

		}	


// count position properties of each item on screen---------------------------------------------------------------------------------------


	function createOnLoadCssPositionProperties(){
			
			var ItemWidth=parseInt(window.getComputedStyle(allSlideItem[0], null).getPropertyValue("width"));
			classLeftMinus=0-ItemWidth;
			classRightMinus=ItemWidth*allSlideItem.length;


			var styleTagContinous=document.createElement("style");
			styleTagContinous.type="text/css";
			styleTagContinous.id="cont";
			styleTagContinous.innerHTML+=".classPosProp{position: absolute;}";
			styleTagContinous.innerHTML+=".classTransProp{transition: all 1s 0s;}";
			$("head")[0].appendChild(styleTagContinous);

			var styleTagDin=document.createElement("style");
			styleTagDin.type="text/css";
			styleTagDin.id="dinamic";
			styleTagDin.innerHTML+=".classLeftMinus{left: "+classLeftMinus+"px;}";
			styleTagDin.innerHTML+=".classRightMinus{left: "+classRightMinus+"px;}";
			$("head")[0].appendChild(styleTagDin);
		

			for(i=0; i<=allSlideItem.length-1; i++){

					var leftProp=parseInt(window.getComputedStyle(allSlideItem[i], null).getPropertyValue("width"))*(i);

					styleTagDin.innerHTML+="[data-left='"+i+"']{left:"+leftProp+"px;}";

					allSlideItem[i].classList.add("classPosProp","classTransProp");
					allSlideItem[i].setAttribute("data-left",i);
			}
	}

// Slide right---------------------------------------------------------------------------------------
		

		function slideRight(){
			


			var allSlideItemOnScreen= $(allSlideItemSelector);
			
			if(allSlideItemOnScreenParent.hasAttribute("data-animation")===false){
				allSlideItemOnScreenParent.setAttribute("data-animation","in")
				getElementFromArray();
				setTimeout(function(){ moveRight(); }, 0);
				setTimeout(function(){ dismissLastItem(); }, 1200);
			}

				function moveRight(){
					var allSlideItemOnScreen= $(allSlideItemSelector);

					for(i=0; i<=allSlideItemOnScreen.length-1; i++){

					var moveingRightProp=parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("left"))+
					parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("width"));

					allSlideItemOnScreen[i].style.left=moveingRightProp+"px";
					}
				}

			function getElementFromArray(){

				var newItem=document.createElement("div");
				newItem.classList.add("col-sm-3-sajat", "card-item","classPosProp","classLeftMinus","classTransProp");
				
				var lastArrayitem=ContainerOflastCardItems.pop();
				newItem.innerHTML=lastArrayitem;
				allSlideItemOnScreenParent.insertBefore(newItem,allSlideItemOnScreen[0]);
			}

			function dismissLastItem(){

				var lastRightItem=$(allSlideItemSelector)[$(allSlideItemSelector).length-1];
				ContainerOflastCardItems.unshift(lastRightItem.innerHTML);
				$(allSlideItemOnScreenParentSelector)[0].removeChild(lastRightItem);

				allSlideItemOnScreenParent.removeAttribute("data-animation");
			}
		}


// Slide Left---------------------------------------------------------------------------------------
		
		function slideLeft(){
			var allSlideItemOnScreenParent=$(allSlideItemOnScreenParentSelector)[0];

			if(allSlideItemOnScreenParent.hasAttribute("data-animation")===false){
				
				allSlideItemOnScreenParent.setAttribute("data-animation","in")
					
				getElementFromArray();
				moveLeft();
			 
			setTimeout(function(){ 
				dismissLastItem(); 
			}, 1200);
			}else{console.log("nyasgem")}
			
			function moveLeft(){

				var allSlideItemOnScreen=$(allSlideItemSelector);
				for(i=0; i<=allSlideItemOnScreen.length-1; i++){

						var moveingRightProp=parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("left"))-
						parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("width"));

						allSlideItemOnScreen[i].style.left=moveingRightProp+"px";
				}
			}

			function getElementFromArray(){

				var newItem=document.createElement("div");
				newItem.classList.add("col-sm-3-sajat", "card-item","classPosProp","classRightMinus","classTransProp");
				
				var firstArrayitem=ContainerOflastCardItems.shift();
				newItem.innerHTML=firstArrayitem;
				$(allSlideItemOnScreenParentSelector)[0].appendChild(newItem);
			}

			function dismissLastItem(){
				var allSlideItemOnScreenParent=$(allSlideItemOnScreenParentSelector)[0];
				var lastLeftItem=$(allSlideItemSelector)[0];
				ContainerOflastCardItems.push(lastLeftItem.innerHTML);
				allSlideItemOnScreenParent.removeChild(lastLeftItem);
					
				allSlideItemOnScreenParent.removeAttribute("data-animation");
				
			}
		}


/* manage width on win resize--------------------------------------------------------------------------------------------------*/

		
		function repositionOnWindowResize(){

			window.addEventListener("resize", function(){recountLeftOfItems();});
			window.addEventListener("resize", function(){recountitemsOnScreen();});
			timeoutresizeWidthOfItems();

				function recountLeftOfItems(){
					var allSlideItemOnScreen=$(allSlideItemSelector);
					var ItemWidth=parseInt(window.getComputedStyle(allSlideItemOnScreen[0], null).getPropertyValue("width"));
					var rowWidth= parseInt(window.getComputedStyle($(allSlideItemOnScreenParentSelector)[0], null).getPropertyValue("width"));
					classLeftMinus=0-ItemWidth;
					classRightMinus=rowWidth+10;

					
					$("head #dinamic")[0].innerHTML=".classLeftMinus{left: "+classLeftMinus+"px;}";
					$("head #dinamic")[0].innerHTML+=".classRightMinus{left: "+classRightMinus+"px;}";

					for(i=0; i<=allSlideItemOnScreen.length-1; i++){
						var width = parseInt(window.getComputedStyle(allSlideItemOnScreen[i], null).getPropertyValue("width"));
						var leftPropOnResize=width*i;

						allSlideItemOnScreen[i].style.left=leftPropOnResize+"px";
						
					}
				}

				function timeoutresizeWidthOfItems(){
					var allSlideItemOnScreenParent=$(allSlideItemOnScreenParentSelector)[0];
					
					if(allSlideItemOnScreenParent.hasAttribute("data-animation")===false){
						recountitemsOnScreen();
        				recountLeftOfItems();
						setTimeout(function () {timeoutresizeWidthOfItems();}, 500);
				        						    	
					}else{
						setTimeout(function (){timeoutresizeWidthOfItems();}, 500);				    	
					}
				}

				function recountitemsOnScreen(){
					var allSlideItemOnScreen=$(allSlideItemSelector);
					var itemWidth= parseInt(window.getComputedStyle(allSlideItemOnScreen[0], null).getPropertyValue("width"));
					var rowWidth= parseInt(window.getComputedStyle($(allSlideItemOnScreenParentSelector)[0], null).getPropertyValue("width"));
					var ratio=(rowWidth-(itemWidth*allSlideItemOnScreen.length))/itemWidth;
					
						if(ratio>0.5 && allSlideItemOnScreen[0].hasAttribute("data-change")===false ){
							for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].setAttribute("data-change","in")
							}
							
							
							var newItem=document.createElement("div");
							newItem.classList.add("col-sm-3-sajat", "card-item","classPosProp","classRightMinus","classTransProp");
							console.log(newItem);
							var firstArrayitem=ContainerOflastCardItems.shift();
							newItem.innerHTML=firstArrayitem;
							$(allSlideItemOnScreenParentSelector)[0].appendChild(newItem);

							setTimeout(function (){
								
								var moveingRightProp=parseInt(window.getComputedStyle(newItem, null).getPropertyValue("left"))-
								parseInt(window.getComputedStyle(newItem, null).getPropertyValue("width"));
								newItem.style.left=moveingRightProp+"px";
					    	}, 0);
					    	setTimeout(function (){
			
								for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].removeAttribute("data-change")
								}
					    	}, 1000);
						}
					
				    	if(ratio<-0.5 && allSlideItemOnScreen[0].hasAttribute("data-change")===false ){
				    		console.log(allSlideItemOnScreen[0].hasAttribute("data-change")===false);									
			    			for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].setAttribute("data-change","in")
							}
							console.log(ratio);
				    		var lastRightItem=$(allSlideItemSelector)[$(allSlideItemSelector).length-1];
				    		var moveingRightProp=parseInt(window.getComputedStyle(lastRightItem, null).getPropertyValue("left"))+
							parseInt(window.getComputedStyle(lastRightItem, null).getPropertyValue("width"));
							
							lastRightItem.style.left=moveingRightProp+"px";

							setTimeout(function(){ 
								var lastRightItem=$(allSlideItemSelector)[$(allSlideItemSelector).length-1];	
					    		ContainerOflastCardItems.unshift(lastRightItem.innerHTML);
					    		lastRightItem.parentElement.removeChild(lastRightItem);
							 }, 800);
							setTimeout(function (){
	
								for(i=0; i<=allSlideItemOnScreen.length-1; i++){
								allSlideItemOnScreen[i].removeAttribute("data-change")
								}
						    }, 1000);
				    	}
				}

		}



//------END----------------------------------------------------------------------------------------------------------------------------
}

/*
	ha item rowwidth/width roundup>=length
*/