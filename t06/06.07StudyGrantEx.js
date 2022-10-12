function showStudyGrant() {
    
        // Read values from the input fields
		var age = document.getElementById("age").value;
		var yn = document.getElementById("withParents").value;
		var txt = "The study grant is "
		
		// if student is living with parents and his/her age is greater than 20 or equal
		if (age>=20 && yn=="y") {
			txt = txt+"136.70 euros.";
		      //assign text "The study grant is 335.20 euros." to a variable
		}	else if (age>=20 && yn=="n") {
			txt = txt+"335.20 euros.";
		} else {
			txt = "Ask Kela."		
		}
		// Write the answer on the page, to the answer div, as content of the div
		return document.getElementById("answer").innerHTML = txt;
		
}
	