// -----------------> 0 Напоминалка
//string to ---> number
// parseInt(somestring) -- преобразовать в строку
// querySelector('tag-or-class-or-id') -- найти нужный елемент
// user-select: none -- отменяет выделение
// .addEventListener('mouseup', func) -- срабатывает при отжатии мышки

//------------------> Разбор полетов
// 1 стрелочные функции
let input = document.getElementById('input');

input.addEventListener('blur', blurDate);

function blurDate() {
  this.value = toUpper(this.value)
}

let toUpper = str => str.toUpperCase();


// 2 перебор массива forEach
let someArr = ['значение1', 'значение2', 'значение3'];

document.getElementById('but').addEventListener('click', function () {

  someArr.forEach(function callback(currentValue, index, array) {
    div('this is value : ' + currentValue);
    div('this is index : ' + index);
    div('this is array : ' + array);
  });

})

// 3 перебор массива forEach
let but2 = document.getElementById('but2');

but2.addEventListener('click', function () {
  someArr.forEach(callback = (currentValue, index, array) => (console.log(currentValue)));
});

// 4 setInterval
let timerId = setInterval(function func() { 
  console.log('spoon'); 
}, 500);

setTimeout(function () { 
  clearInterval(timerId); 
  console.log('stop') 
}, 1500);

// let recursiveSetTimeout = setTimeout(function tic() { 
//   console.log('tic'); 
//   recursiveSetTimeout = setTimeout(tic, 500);
//   if 
// }, 1000);
// clearInterval(recursiveSetTimeout, 4000);

// 5 parameters
let task = document.getElementById('task');

function value(val) {
  console.log(val.value); // принимаем value с другой функции и здесь мы можем делать с ним что угодно
}

task.onblur = function someFunc() {
  value(this) //передаем значение this при blure. Получается мы здесь вызываем другую функцию дав ей в параметр то что нужно этой функции
}

// 6 смена клика
// colorSwitch2.addEventListener('click', startSortArr);

function startSortArr() {
  this.removeEventListener('click', startSortArr);
  this.addEventListener('click', dismissSortArr);
  console.log('on');
}

function dismissSortArr() {
  this.removeEventListener('click', dismissSortArr);
  this.addEventListener('click', startSortArr);
  console.log('off');
}

// 7 довольно бесмысленная функция (хабр)
var landscape = function () {
  var result = "";
  var flat = function (size) {
    for (var count = 0; count < size; count++) {
      result += "_";
    }
  };
  var mountain = function (size) {
    result += "/";
    for (var count = 0; count < size; count++) {
      result += "'";
    }
    result += '\\';
  };
  
  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

let landScapeVar = landscape();
div(landScapeVar);

// 7 функции
console.log("The future says:", future());

function future() {
  return "We STILL have no flying cars.";
}