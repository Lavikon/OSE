// Randomize the pips once
var pips1 = Math.round((Math.random() * 5) + 1);
var pips2 = Math.round((Math.random() * 5) + 1);
// Set the count to be one (now you have randomized once)
var i = 1;
// Repeat as long as (pips are not equal) 
while (pips1 != pips2) {
    // Randomize again
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1);
    // Increment counter by one
    i++
}
// Write the answer (including the count) to the html page (answer div)
var txt = "Same dice pips: "+pips1+" and "+pips2+"<br>There were "+i+" randomization rounds until be got the same pips.";
document.getElementById("answer").innerHTML = txt;