function calculateRent() {
	//declare
	var rent = document.getElementById("rent").value;
	var ppl = document.getElementById("participants").value;

	// calc
	var cost = rent/ppl

	// output
	return document.getElementById("answerDiv").innerHTML = "Rent per participants is " + cost.toPrecision(4) + " euros.";
		
}