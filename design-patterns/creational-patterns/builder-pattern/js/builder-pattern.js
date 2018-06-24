// The builder pattern has at least 3 parts:
// 1. the brain - the abstractfactory which calls the requested builder
// 2. the constructor functions which are defining the possible products
// 3. The builders: The builders are creating from the constructor functions specific products.
// They create at first a new object from the constructor
// then they modify the base object - to be specific to the builder - 
// buy the exposed methods of the new object.
// by the way the product has 2 kind of features:
  	// features which are decided buy the builder (a red circle 
  	// needs to be red.. no question) => these are done on call of the builder
  	// features which are decided buy user (where the red circle 
  	// should be placed on the website) => these are done buy exposed methods of the builder
  	// to the singleton... 


//Builder design pattern
(function(){

	let CircleAbstractFactory =  function(){

		this.registeredTypes = {};

		this.create = function(type){
			console.log(type);
			console.log(this.registeredTypes);
			if(this.registeredTypes[type]){
				let circle = new this.registeredTypes[type]();
				console.log(circle);
				return circle;
			}
		}

		this.register = function(type, cls){
			console.log('nemfut');
			if(cls.prototype.getCircle){
				console.log(this.registeredTypes);
				this.registeredTypes[type] = cls;
			}
		}
	}

	function Circle(){		
		this.item = createCircle();

		function createCircle(){
			let circle = document.createElement('div');
			let styles = "width: 100px; height: 100px; border-radius: 50%;";
			circle.setAttribute('style', styles);
			return circle;
		}
	}

	Circle.prototype.init = function(color){
		this.item.style.background = color;
	}

	Circle.prototype.innerText = function(innerText){
		this.item.innerHTML = `<p style="color:white;">${innerText}<p>`   
	}
	
	Circle.prototype.size = function(circleSize){
		this.item.style.width = circleSize + "px";
		this.item.style.height = circleSize + "px";
	}

	Circle.prototype.position = function(left, top){
		let currentStyles = this.item.getAttribute('style');
		let position = `position: absolute; top:${top}px; left:${left}px`;
		this.item.setAttribute("style", currentStyles + position); 
	}

	Circle.prototype.getCircle = function(){
		return this.item;
	}

	function redCircleBuilder(){
		this.item = new Circle();
		this.item.init('red');
		this.item.size('150');
	}

	redCircleBuilder.prototype.position = function(left, top){
		this.item.position(left, top);
	}

	redCircleBuilder.prototype.innerText = function(innerText){
		this.item.innerText(innerText);
	}

	redCircleBuilder.prototype.getCircle = function(){
		return this.item.item;
	}

	function greenCircleBuilder(){
		this.item = new Circle();
		this.item.init('darkgreen');
		this.item.size('90');
	}

	greenCircleBuilder.prototype.position = function(left, top){
		this.item.position(left, top);
	}

	greenCircleBuilder.prototype.innerText = function(innerText){
		this.item.innerText(innerText);
	}

	greenCircleBuilder.prototype.getCircle = function(){
		return this.item.item;
	}

	function blueCircleBuilder(){
		this.item = new Circle();
		this.item.init('skyblue');
		this.item.size('110');
	}

	blueCircleBuilder.prototype.position = function(left, top){
		this.item.position(left, top);
	}

	blueCircleBuilder.prototype.innerText = function(innerText){
		this.item.innerText(innerText);
	}

	blueCircleBuilder.prototype.getCircle = function(){
		return this.item.item;
	}

	let createCircleSingleton = (function(){
		
		// storing the object
		let instanceOfObj;

		// creating the object
		function init(){
			console.log("fut");
			let circlesArr = [];
			let randomNumber = ( Math.random() ).toString();
			let circleFactory = new CircleAbstractFactory();
			console.log(circleFactory);

			circleFactory.register('blue', blueCircleBuilder);
			circleFactory.register('green', greenCircleBuilder);
			circleFactory.register('red', redCircleBuilder);

			function createCircle(top, left, type, innerText){
				console.log(type);
				console.log(circleFactory);
				let circle = circleFactory.create(type)
				console.log(circle);
				console.log(Boolean(circle.position));
				circle.innerText =  innerText
		   		circle.position(left, top);
				console.log(circle.getCircle());
		   		return circle.getCircle();
			}

			function appendCircle(circle, that){
				console.log(circle);
				circlesArr.push(circle);
				console.log(that);
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
		if (event.key === 'Enter') { // 13 is enter
			event.preventDefault();
			let top = Math.floor(Math.random() * 600);
			let left = Math.floor(Math.random() * 600);
			let userApi = createCircleSingleton.getObject();
			let circle = userApi.createCircle(top, left, 'green', 'green');
			userApi.appendCircle(circle, advertArea);
		}

		if (event.keyCode === 97) { // 13 is enter
			event.preventDefault();
			let top = Math.floor(Math.random() * 600);
			let left = Math.floor(Math.random() * 600);
			let userApi = createCircleSingleton.getObject();
			let circle = userApi.createCircle(top, left, 'red', 'red');
			userApi.appendCircle(circle, advertArea);
		}

	});


	advertArea.addEventListener('click', function(event){
		let top = event.pageY - 50;
		let left = event.pageX - 50;
		let userApiSecond = createCircleSingleton.getObject();
		let circle = userApiSecond.createCircle(top, left, 'blue', 'blue');
		console.log(circle);
		userApiSecond.appendCircle(circle, this);

	});

}()); // anonymus	








