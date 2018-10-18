// The singleton is for managing object creation
// it ensures that from the object always just ONE isntance will be created
// if the singleton will be called again it returns reference to the existing object

// BARE BONS OF SINGLETON
(function(){
	let singleton = (function(){
	
		let instanceOfObj;

		// initalizing the motor behind the user interface
		function init(){
			// object creation here
			return {
				single : "this is the only and the same object which will be created and returned",
				uniqeNumber : Math.random()
			};	
		}

		return {
			getObject : function(){
				// lazy loading the object
				if(!instanceOfObj){
					instanceOfObj = init();
					return instanceOfObj
				} else return instanceOfObj;
			}
		}
		
	}());	
});

// SINGLETON FOR CREATING CIRCLES IN .advert ON CLICK
// ${event.pageY - 50}
(function(){

	let createCircleSingleton = (function(){
		
		// storing the object
		let instanceOfObj;

		// creating the object
		function init(){
			circlesArr = [];
			randomNumber = ( Math.random() ).toString();
			console.log(typeof randomNumber);

			function createCircle(top, left){
				let circle = document.createElement('div');
		   		circle.innerHTML = `<p style="color:white;">${randomNumber}<p>`   

		   		circle = positionAndStyleCircle(circle, top, left);
		   		return circle;
			}

			function positionAndStyleCircle(circle, top, left){
				let stylesAndPosition = "width: 100px; height: 100px; background: red; border-radius: 50%;";
					stylesAndPosition += `position: absolute; top:${top}px; left:${left}px`;
				circle.setAttribute("style", stylesAndPosition); 
				return circle;
			}

			function appendCircle(circle, that){
				circlesArr.push(circle);
				that.appendChild(circle);
			}
			
			return {
				circlesArr : circlesArr,
				createCircle : createCircle,
				appendCircle : appendCircle
			};
		}

		// lazy loading revealing interface for the object creation or single return
		return {
			getObject : function(){
				// lazy loading the object
				if(!instanceOfObj){
					instanceOfObj = init();
					return instanceOfObj
				} else return instanceOfObj;
			}
		}
		
	}()); // createCircleSingleton

	let advertArea = document.querySelectorAll('.advert')[0];
	window.addEventListener('keypress', function(event){
		console.log('enter');
		if (event.key === 'Enter') { // 13 is enter
			event.preventDefault();
			let top = Math.floor(Math.random() * 600);
			let left = Math.floor(Math.random() * 600);
			let userApi = createCircleSingleton.getObject();
			let circle = userApi.createCircle(top, left);
			userApi.appendCircle(circle, advertArea);
		}

	});


	advertArea.addEventListener('click', function(event){
		console.log('click');
		let top = event.pageY - 50;
		let left = event.pageX - 50;
		let userApiSecond = createCircleSingleton.getObject();
		let circle = userApiSecond.createCircle(top, left);
		userApiSecond.appendCircle(circle, this);

	});

}()); // anonymus	








