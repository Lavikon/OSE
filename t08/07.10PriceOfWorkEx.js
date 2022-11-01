function modifyTitle() {
    // Read value of title from the input field
	var title = document.getElementById("title").value;
    // Call allCapsTitleTrimmed() function 
	allCapsTitleTrimmed(title);

}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
    text = text.trim();
	// Changes the text given to it to be ALL CAPS
    text = text.toUpperCase();
	// Return the changed text
	return document.getElementById("title").value = text;
}

function calculate() {
	var day = document.getElementById("date").value;
	let start = document.getElementById("startTime").value;
	let end = document.getElementById("endTime").value;
	let rate
	let cost
    // Calculate length of the work as minutes.
	let h1 = start.substr(0,2);
	let m1 = start.substr(3,5);
	let h2 = end.substr(0,2);
	let m2 = end.substr(3,5);
	let t = (h2-h1)*60;
	t = t + (m2-m1);

    // If it is not Sunday  (Call isSunday() function)
	let yn = isSunday(day)
	if(yn) {
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
	let txt = "Length of the work was "+t+" minutes.<br>The hourly price is during the "+rate+"euros.<br>The price of this repair work is "+ Number(cost).toFixed(2) +" euros.";
    
	return document.getElementById("answer").innerHTML = day;
}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	let backup = dateText
	// Split the given date text into day, month and year parts using the subStr() method
	let d = dateText.substr(0,2);
	let m = dateText.substr(3,5);
	let y = dateText.substr(6,10);

	// Create a new Date object to a variable asDate
	let asDate = new Date(backup);
	//asDate.setDate(d);
	//asDate.setMonth(m);
	//asDate.setFullYear(y);

	// Get the day of the week with its getDay() method. Sunday is number 0 .
	let w = asDate.getDay();

	// If day of the week is Sunday 
	if (w===0) {
		// return Boolean value true
		return Boolean(true);
	// otherwise	
	} else {
       // return Boolean value false
	   return Boolean(false);		
	};
}


