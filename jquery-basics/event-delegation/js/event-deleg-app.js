(function(){
	$spoiler = $('.spoiler')
		.css({'position':'relative'})
		.append('<button class="spoiler__btn">Reveal Spoiler</button>');
				
	$spoilerBtn = $('.spoiler__btn').css({'position':'absolute','top':'0px','left':'0px'});

	// Interresting syntax
	//$spoiler.on('click','BUTTON', function(){
	//	console.log('majom');
	//	$spoilerBtn.hide();
	//});

	$spoiler.on('click', function(event){
		console.log(event.target === this);
		if(event.target.tagName === 'BUTTON'){
			$spoilerBtn.fadeOut();
		} else {
			console.log('didnt hit');
		} // if

	});

}());



