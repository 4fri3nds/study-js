// 1 task без prototype
function getDayName(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}
var today = new Date();

document.getElementById('but1').onclick = function () {
  alert(getDayName(today))
};

//1 with proto
Date.prototype.getDayName = function () {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[this.getDay()];
}
var today = new Date();

document.getElementById('but2').onclick = function () {
  alert(today.getDayName());
};

