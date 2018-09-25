(function(){

var timeField=document.querySelector("div.time");
var Time=new Date();
var hours= Time.getHours();

	function updateTime(){
		Time=new Date();

		if(hours>12){
			hours-=12;
		}

		var sep=":";

		if(Time.getSeconds()%2===1){
			sep=" ";
		}
		var Zeit=hours + sep+ Time.getMinutes() +sep+Time.getSeconds();
		timeField.innerHTML=Zeit;
	
	}


setInterval(updateTime, 1000);

})();

/*

time
letrehozni a divet
behuzni az idot hour min sec
hozzaadni a divhez
frissites
separator

*/