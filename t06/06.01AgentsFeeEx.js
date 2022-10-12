function calculateFee() {
		
	// Read value from the input field
	var price = document.getElementById("price").value;

	// Calculate fee, save the result to a variable
	var fee = price*344/10000;
		
	// if the fee is under minimum, update it
	if(fee<2400) {
		fee = 2400;
	};

	// Write the answer on the page, to the fee div, as content of the div
	return document.getElementById("fee").innerHTML = "Real state agent's fee is " + fee.toPrecision(6) + " euros.";
}