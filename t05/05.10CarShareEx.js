function calculateCosts() {
	// declare
	var km = document.getElementById("kilometers").value;
	var liters = document.getElementById("consumption").value;
	var price = document.getElementById("price").value;
	var ppl = document.getElementById("participants").value;

	// calc
	var cost = (km*liters*price)/(100*ppl);

	// output
	return document.getElementById("answerId").innerHTML = "Fuel cost per participant is " + cost.toPrecision(3) + " euros.";
}