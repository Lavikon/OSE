// Create an array of twelve average temperatures
var temperatures = [-3.3, -4.7, -1.3, 3.9, 10.2, 14.6, 17.8,
				16.3, 11.5, 6.6, 1.6, -2.0];

function loopTemperatures() {
    // For loop
    for (let i=0;i<12;i++) {
        let m = i+1;
        // Use the console.log() method to write each temperature of the array
        console.log(m+". "+temperatures[i].toFixed(1));
    }
}