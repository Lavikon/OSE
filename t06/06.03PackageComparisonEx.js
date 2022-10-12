function comparePackages() {
	
		// assign input field values into a variables
		var txt = document.getElementById("textMessages").value;
		var call = document.getElementById("callTime").value;
		// calculate the costs of the Special Package
		var cost = (txt*0.069)+(call*0.069);
		cost += 19.90;
		var res ="-";

		// If the Special package is cheaper than the All-inclusive package 
			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
			if(cost<29.90) {
				res = "The Special package ("+cost.toPrecision(4)+") is cheaper than the All-inclusive package (29.90)"
			}		
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
			else {
				res = "The All-inclusive package (29.90) is cheaper than the Special package ("+cost.toPrecision(4)+")"
			};
		
		// write the answer to the web page DOM, in the answer div, as the content
		return document.getElementById("answer").innerHTML = res;
}