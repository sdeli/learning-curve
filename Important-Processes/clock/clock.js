(function(){

	const clockSection = document.getElementById("clock");

	function getTime() {

		function pad(number) {
			if (number < 10) {
				return "0" + number;
			} else {
				return number;
			}
		}

		function createFullTime() {
			const now = new Date();

			const hh = pad(now.getHours());
			const mm = pad(now.getMinutes());
			const ss = pad(now.getSeconds());

			return `${hh}:${mm}:${ss}`;
		}

		return createFullTime();

	} // getTime()

	function tickClock() {
	  clockSection.textContent = getTime();
	}

	var clockIntervalObj = (function(){
		var interval;

		function intervalSetter(clock) {
		    interval = setInterval(clock, 1000);
		}

		function myStopFunction() {
		    clearInterval(interval);
		}

		return {
			intervalSetter : intervalSetter,
			myStopFunction : myStopFunction
		}
	}());

	tickClock();
	clockIntervalObj.intervalSetter(tickClock);

	//setTimeout(clockIntervalObj.myStopFunction, 3000)
	
}());
