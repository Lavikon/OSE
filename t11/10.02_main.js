// Add a data object here:
var nutRepository = {
  nutCount: 0
};
// Add an application object here:
var squirrel = {
  add: function (nuts) {
    nutRepository.nutCount += nuts;
    return nutRepository.nutCount
  },
  deposit: function () {
    let newNuts = document.getElementById("nuts").value;
    newNuts = parseInt(newNuts);
    squirrel.add(newNuts);
    return document.getElementById("result").innerHTML = "My total nut count is " + nutRepository.nutCount;
  }
};