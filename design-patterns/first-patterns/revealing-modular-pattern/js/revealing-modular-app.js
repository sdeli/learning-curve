(function(win){

	var fakeChatModule = (function(){
		var _leadself = 'Me: ',
		_leadcomputer = "PC: ",
		_aSaid= ["<div>This is a Cyber Chat</div>"],
		_msgYes = "Yes, that's a great idea.",
		_msgNo = "No, that must be a mistake.",
		_aSassyStuff = ["Like mold on books, grow myths on history.",
		"She moved like a poem and smiled like a sphinx.",
		"As long as we don’t die, this is gonna be one hell of a story.",
		"She laughed, and the desert sang.",
		"You’ve got about as much charm as a dead slug."];

		let _advert = document.querySelectorAll('.advert')[0];
		console.log(_advert);

		function _echo(msg){
			let tagToUpdate = document.querySelectorAll('#talk span')[0];
			tagToUpdate.innerHTML = msg;
			_aSaid.push('<div>' + msg + '<div>');
			console.log(_aSaid);
			_updateChatArea(_advert);
		}

		function _replyYesOrNo(){
			let msg = Math.random() > .5 ? _msgYes : _msgNo;
			_echo(_leadcomputer + msg);
		}

		function _saySassyStuff(){
			let msgIndex = Math.floor(Math.random() * _aSassyStuff.length);
			console.log(msgIndex);
			let msg = _aSassyStuff[msgIndex];
			_echo(_leadcomputer + msg);
		}

		function _updateChatArea(outputElem){
			outputElem = outputElem || document.querySelectorAll('.advert')[0];
			
			// return the 6 index of arr but positive number if negative
			let aSaidLength = _aSaid.length;
			let indexToStartOff = Math.max(_aSaid.length - 6, 0);
			let out = "";

			for (let i = indexToStartOff; i < aSaidLength; i ++) {
				out += _aSaid[i];
			} // for

			outputElem.innerHTML = out;
		}

		return {
			echo : _echo,
			replyYesOrNo : _replyYesOrNo,
			saySassyStuff : _saySassyStuff,
			updateChatArea : _updateChatArea
		}

	}());

	if(!win.fakeChatModule) win.fakeChatModule = fakeChatModule;

}(window));





