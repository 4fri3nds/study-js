//1
class Table {
  constructor(id) {
    this.id = id;

    let result = document.getElementById(this.id);
    let someArr = [19, 20, 21, 22, 23, 24];

    dispArr(someArr, result);

    let table = document.getElementsByTagName('table')[0];

    table.onclick = function () {
      event.target.style.background = 'green';
    }
  };
};