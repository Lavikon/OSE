function modifyTitle() {
    // Read value of title from the input field
	var title = document.getElementById("title").value;
    // Call allCapsTitleTrimmed() function 
	title = allCapsTitleTrimmed(title);

}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
    text = text.trim();
	// Changes the text given to it to be ALL CAPS
    text = text.toUpperCase();
	// Return the changed text
	return text;
}

function calculate() {
	var d = document.getElementById("date").value;
	let start = document.getElementById("startTime").value;
	let end = document.getElementById("endTime").value;
	let rate
	let cost
    // Calculate length of the work as minutes.
	let t = Math.round((end.getTime()-start.getTime())/6000);

    // If it is not Sunday  (Call isSunday() function)
	if (isSunday(d)) {
        //Calculate and show price of the repair work during the workdays
		rate = "Sundays 72.00";
		cost = t * 72 / 60;
    //otherwise		
	} else {	
        //Calculate and showprice of the repair work on Sundays
		rate = "workdays 48.00";
		cost = t * 48 / 60;
	};
	// display
	let txt = "Length of the work was "+t+" minutes.<br>The hourly price is during the "+rate+"euros.<br>The price of this repair work is "+ Number(cost).toFixed(2) +" euros";
    return document.getElementById("answer").innerHTML = txt;
}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given date text into day, month and year parts using the subStr() method
	let d = dateText.substr(0,2);
	let m = dateText.substr(3,5);
	let y = dateText.substr;

	// Create a new Date object to a variable asDate
	var asDate = new Date();


	// Get the day of the week with its getDay() method. Sunday is number 0 .
	

	// If day of the week is Sunday 
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
	
}


