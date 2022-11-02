// Create an array with minigolf results of eight players 
var minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {
    // Sort the array
    minigolf.sort();
    // Assign the smallest result of to a variable
    var min = minigolf[0];
    // Assign the index of last array item to an variable
    minigolf.reverse();
    var i = minigolf.length;
    i--;
    // Assign the biggest result to a variable
    var max = minigolf[0];
    // Write the answer on the page, to the answer div, as content of the div
	var txt = "The smallest result is "+min+" (winner).<br>The biggest result is "+max+".";
    return document.getElementById("answer").innerHTML = txt;
}