// 1 task
function Calc() {
  let result1 = document.getElementById('result1');
  let but1 = document.getElementById('but1');

  this.sum = () => parseInt(this.a) + parseInt(this.b);   
  
  this.X = () => parseInt(this.a) * parseInt(this.b);

  this.getNum = function() {
    div('',result1, true, false);
    this.a = prompt('Введите первое число: a');
    this.b = prompt('Введите первое число: b');
    div('Число Х: ' + this.a, result1 );
    div('Число У: ' + this.b, result1 );
    div('результат произведения: ' 
      + this.sum(), result1, false, false);
    div('результат умножения: ' 
      + this.X(), result1, false, false);
  }

  this.getSum = function() {
    but1.onclick = () => this.getNum();
  }
};

let calc = new Calc;
calc.getSum();

// 2 task
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Добавте число в котел чисел', 0);
    div('Вы добавили ' + this.value, result2);
  }
  this.next = function() {
    but2.onclick = () => this.read();
  }
}

let acum = new Accumulator(0);
acum.next();

// 3 task
let Count = function () {
  let num = 0;
  return {
    getNext: function() {
      return ++num
    },
    getNext2: function() {
      return num = 2 + num
    },
    set: function(number) {
      num = number;
    },
    reset: function() {
      num = 0;
    },
    elem: document.getElementById('result3'),
    but: document.getElementById('but3')
  }
}

let counter = Count();

counter.but.onclick = function() {
  div('шаг 1 : ' + counter.getNext(), counter.elem);
  div('шаг 1 : ' + counter.getNext(), counter.elem);
  
  counter.set(10);
  div('начало с 10 : ' + counter.getNext(), counter.elem);
  div('начало с 10 : ' + counter.getNext(), counter.elem);

  counter.reset();
  div('шаг 2 : ' + counter.getNext2(), counter.elem);
  div('шаг 2 : ' + counter.getNext2(), counter.elem);
  div('шаг 2 : ' + counter.getNext2(), counter.elem);
}  

// 4 task
let countFunc = function() {
  let num = 0;
  
  function count() {
    return ++num
  }

  count.set = function(number) {
    num = number;
  }

  count.reset = function() {
    num = 0;
  }

  return count;
};

let countFoo = countFunc();

but4.onclick = function() {
  div(countFoo(), result4);
  
  countFoo.set(10);
  div(countFoo(), result4);
  div(countFoo(), result4);
  
  countFoo.reset();
  div(countFoo(), result4);
  div(countFoo(), result4);
}

// 5 task
function sumDeep(num1) {
  return function(num2) {
    return num1 + num2;
  } 
}

but5.onclick = () => div(sumDeep(4)(3),result5);

// 6 task
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

// Традиционная сортировка
// по полю age  (Маша, Вася, Петя)
let age = users.sort(
  function (a, b) {
    return a.age > b.age ? 1 : -1;
});

// Сортировка кастомная по функции
function byField(value) {
  return function(a,b) {
    return a.value > b.value ? 1 : -1;  
  }
};

// sort age
users.sort(byField('age'));

but6.onclick = function() {
  users.forEach(function (user) {
    div(user.name + ' : ' + user.age, result6);
  }); // Маша, Вася, Петя
}