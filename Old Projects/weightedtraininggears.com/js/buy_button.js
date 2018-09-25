 document.addEventListener("DOMContentLoaded", function(){ 

 	var buttonToAnimate=$("#buy-button")[0];
 	buttonToAnimate.style.right="-172px";
 
    window.addEventListener("scroll", function(){ highlightButtonToAnimate(buttonToAnimate)});
    window.addEventListener("scroll", function(){ pullBackButtonToAnimate(buttonToAnimate)});


/* highlightButtonToAnimate-----------------------------------------------------------*/

    function highlightButtonToAnimate(objectToObserve){

      if(window.pageYOffset>=500 && objectToObserve.hasAttribute("data-animation")===false){
      	objectToObserve.setAttribute("data-animation","in");

      	if(window.getComputedStyle(objectToObserve, null).getPropertyValue("transition")==="all 0s ease 0s"){
      		objectToObserve.style.transition = "all 0.5s";
      		console.log(window.getComputedStyle(objectToObserve, null).getPropertyValue("transition"));
      	}

      	objectToObserve.style.right="100px";
      	checkIfInAnimation();

      	function checkIfInAnimation(){
	      	if(window.getComputedStyle(objectToObserve, null).getPropertyValue("right")==="100px"){
	      		objectToObserve.removeAttribute("data-animation");
	      		console.log(objectToObserve.hasAttribute("data-animation"));
	      		pullBackButtonToAnimate(objectToObserve);
	      	}else{
	      		setTimeout(function(){ checkIfInAnimation(); }, 10);

	      	}	
      	}

      };


    }  

/* pullBackButtonToAnimate-----------------------------------------------------------*/

     function pullBackButtonToAnimate(objectToObserve){

      if(window.pageYOffset<=500 && objectToObserve.hasAttribute("data-animation")===false){
      		objectToObserve.setAttribute("data-animation","in");

      		if(window.getComputedStyle(objectToObserve, null).getPropertyValue("transition")==="all 0s ease 0s"){
      		objectToObserve.style.transition = "all 0.5s";
      		console.log(window.getComputedStyle(objectToObserve, null).getPropertyValue("transition"));
      	}

      	objectToObserve.style.right="-172px";
      	checkIfInAnimation();
      };

      function checkIfInAnimation(){
	      	if(window.getComputedStyle(objectToObserve, null).getPropertyValue("right")==="-172px"){
	      		objectToObserve.removeAttribute("data-animation");
	      		console.log(objectToObserve.hasAttribute("data-animation"));
	      		highlightButtonToAnimate(objectToObserve);
	      	}else{setTimeout(function(){ checkIfInAnimation(); }, 10);}	
      	}

    }  
  

 });