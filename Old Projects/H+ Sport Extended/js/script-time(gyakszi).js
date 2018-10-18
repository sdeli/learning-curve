(function(){
"use strict";
	var p = document.querySelector(".time p");
	p.parentNode.removeChild(p);

	var myNodeTime=document.querySelector(".time");

	var myNodeDatum=document.createElement("div");
	myNodeDatum.id="datum";

	var month=new Date().getMonth()+1;
	myNodeDatum.innerHTML= new Date().getFullYear()+ " " + month + " " + new Date().getDay();
	myNodeTime.appendChild(myNodeDatum);

	var myNodeClock=document.createElement("div");
	myNodeClock.id="clock";
	myNodeTime.appendChild(myNodeClock);

	setInterval(updateTime, 1000);
	function updateTime(){
		var time= new Date(); 

		if (time.getHours()>12) {
			var hour = time.getHours() - 12;
		}

		var sep=":";
		if (time.getSeconds()%2===1) {
			var sep=" ";
		}

		myNodeClock.innerHTML=hour + sep + time.getMinutes() + sep + time.getSeconds();
	}

})();

/*feladat

behuzni hour sec
beirni
elintezni az am pm
sep

ora

*/