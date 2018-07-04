(function(){

	let submitForm = document.querySelectorAll('#todo-form button')[0];
	let inputField = document.querySelectorAll('#todo-form input')[0];
	let appendToNode = document.querySelectorAll('#todo-table ul')[0];

	submitForm.addEventListener('click', function(){
		let JsonForPost = createJsonForPost(inputField.value);
		if(JsonForPost != false){
			appendNewTask(appendToNode, JsonForPost);
		} else {
			return false;
		}
	});

	function appendNewTask(appendToNode, JsonForPost){
		console.log(JsonForPost.value);
		xhttp = new XMLHttpRequest();

		xhttp.open('POST', '/add-task', true);

		xhttp.setRequestHeader("Content-Type", "application/json");

		xhttp.onload = function(){
			console.log(this.responseText);
			location.reload();
			/*let newLiTask = document.createElement('li');
			newLiTask.innerHTML = newTask.value;
			console.log(newLiTask);
			appendToNode.appendChild(newLiTask);*/

		}

		xhttp.send(JsonForPost);
	} // END appendNewTask

	function createJsonForPost(inputFieldVal){

		if(inputFieldVal != ""){

			let idNumber = Math.floor(Math.random() * 1000) + 1;

			let inputFieldValueObj = {
				todoitem : inputField.value,
				id : idNumber
			}

			let jsonInputValue = JSON.stringify(inputFieldValueObj);
			return jsonInputValue;

		} else {

			alert('enter a task')
			return false;

		} // else

	}

}());