// JSON form
var json = '[{"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},' + '{"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},' + '{"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}]';

var products = JSON.parse(json);
// Parse the JSON text into Javascript objects (1 array, 3 'product' objects)


function listProducts() {
    let txt = "";
    // Handle the product objects from the array. Use i to index the array.
    for ( let i in products) {
        txt += "<p>Number: " + products[i].number + "<br>Name: " + products[i].name + "<br>Price: " + products[i].price + "<br>Description: " + products[i].description + "</p>"
      };
    // Write the output text to the web page (=to the DOM that browser then shows) 
    return document.getElementById("productList").innerHTML = txt;
}