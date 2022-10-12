
function play() {
		// Read value from the input field
		var bet = document.getElementById("bet").value;
	
		// Randomize dice pips between 1-6
		var pips = Math.round((Math.random()*5)+1);
		var result = " - Paid back: ";
		var win;

		// Calculate win base on pips
		if(pips==2 || pips==4) {
			win = bet*1.25;
			result = result + Number(win).toFixed(2) + " euros";
		} else if(pips==6) {
			win = bet*1.5;
			result = result + Number(win).toFixed(2) + " euros";
		} else {
			result = " - no pay";
		};
		
		// Write the answer on the page, to the answer div, as content of the div
		var txt = "Pips was "+pips+result
		return document.getElementById("answer").innerHTML = txt;

}
