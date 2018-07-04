
 (function(){
 	
 	let taskLiItems = document.querySelectorAll('li');

 	taskLiItems.forEach(function(item,index){
 		item.addEventListener('click', function(){
 			taskLiInnerHtmlJson = JSON.stringify({
 				todoitem : item.innerHTML,
 				id : item.getAttribute("data-id")
 			});
 			updateDatabase(taskLiInnerHtmlJson);
		});
 	});

 	function updateDatabase(jsonItem){
 		console.log(jsonItem);
 		xhttp = new XMLHttpRequest();

 		xhttp = new XMLHttpRequest();

		xhttp.open('POST', '/remove-task', true);

		xhttp.setRequestHeader("Content-Type", "application/json");

		xhttp.onload = function(){
			console.log(this.responseText);
			location.reload();
		}

		xhttp.send(jsonItem);

 	}
 	
 }());
