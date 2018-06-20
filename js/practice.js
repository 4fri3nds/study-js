// -----------------> 0 Напоминалка
//string to ---> number
// parseInt(somestring) -- преобразовать в строку
// querySelector('tag-or-class-or-id') -- найти нужный елемент
// user-select: none -- отменяет выделение
// .addEventListener('mouseup', func) -- срабатывает при отжатии мышки

//------------------> Разбор полетов
// 1 стрелочные функции
// 2 перебор массива forEach
let someArr = ['значение1', 'значение2', 'значение3'];
let forEach1 = document.getElementById('wrap-for-each1');

document.getElementById('but').addEventListener('click', function () {

  someArr.forEach(function callback(currentValue, index, array) {
    div('this is value : ' + currentValue, forEach1);
    div('this is index : ' + index, forEach1);
    div('this is array : ' + array, forEach1);
  });

})

// 3 перебор массива forEach
let forEach2 = document.getElementById('wrap-for-each2');
let but2 = document.getElementById('but2');

but2.addEventListener('click', function () {
  someArr.forEach(callback = (currentValue, index, array) => (div(currentValue, forEach2)));
});

// 4 setInterval
let setIntervalSetTimeout = document.getElementById('wrap-set-interval');
let getIntervalgetTimeout = document.getElementById('btn-get-interval');

getIntervalgetTimeout.addEventListener('click', startTimer);

function timerId() { 
  div('spoon', setIntervalSetTimeout); 
};

function startTimer() {
  let variableTimerId = setInterval(timerId, 500);

  setTimeout(function () { 
    clearInterval(variableTimerId); 
    div('stop', setIntervalSetTimeout);
  }, 1999);
}

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
let wrapScapeVar = document.getElementById('wrap-scape-var');
div(landScapeVar, wrapScapeVar);

// 7 функции
let futureSays = document.getElementById('future-says');
div("The future says:" + future(), futureSays);

function future() {
  return "We STILL have no flying cars.";
}

// 8 метод call для функций
let wrapCall = document.getElementById('method-call');

function showFullName() {
  div('asdf', wrapCall);  
}