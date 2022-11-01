function calculateProfit() {
    // Read value of rounds from the input field
	var max = document.getElementById("rounds").value;
    // Decrale
    var win = 0;
    // Make a loop 
    for (var i=0;i<max;i++) {
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
        var pips = Math.round( (Math.random( ) * 5) + 1 ); 
        // If the randomized pips is 1, 3 or 5,  no pay
        // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
        if (pips==2||pips==4) {
           win+=1.25
         };
        // Otherwise the pips 6 returns the inserted bet 150%	
        if (pips==6) {
            win+=1.5
         };
    }
    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
    var take = max-win;
    // Write the answer on the page, to the answer div, as content of the div
    var txt = "<br>Bets were altogether "+Number(max).toFixed(2)+" euros<br>";
    txt += "Wins were "+Number(win).toFixed(2)+" euros<br>";
    txt += "Profits were "+Number(take).toFixed(2)+" euros<br>";
	return document.getElementById("answer").innerHTML = txt;
}