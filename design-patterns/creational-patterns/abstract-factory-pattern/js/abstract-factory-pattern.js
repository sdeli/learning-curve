// Tha abstract factory is kind of the same as the normal factory but:
// it doesnt reference diractly what it is return
// you need to register in the factory function the products you want to get

(function(){

	function CricleAbstractFactory(){
		this.types = {};

		this.create = function(type){
			console.log(type);
			console.log(this.types[type]);
			return new this.types[type]().create();
		}

		this.register = function(type, cls){
			if (cls.prototype.create) {
				this.types[type] = cls;
				console.log(this.types[type]);
				console.log(this.types);
			}

		}
	}

	let basicStyles = "width: 100px; height: 100px; border-radius: 50%;"

	function redCircle(){
		
	}

	redCircle.prototype.create = function(){
		let redCircle = document.createElement('div');
		let styles = basicStyles + " " + "background: red;";
		redCircle.setAttribute('style', styles);
		this.item = redCircle;
		return this;
	}

	function blueCircle(){
		
	}

	blueCircle.prototype.create = function(){
		let blueCircle = document.createElement('div');
		let styles = basicStyles + " " + "background: skyblue;";
		blueCircle.setAttribute('style', styles);
		this.item = blueCircle;
		return this;
	}

	function greenCircle(){
		
	}

	greenCircle.prototype.create = function(){
		let greenCircle = document.createElement('div');
		let styles = basicStyles + " " + "background: darkgreen;";
		greenCircle.setAttribute('style', styles);
		this.item = greenCircle;
		return this;
	}

	let createCircleSingletonAndFactory = (function(){
		
		// storing the object
		let instanceOfObj;

		// creating the object
		function init(){
			circlesArr = [];
			randomNumber = ( Math.random() ).toString();
			circleFactory = new CricleAbstractFactory();
			//registering tipes into the new circlefactory we will need
			circleFactory.register('blue', blueCircle);
			circleFactory.register('red', redCircle);
			circleFactory.register('green', greenCircle);

			function createCircle(top, left, type){
				console.log(type);
				let circle = circleFactory.create(type).item;
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
		let circle = userApiSecond.createCircle(top, left, 'green');
		userApiSecond.appendCircle(circle, this);

	});

}()); // anonymus	








