(function(){

	document.addEventListener("DOMContentLoaded", function(){
		var myNodeTimeField= document.querySelector(".time");

		setInterval(updateTime, 1000);

		function updateTime(){

		var myNodeTime= new Date();

		if (myNodeTime.getHours()>12) {
			var ampm="AM";
		}else var ampm="PM";

		if (myNodeTime.getHours()>12) {
			var hours=myNodeTime.getHours()-12;
		}

		var sep=":"
		if (myNodeTime.getSeconds()%2===1) {
		 sep=" ";
		}

		myNodeTimeField.innerHTML=ampm +sep+hours +sep+myNodeTime.getMinutes() +sep+myNodeTime.getSeconds();
		}
	});

})();

/* Tasks:

get hour and minutes and seconds, fill into a div, arrange with am and pm and midnight/ continuous refreshin */