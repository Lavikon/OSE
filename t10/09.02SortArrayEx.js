var array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];

function sortArray() {
    array.sort();
    array.reverse();
    var i = 0;
    while (array[i]) {
        console.log(array[i]);
        i++;
    }
}