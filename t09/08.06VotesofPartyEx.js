function showComparisonScores() {
	// declations
	var votes = document.getElementById("votes").value;
	var max = document.getElementById("candidates").value;
	var txt = "";
	var count;
		// For each candidates
		for (var i=1;i<=max;i++) {
			// Calculate comparison score for candidate
			count = Math.round(votes/i);
			txt += i+".candidate: "+count+"<br>";
		}
		// Show scores
	return document.getElementById("answer").innerHTML = txt;
}