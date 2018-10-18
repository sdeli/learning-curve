//

var findLinks=(function(){

	//Define variables ---------------------------
	var anchors=document.getElementsByTagName("a");
	var anchorsWithChildren=[];
	//Define variables END------------------------

	function write(number,i){
		
		if(typeof i==="undefined"){var i=0}//if
		if(anchors[i].href.length===0){continue;}//if

		console.log("kovetkezo"+" "+i);
		console.log(anchors[i]);

		if(typeof number==="number" && (number===1 || number===2)){console.log(anchors[i].href);}//if
		
		if(anchors[i].childElementCount===0){
			console.log("textContent: "+anchors[i].innerHTML);
		}else{
			anchorsWithChildren.push(anchors[i]);
			console.log("haschildren ");
		}//else
		i++
		if(i<anchors.length){write(i);}//if
	}//write(number,i)----------------------------------------------------


	function withChildren(content){
		for(var i=0; i<anchors.length; i++){
			console.log(anchors[i]);
			if(content==="content"){console.log(anchors[i].innerHTML);}//if
		}//for
	}//withChildren(content)-----------------------------------------------

	function innerLinks(extension){
		for(var i=0; i<anchors.length; i++){

			if(anchors[i].indexOf("/")===0){
				console.log(anchors[i]);
				continue;
			}//if
			if(anchors[i].indexOf("http://")===0){
				console.log(anchors[i]);
				continue;
			}//if
			if(typeof extension==="string"){
				var varia=anchors[i].indexOf(extension)
				var varib=window.location.href.indexOf(extension)
				var varic=window.location.href.indexOf("www.")

				var varid=window.location.href.slice(varic,varib+4)
				console.log(varid);

				if(anchors[i].indexOf(varid)){
					console.log(anchors[i]);
				}
			}//if	

		}//for
	}//innerLinks(extension)--------------------------------------------

	return {
		anchorsWithChildren:anchorsWithChildren,
		write: function(number,i){write(number,i)},
		withChildren: function(content){withChildren(content)}
	}//return
//END-----------------------------------------------------------------------------------------------
})();//var findLinks=(function())();