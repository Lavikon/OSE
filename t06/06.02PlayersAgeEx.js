function checkAge() {
	// assign the age input field value into a variable
	var age = document.getElementById("age").value;
	var txt = "-"

	//if age smaller than 18
	if (age < 18) {
		// assign text "Adolescents are not allowed to play." to a variable
		txt = "Adolescents are not allowed to play.";
	}
		// otherwise 
		else {
		// assign text "Old enough to play." to a variable  
		txt = "Old enough to play.";
	};

	// Write the answer to the web page DOM, in the answer div, as the content
	return document.getElementById("answer").innerHTML = txt;

}