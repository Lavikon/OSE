function calculateBMI() {
  // declare
  var cm = document.getElementById("height").value;
  var kg = document.getElementById("weight").value;
  var txt = "Body Mass Index (BMI) is "

  // calc BMI
  var bmi = kg / (cm*cm/10000);
  bmi = bmi.toPrecision(3);

  // if osa
  if (bmi<18.5) {
    txt = txt+bmi+" (Weight is less than normal weight)";
  } else if (bmi<25.0) {
    txt = txt+bmi+" (Normal Weight)";
  } else {
    txt = txt+bmi+" (Overweight)";
  }

  // output
  return document.getElementById("answer").innerHTML = txt;

}
