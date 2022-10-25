// Defne a function (1.) 
function kela(t) {
	var tuki
	t = parseInt(t);
	if(t<10) {
		tuki = 8.00;
	} else if(t<20) {
		tuki = 11.00;
	} else if(t<30) {
		tuki = 13.50;
	} else if(t<45){ 
		tuki = 16.50;
	} else {
		tuki = 21.00;
	};
	return tuki;
};
// Defne a function (2.) 
function pay(osa,koko) {
	osa = parseFloat(osa);
	koko = parseFloat(koko);
	var left = koko+15.90-osa;
	return left;
};
	
	
// Define a function (3.) 
function calculate() {
		// Read values from the input fields
		var time = document.getElementById("length").value;
		var fee = document.getElementById("doctorsFee").value;
		
		// Call the function (1.) which calculates Kela reimbursement 
		var etu = kela(time);
		
		// Call the function (2.) which calculates amount left for the customer to pay
		var cost = pay(etu,fee);
		
		// Write the answer on the page, to the answer div, as content of the div
		txt = "Doctor's Fee is "+ Number(fee).toFixed(2) +" euros.<br>Kela reimbursement is "+ Number(etu).toFixed(2) + " euros.<br>Office Fee is 15.90 euros.<br>Customer needs to pay "+ Number(cost).toFixed(2) + " euros.";
		return document.getElementById("answer").innerHTML = txt;
}