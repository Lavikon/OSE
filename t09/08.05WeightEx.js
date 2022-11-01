
function showWeightGoals() {
		// TODO
		// declations
		var kg = document.getElementById("weight").value;
		var loss = kg*0.1/7
		var txt = "";

		for (var i=1;i<=7;i++) { 
			// measure new weight
			kg -= loss
		   // add to output
		   txt += "After "+i+". week  "+Number(kg).toFixed(1)+" kg<br>" 
	   } 
	   // output
	return document.getElementById("answer").innerHTML = txt;
}