// Define an interface for creating an object, but let subclasses decide which 
// class to instantiate. Factory Method lets a class defer instantiation to subclasses.
// Typically the return value from a factory is known as the Product
// there are more kind of facotries:
	// Simple Factory 
	// Factory Method
	// Abstract Factory

(function(){

	function CricleFactory(){
		this.create = function(colorRequest){
			if (colorRequest === "red") return redCircle();
			else if (colorRequest === "blue") return blueCircle();
			else return greenCircle();
		}
	}

	let basicStyles = "width: 100px; height: 100px; border-radius: 50%;"

	let redCircle = function(){
		let redCircle = document.createElement('div');
		let styles = basicStyles + " " + "background: red;";
		redCircle.setAttribute('style', styles);
		return redCircle;
	}

	let greenCircle = function(){
		let greenCircle = document.createElement('div');
		let styles = basicStyles + " " + "background: darkgreen;";
		greenCircle.setAttribute('style', styles);
		return greenCircle;
	}

	let blueCircle = function(){
		let blueCircle = document.createElement('div');
		let styles = basicStyles + " " + "background: skyblue;";
		blueCircle.setAttribute("style", styles);
		return blueCircle;
	}

	let createCircleSingletonAndFactory = (function(){
		
		// storing the object
		let instanceOfObj;

		// creating the object
		function init(){
			circlesArr = [];
			randomNumber = ( Math.random() ).toString();
			circleFactory = new CricleFactory();

			function createCircle(top, left, color){
				console.log(color);
				let circle = circleFactory.create(color);
		   		circle.innerHTML = `<p style="color:white;">${randomNumber}<p>`   
		   		circle = positionCircle(circle, top, left);
		   		return circle;
			}

			function positionCircle(circle, top, left){
				let currentStyles = circle.getAttribute('style');
				let position = currentStyles + " " + `position: absolute; top:${top}px; left:${left}px`;
				circle.setAttribute("style", currentStyles + position); 
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
		console.log(event.keyCode);
		let top = Math.floor(Math.random() * 600);
		let left = Math.floor(Math.random() * 600);

		if (event.key === 'Enter') { // 13 is enter
			event.preventDefault();
			let userApi = createCircleSingletonAndFactory.getObject();
			let circle = userApi.createCircle(top, left, 'blue');
			userApi.appendCircle(circle, advertArea);
		}

		if (event.keyCode === 97) { // 13 is enter
			event.preventDefault();
			let userApi = createCircleSingletonAndFactory.getObject();
			let circle = userApi.createCircle(top, left, 'red');
			userApi.appendCircle(circle, advertArea);
		}

	});


	advertArea.addEventListener('click', function(event){
		console.log('click');
		let top = event.pageY - 50;
		let left = event.pageX - 50;
		let userApiSecond = createCircleSingletonAndFactory.getObject();
		let circle = userApiSecond.createCircle(top, left);
		userApiSecond.appendCircle(circle, this);

	});

}()); // anonymus	








