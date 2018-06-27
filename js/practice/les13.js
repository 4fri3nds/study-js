
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');
let result4 = document.getElementById('result4');
let result5 = document.getElementById('result5');

// 1 task
let quoterDegry = function(num, func) {
  return func(num);
};

let quoter = function(x) {
  return Math.pow(x, 2); 
};

div( quoterDegry(quoterDegry(2, quoter), quoter), result1 );

// 2 task
let a = () => 3;
let b = () => 4;
let abc = (a, b) => a() + b();

div( abc(a, b), result2);

//3 task
let dg2 = (num) => Math.pow(num, 2);
let dg3 = (num) => Math.pow(num, 3);
let sumDg = (num, func1, func2) => func1(num) + func2(num);

div(sumDg(3, dg2, dg3), result3);

//4 task func each
let arr = [11,22,33,44,55];

function each(arr, func) {
  
};

function changeArr(arr) {
  arr.forEach( item => console.log(item) );
};

changeArr(arr);