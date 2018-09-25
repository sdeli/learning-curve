(function(){

	var tracks = [];

	tracks.push({
		id : 1,
		title : 'firstTrack',
		duration : 7
	});
	
	tracks.push({
		id : 2,
		title : 'Best Track',
		duration : 23
	});

	tracks.push({
		id : 3,
		title : 'Worst Track',
		duration : 30
	});

	let tracksContainer = document.getElementById('tracks');
	let i, row, buttonRemove, buttonPlay;

	for(i = 0; i < tracks.length; i++) {
		row = tracksContainer.insertRow(i);

		createCellAndInnerHtml(row, 0, tracks[i].id);
		createCellAndInnerHtml(row, 1, tracks[i].title);
		createCellAndInnerHtml(row, 2, tracks[i].duration);
		buttonRemove = createBtnWithIcon('btn btn-xs btn-danger', 'glyphicon glyphicon-remove');
		buttonPlay = createBtnWithIcon('btn btn-xs btn-primary', 'glyphicon glyphicon-play');
		createCellAndInnerHtml(row, 3, buttonRemove, buttonPlay);

		buttonPlayIcon = document.createElement('span');
	}

	function createCellAndInnerHtml(row, indexInRow, innerHTML){

		let cellToInsert = row.insertCell(indexInRow);

		if (innerHTML instanceof HTMLElement) {
			let argsObj = createCellAndInnerHtml.arguments;
			let argsObjLength = createCellAndInnerHtml.arguments.length;
			for (let i = 2; i < argsObjLength; i++) {
				cellToInsert.appendChild(argsObj[i]);
			}

		} else {
			cellToInsert.innerHTML = innerHTML;
		}
	}

	function createBtnWithIcon(buttonClass,buttonIconClass){

		buttonIcon = document.createElement('span');
		buttonIcon.className = buttonIconClass;

		button = document.createElement('button');
		button.className = buttonClass;
		button.appendChild(buttonIcon);
		
		return button;
	}

}());
(function(){
	/*
	playTrack
	    // Do nothing if it is the same track and player is already playing
	    // If same track, just play forward
	    // if other track

	pauseTrack(
	playNextTrack()
	*/

	

	let playerTitle = document.querySelectorAll('#player-title')[0];
	let playerProgress = document.querySelectorAll('#player-progress')[0];
	let playBtn = document.querySelectorAll('#player-button-play')[0];
	let playerState = {
		track : null,
		isPlaying : false,
		progress : 0,
		interval : null
	}

	playBtn.addEventListener('click', function(){
		 playTrack(playerState.track)
		pauseTrack();
		playNextTrack();
	});

	function playTrack(){

	}

	function pauseTrack(){

	}

	function playNextTrack(){

	}

});