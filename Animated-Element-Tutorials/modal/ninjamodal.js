(function(){


	var ModalObject={

		triggerButton: document.querySelectorAll("#modal-trigger")[0],

		pushBackButton: document.querySelectorAll("#modal-push-back")[0],

		modalWindow: document.querySelectorAll("#modal-pop-up")[0],

		movementFunctions: {

				dropDownFunction: function(){
					ModalObject.triggerButton.addEventListener("click", function(){

						if( ModalObject.modalWindow.hasAttribute("class")===false && ModalObject.movementFunctions.checkValues()<=-400 ){

							ModalObject.modalWindow.setAttribute("class","modal-pop-up-animation");

							setTimeout(function(){ 
									ModalObject.modalWindow.style.top="50px"; 
									ModalObject.modalWindow.removeAttribute("class");
								}, 500);

						}else{console.log("nyasgem")};

					});
				},

				pushBackFunction: function(){
					ModalObject.pushBackButton.addEventListener("click", function(){

						var checker= ModalObject.movementFunctions.checkValues();

						if(ModalObject.modalWindow.hasAttribute("class")===false && checker<=50 && checker>=50){

							ModalObject.modalWindow.setAttribute("class","modal-push-back-animation");

							setTimeout(function(){
							 ModalObject.modalWindow.style.top="-400px"; 
							 ModalObject.modalWindow.removeAttribute("class");
							}, 1000);
							
						}else{console.log("nyasgem")};
		
					});
				},

				checkValues: function(){
					 var theCSSprop = window.getComputedStyle(ModalObject.modalWindow, null).getPropertyValue("top");
					 return parseInt(theCSSprop);
				}
		}

	}
document.addEventListener("DOMContentLoaded",ModalObject.movementFunctions.dropDownFunction() );
document.addEventListener("DOMContentLoaded",ModalObject.movementFunctions.pushBackFunction() );
document.addEventListener("DOMContentLoaded",function(){ console.log(ModalObject.movementFunctions.checkValues()) });
document.addEventListener("DOMContentLoaded",function(){ console.log(typeof ModalObject.movementFunctions.checkValues()) });

}())