let result4 = document.getElementById('result4');
let result5 = document.getElementById('result5');
let result6 = document.getElementById('result6');
let result7 = document.getElementById('result7');
let result8 = document.getElementById('result8');

let but4 = document.getElementById('but4');
let but5 = document.getElementById('but5');
let but6 = document.getElementById('but6');
let but7 = document.getElementById('but7');
let but8 = document.getElementById('but8');

var input = document.getElementById('input');
var error = document.getElementsByClassName('error')[0];

// exercise 1
input.onfocus = function() { /* .onfocus фокус на инпут */
  error.innerHTML = '';
}

input.onblur = function() { /* .onblur потеря фокуса */
  if (isNaN(this.value)) {
    this.classList.add("error-brd");
    error.innerHTML = notNumber()
  } else {
    this.classList.remove('error-brd');
    error.innerHTML = '';
    this.classList.add('focus-brd');
  }
}
// exercise 2
var input2 = document.getElementById('input2');
var error2 = document.getElementsByClassName('error2')[0];
var sumElem = document.getElementsByClassName('sum')[0];

input2.onfocus = function() { /* .onfocus фокус на инпут */
  error.innerHTML = '';
  sumElem.innerHTML = '';
}

input2.onblur = function() { /* .onblur потеря фокуса */
  if (isNaN(this.value)) {
    this.classList.add("error-brd");
    error2.innerHTML = notNumber()
  } else {
    this.classList.remove('error-brd');
    error2.innerHTML = '';
    this.classList.add('focus-brd');

    var sum = 0;
    var str = this.value;

    for(var x=0; x<str.length; x++) {
      sum += parseInt(str[x]);
    }

    sumElem.innerHTML = "сумма чисел введенного числа = " + sum;
  }
}

// exercise 3
var input3 = document.getElementById('input3');
var div3 = document.createElement('div');
div3.classList.add('includer');

input3.onblur = function() {
  var value = this.value,
    sumArr = 0;
    arr = value.split(',');

  if (  isNaN(arr[0]) ) {
    div3.innerHTML = notNumber()
    document.getElementById('fieldset3').appendChild(div3);
  } else {
    for(var x=0; x<arr.length; x++) {
      sumArr += parseInt(arr[x]) / arr.length;
      }
    console.log(sumArr);
    div3.innerHTML = "Среднее арифметичесское введенных чисел равняется = "+sumArr;
    document.getElementById('fieldset3').appendChild(div3);
    
  }
}

// 4 task
let arr4 = [];
let flag4;
let arrHere4 = document.getElementById('arrHere4');
let refresh4 = document.getElementById('refresh4');

refresh4.onclick = ref4;

function ref4() {
  arr4 = [];
  let table = document.getElementById('fieldset4').getElementsByTagName('table')[0];

  if (table) {
    table.remove();
  };

  for (let i = 0; i < 5; i++) {
    arr4.push(getRandom(1,6))
  };

  dispArr(arr4, arrHere4);
  
  for (let i = 0; i < arr4.length; i++) {
  
    if (arr4[i] == 5) {
      flag4 = true;
      break
    }
  
    flag4 = false;
  };
};

but4.onclick = () => div(flag4, result4, true);

//5 task
let arr5 = [];

function getArr5(num) {
  arr5 = [];

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) arr5.push(i);
  };

  dispArr(arr5, result5, true);
};

document.getElementById('input5').onchange = checkNum5;

function checkNum5() {
  let num = this.value;

  if (!isNaN(num))  {
    getArr5(num);
    empty(result5);
    
    (arr5.length == 2) ? this.value = 'Это число-рудкит' : this.value = 'Это обычное число';
  } else {
    div('Это не число число', result5, true)
  }
};

//6 task
let inp6 = document.getElementById('input6');

let sum6 = function (x) {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    sum += i
  }
  return sum;
};

inp6.onchange = function() {
  div('Вводимое число - ' + this.value + '; Pезультат арифметической прогрессии - ' + sum6(this.value), result6); 
};