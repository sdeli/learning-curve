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