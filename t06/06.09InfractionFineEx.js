function tellInfractionFine() {
	// declare
	var drive = document.getElementById("drivingSpeed").value;
	var limit = document.getElementById("speedLimit").value;
	var txt = "Infraction fine is ";

	// fines
	if (drive - limit > 20) {
		txt = "Income-based unit fine.";
	} else if (drive - limit <= 0) {
		txt = "No speeding, no fine.";
	} else if (limit < 65) {
		// low speed fine
		if (drive - limit > 15) {
			txt = txt + "115 euros."
		} else {
			txt = txt + "85 euros."
		};
	} else	{
		// high speed fine
		if (drive - limit > 15) {
			txt = txt + "100 euros."
		} else {
			txt = txt + "70 euros."
		};
	}

	// output
	return document.getElementById("answer").innerHTML = txt;
}