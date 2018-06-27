// task 1
let but1 = document.getElementById('but1');

var title = "Global Title";

var exampleObject = {
  "title": "Example Title",
  "showTitle": function () {
    alert(this.title);
  }
};
var showTitle = exampleObject.showTitle; // вначале забираем ссылку на функцию

but1.onclick = function() {
  showTitle(); // а тут вызываем функцию без ссылки на объект
};

// 2. 