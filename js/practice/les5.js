let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

// 1 задание
var but = document.getElementById('but'),
  num = document.getElementsByClassName('num')[0];

but.addEventListener('click', function () {
  var val = parseInt(num.value); /* parseInt это преобразование строки в число */
  sum = val * val;

  var div = document.createElement('div');
  div.className = "includer";
  div.innerHTML = "Квадрат числа " + val + " = " + sum;
  document.getElementById('include1').appendChild(div);
});

// 2 задание
function a_value(o) {
  alert(o.value);
}

// 3 задание
var num3 = document.getElementsByClassName('num3');
var but3 = document.getElementById('but3');

but3.addEventListener('click', function () {
  var sum = 0;
  for (var x = 0; x < num3.length; x++) {
    var val = parseInt(num3[x].value);
    sum += val;
  }
  var div = document.createElement('div');
  div.innerHTML = "Сумма чисел инпутов :" + sum;
  div.className = "includer";
  document.getElementById('include3').appendChild(div);
})

// 4 задание
input.addEventListener('blur', function blurDate() {
  this.value = reverseDate(this.value);
});

let reverseDate = function (val) {
  let arr = val.split('.');
  let secArr = [];

  for (let x = arr.length - 1; x >= 0; x--) {
    secArr.push(arr[x]);
  }

  val = secArr.join('-');

  return val
}
// 5 задание
input2.addEventListener('blur', function () {
  var date = new Date();
  var yearNow = date.getFullYear();
  this.value = yearNow - this.value;
});

// 6 задание
input3.addEventListener('blur', function () {
  let val = this.value;
  let arr = val.split('');
  let arrRev = val.split('').reverse();
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] !== arrRev[x]) {
      alert('this is different word');
      return;
    } else {
      alert('palindrom');
      return
    }
  }
});

// 7 задание
input4.addEventListener('blur', function() {
  let val = this.value;
  for (let x = 0; x < val.length; x++) {
    if (val[x] == 3) {
      alert('yep num 3 in there');
      return 
    } 
  }
  alert('no there is NOT num 3');
  return
});


// 8 задание
document.getElementById('button').addEventListener('click', function() {
  let p = children(this);

  for (let x = 0; x < p.length; x++) {
    p[x].innerHTML = x + 1 + " " + p[x].innerHTML;
  }
});

// 9 задание
document.getElementById('button2').addEventListener('click', function() {
  let p = children(this);
  let num = 0;
  let arr = [];
  
  for (let x=0; x<p.length; x++) {
    var value = parseInt(p[x].innerHTML);
    arr.push(value);
  }
  
  arr = arr.sort(compareNumbers);
  
  for (let x=0; x<p.length; x++) {
    p[x].innerHTML = arr[x];
  } 
});

// 10 задание
let input10 = document.getElementById('input10');

input10.onblur = function () {
  let val = input10.value,
    arr = val.split(" ");

  for (let x = 0; x < arr.length; x++) {
    let newInput = document.createElement('input');

    if (isNaN(arr[x])) {
      document.getElementsByClassName('error')[0].classList.add('hidden');
      newInput.value = uswords(arr[x]);
      this.parentNode.appendChild(newInput);
    } else {
      document.getElementsByClassName('error')[0].classList.remove('hidden');
    }
  }
  div('done!');
}

// 11 задание
let input11 = document.getElementById('input11');

input11.addEventListener('blur', function bigLetter() {
  this.value = uswords(this.value);
  div(this.value);
});

// 12 задание
let input12 = document.getElementById('input12');
input12.addEventListener('blur', toUpper);

function toUpperFirstLetter(str) {
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  str = arr.join(' ');
  return str
}

function toUpper() {
  this.value = toUpperFirstLetter(this.value);
}

// 13 задание
let input13 = document.getElementById('input13');

input13.addEventListener('blur', function () {
  const value = this.value;
  longestWord(value);
});

function longestWord(count, word) {
  const arr = count.split(' ');
  let emptyWord = '';
  let emptyCount = 0;

  for (let x = 0; x < arr.length; x++) {
    let y = arr[x].length;

    if (y > emptyCount) {
      emptyCount = y;
    }

    if (y == emptyCount) {
      emptyWord = arr[x];
    }
  }
  count = emptyCount;
  word = emptyWord;

  div("Самое длинное слово - " + word, result13);
  div("и кол-во символов в нем - " + count, result13);

  return count, word
};

let result13 = document.getElementById('result13');