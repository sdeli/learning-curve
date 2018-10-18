 

 $(window).loaded(function(){;

 var widthmuted="";
 var heightmuted="";

  mutedvidwidth();
  window.addEventListener("resize", function(){ mutedvidwidth();});

	function mutedvidwidth(){
	  var mutedvidiContainer=$("#mutedvidi")[0];
	  var widthmuted = parseInt(window.getComputedStyle(mutedvidiContainer, null).getPropertyValue("width"));
	  $('[data-mute="mutedvidi"]')[0];

	}



 })