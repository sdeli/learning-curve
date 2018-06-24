

var tooltipObject={
	tooltipId:0,

	getLinks : function(){
		var links=document.getElementsByTagName("A");

		for( i=0; i<links.length; i++){
			if(links[i].title){
				links[i].addEventListener("mouseover", tooltipObject.show);
				links[i].addEventListener("mouseout", tooltipObject.hide);
			} else console.log("nem");
		}
		
	},
	show : function(event){
			 spanElem=document.createElement("span");
			spanElem.id="tooltip" + event.target.title ;
			spanElemId=spanElem.id;
			spanElem.innerHTML=event.target.title;
			console.log(spanElemId + " spanElemId");

			
			event.target.appendChild(spanElem);
			var spanStyle=document.getElementById(spanElemId);
			spanStyle.style.zIndex="100";
			spanStyle.style.background="yellow";
			spanStyle.style.position="absolute";
			spanStyle.style.top="0";
			spanStyle.style.left="0";
			spanStyle.style.padding="5px 10px";
			spanStyle.style.position="absolute";
			spanStyle.style.background="white";
			spanStyle.style.color="#535663";
			spanStyle.style.borderRadius="5px";
			

	},
	hide : function(event){
		
		hideElement=event.target.childNodes;
		console.log(hideElement);
		for (var i=0; i<hideElement.length;i++){
			if (hideElement[i].tagName==="SPAN"){
				
				hideElement[i].parentNode.removeChild(hideElement[i]); 
			}
		}
	}
}


window.addEventListener("load",tooltipObject.getLinks);


