(function(){
"use strict";

	var imgs = document.querySelectorAll(".carousel img"),
	 i=0,
	 c=0;

document.addEventListener("DOMContentLoaded", function(event) {
    
		imgs[2].style.display="none";
		imgs[1].style.display="none";

		setInterval(carousel, 2000);

		function carousel(){
			if (i===imgs.length) {
				i=0;
			}
			var t=(i===0) ? t=2:t=i-1;
			if (c===0) {t=0;}
			imgs[t].style.display="none";
			imgs[i].style.display="block";

			i++;
			c++;
			
		}
  });

})();


/*

carousel
create a div for
put imgs
disappear imgs for page loaded
set interval appear img i disappear img t

*/