// 1 task
let elem = document.getElementById('input1');
let wrap1 = document.getElementById('wrap1');

function func(x1, x2) {
  div(x1 + x2 + "значение инпута " + this.value, wrap1);
}

// func.call(elem, x1, x2);
// func.apply(elem, [x1, x2]);

func.bind(elem);
let newFunc = func.bind(elem);

newFunc("1 аргумент, ", "2 аргумент, "); // это не вызов как не странно, а просто передача параметров

newFunc // а это вызов

// 2 task
let elem2 = document.getElementById('elem2');
let wrap2 = document.getElementById('wrap2');
 
function funcCall() {
  div(this.value, wrap2);
}

funcCall.call(elem2); 

// 3 task
let elem3 = document.getElementById('elem3');
let wrap3 = document.getElementById('wrap3');

let name3 = {
  sur: 'Башинский',
  na: "Алексей"
};

function func3(surname, name) {
  div(this.value + ', ' + surname + ' ' + name, wrap3);
}

func3.call(elem3, name3.sur, name3.na);