function calculateSalary(hours, hourlySalary) {
		// calculate salary
		var salary = hours*hourlySalary;
		// return the gross salary with the return statement
		return salary;
}

function showGrossSalary() {
		// assign the input field value to the variable hours
		var h = document.getElementById("hours").value;
		// assign the second input field value to the variable hourlySalary
		var e = document.getElementById("hourlySalary").value;
		// call the calculateSalary function
		var pay = calculateSalary(h,e)
		// write the answer on the html page
		var txt = "Gross salary is "+ Number(pay).toFixed(2) + " euros."
		return document.getElementById("answer").innerHTML = txt;
}