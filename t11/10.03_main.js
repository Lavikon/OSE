// Add a data object here:
var inventoryData = {
    sum: 0
};
// Add an application object here:
var inventoryCounterApp = {
    add: function (x) {
        inventoryData.sum += x;
        return inventoryData.sum
    },
    counter: function () {
      let more = document.getElementById("count").value;
      more = parseInt(more);
      inventoryCounterApp.add(more);
      return document.getElementById("result").innerHTML = "Total Inventory count: " + inventoryData.sum;
    }
  };