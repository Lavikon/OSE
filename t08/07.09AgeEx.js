function tellAge() {
    // Read value of yearOfBirth from the input field 
   var age = document.getElementById("yearOfBirth").value;

    // Figure out the current date into today variable 
    var today = new Date();  

    // Use getFullYear() method to get the current year out from the today variable
    var year = today.getFullYear();
   
    // Calculate the (rough estimate of the) age
    age = year-age;

    // If age is less than zero
    if (age < 0) {
        txt = "error";
    } else {
        txt = "You are now "+age+" years old.<br> (Current year is "+year+".)";
    };
 
        //  Show an error message
        
    // otherwise tell the age
    return document.getElementById("answer").innerHTML = txt;
}