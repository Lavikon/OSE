function randomInteger(from, to) {
    // Return randomizedNumber between 'from' and 'to'.
    var range = to - from;
    var out = Math.round(from + Math.random()*range);
    return out
}

function rollTheDice() {
    // Call the function randomInteger(from, to) with parameter values 1 and 6.
    // Assign the return value of the function to the variable.
   var dice = randomInteger(1,6)
    //Insert the value of the variable diceValue into the HTML div element whose id is 'dice'.
	return document.getElementById("dice").innerHTML = dice;
}