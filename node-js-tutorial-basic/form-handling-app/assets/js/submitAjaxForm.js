let submitBtn = document.querySelectorAll('#form-ajax button')[0];
console.log(submitBtn);

submitBtn.addEventListener('click', function(){
	var formValues = {
		who : document.querySelectorAll('#form-ajax [name=\'who\']')[0].value,
		department : document.querySelectorAll('#form-ajax [name=\'department\']')[0].value,
		email : document.querySelectorAll('#form-ajax [name=\'email\']')[0].value
	}

	submitAjaxForm(submitBtn,formValues);
});

function submitAjaxForm(submitBtn,formValues){

	xhttp = new XMLHttpRequest();

	xhttp.open('POST', '/contact-ajax', true);

	xhttp.setRequestHeader("Content-Type", "application/json");

	xhttp.onload = function(){
		console.log(this.responseText);		
	};

	var data = JSON.stringify(formValues);
	xhttp.send(data);

}