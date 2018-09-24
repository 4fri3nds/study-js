
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let result4 = document.getElementById('result4');
let result5 = document.getElementById('result5');

let get1 = document.getElementById('get1');
let get2 = document.getElementById('get2');
let get3 = document.getElementById('get3');
let get4 = document.getElementById('get4');
let get5 = document.getElementById('get5');

// 1 task
let quoterDegry = function(num, func) {
  return func(num);
};

let quoter = function(x) {
  return Math.pow(x, 2); 
};

get1.onclick = () => div(quoterDegry(quoterDegry(2, quoter), quoter), result1, true );

// 2 task
let a = () => 3;
let b = () => 4;
let abc = (a, b) => a() + b();

get2.onclick = () => div( abc(a, b), result2, true);

//3 task
let dg2 = (num) => Math.pow(num, 2);
let dg3 = (num) => Math.pow(num, 3);
let sumDg = (num, func1, func2) => func1(num) + func2(num);

get3.onclick = () => div(sumDg(3, dg2, dg3), result3, true);

//4 корень квадратный из каждого числа массива
let arr4 = [4, 9, 16, 25, 36, 49, 64, 81, 100];
let func4 = (arr, f) => f(arr);

function root(arr) {
  let newArr = [];

  arr.forEach(item => newArr.push(Math.sqrt(item)))

  return newArr;
}

let resultArr4 = func4(arr4, root);

get4.onclick = () => (
  div('Старый массив ' + arr4, document.getElementById('result4')),
  div('Новый массив ' + resultArr4, document.getElementById('result4'))
);

//5 
let arr5 = ['arrNum__1', 'arrNum__2', 'arrNum__3', 'arrNum__4', 'arrNum__5', 'arrNum__6'];
let emptyArr5 = [];
let f1 = (el) => 'func__1 : ' + el + '<br/>';
let f2 = (el) => 'func__2 : ' + el + '<br/>';
let f3 = (el) => 'func__3 : ' + el + '<br/>';

let arrFunc5 = [f1, f2, f3];

function func5(arrNum, arrF) {
  for (let i = 0; i < arr5.length; i++) {
    for (let j = 0; j < arrFunc5.length; j++) {
      let x = arrF[j](arrNum[i]); // три разных функции к одному числу
      emptyArr5.push(x);
    }   
  }
}

func5(arr5, arrFunc5);

get5.onclick = () => div(emptyArr5,document.getElementById('result5'));