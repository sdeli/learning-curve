(function(){
	"use strict";

	var osszeg=0;
	document.addEventListener("DOMContentLoaded", function(){

		var selectBtn=document.getElementById("select");
		var submitBtn=document.querySelector("input[type='submit']");
		submitBtn.disabled=true;

		selectBtn.addEventListener("change", function(){
			if(selectBtn.value===""){
				submitBtn.disabled=true;
			}else submitBtn.disabled=false;

			
		})
		submitBtn.addEventListener("click", function(event){
				event.preventDefault()

			var priseOverlay= document.createElement("div");
				priseOverlay.id=("prise-overlay");
				document.querySelector("div[name='estimate-field']").appendChild(priseOverlay);

			var shopItem1=parseInt(document.getElementById("item-1").value,10)||0,
				shopItem2=parseInt(document.getElementById("item-2").value,10)||0,
				shopItem3=parseInt(document.getElementById("item-3").value,10)||0,
				shopItem4=parseInt(document.getElementById("item-4").value,10)||0,
				shopItem5=parseInt(document.getElementById("item-5").value,10)||0,
				shopItem6=parseInt(document.getElementById("item-6").value,10)||0,
				shopItem7=parseInt(document.getElementById("item-7").value,10)||0,
				shopItem8=parseInt(document.getElementById("item-8").value,10)||0;

			var radioValue=document.querySelector("input[type='radio']:checked").value;	
			var postaKtsg=0;
				
			switch(radioValue) {
				case "HDL":
				postaKtsg=1;
				break;

				case "GLS":
				postaKtsg=2;
				break;

				case "NHL":
				postaKtsg=3;
				break;
			}
			var amount= shopItem1+shopItem2+shopItem3+shopItem4+shopItem5+shopItem6+shopItem7+shopItem8;
			osszeg=((shopItem2*50)+postaKtsg)+((shopItem3*50)+postaKtsg)+((shopItem4*50)+postaKtsg)+((shopItem5*50)+postaKtsg)+
			((shopItem6*50)+postaKtsg)+((shopItem7*50)+postaKtsg)+((shopItem8*50)+postaKtsg);
			console.log(radioValue +" "+ postaKtsg+ " " +osszeg );
			
			var pElement=document.createElement("p");
			var node= document.createTextNode("Full Prise: "+osszeg+"  " + "Amount of Products: "+amount);
			pElement.appendChild(node);

			priseOverlay.appendChild(pElement);

			priseOverlay.style.display="inline";
			priseOverlay.firstChild.style.fontWeight="bold";
			priseOverlay.firstChild.style.fontSize="20px";
			priseOverlay.firstChild.style.paddingTop="10px";
			priseOverlay.firstChild.style.color="grey";
		})

	})


})();

/*Szamologep

- disable estimate, inable estimate addeventlistener /
- Behhuzni az inputok ertekeit add eventlistener submit buttonre
- ha gls switch
- kiszamolni darab * ertek + postaktsg
osszeg= db*ar+pktsg
hozzadni divet kiirni mindent

phot library

tunjon el a col-md 4 reklam

contact oldalon api

idot mutassa fixeden
*/