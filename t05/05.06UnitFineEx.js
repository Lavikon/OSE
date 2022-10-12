function calculateUnitFine() {
        // Read the value from the input field into a variable
		  var income = document.getElementById("txtNetIncome").value;

		// Calculate the unit fine and assign the result into another variable
		
			var answer = (income-255)/60;
			var fine = answer.toPrecision(4);
		

		// Write the answer to the web page DOM, in the answer div, as the content
		return document.getElementById("answerDiv").innerHTML = "unit fine is " + fine + " euros.";
}