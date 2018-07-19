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

// method 1.1
var but = document.getElementById('but'),
  num = document.getElementsByClassName('num')[0];

but.addEventListener('click', function () {
  var val = parseInt(num.value); /* parseInt это преобразование строки в число */
  sum = val * val;

  console.log(val);
  console.log(typeof (val));
  console.log(sum);

  var div = document.createElement('div');
  div.className = "includer";
  div.innerHTML = "Квадрат числа " + val + " = " + sum;
  document.getElementById('include1').appendChild(div);
});

// method 1.2
function a_value(o) {
  alert(o.value);
} 

// method 1.3
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

//4 task
let el4 = '-';
for (let i = 9; i >= 1; i--) {
  el4 += (i+'-');
}

but4.onclick = () => div(el4, result4);

//5 task
let pyr5 = function () {
  for (let i = 1; i <= 10; i++) {
    let div = document.createElement('div');
    for (let z = 1; z <= i; z++) {
      let span = document.createElement('span');
      span.innerHTML = 'x';
      div.appendChild(span);
      result5.appendChild(div);
    }
  }
};

but5.onclick = () => pyr5();

//6 task
let pyr6 = function () {
  for (let i = 1; i < 10; i++) {
    let div = document.createElement('div');
    for (let z = 1; z <= i; z++) {
      let span = document.createElement('span');
      span.innerHTML = i;
      div.appendChild(span);
      result6.appendChild(div);
    }
  }
};

but6.onclick = () => pyr6();

//7 task
let pyr7 = function () {
  for (let i = 1; i < 10; i++) {
    let div = document.createElement('div');
    for (let z = 1; z <= i; z++) {
      let span = document.createElement('span');
      span.innerHTML = 'xx';
      div.appendChild(span);
      result7.appendChild(div);
    }
  }
};

but7.onclick = () => pyr7();

//8 task
let cell8 = function (str, eter) {
  for (let i = 0; i < eter; i++) {
    let div = document.createElement('div');
    if (i % 2 !== 0) {
      div.innerHTML = '&nbsp;&nbsp;';  
    }
    for (let z = 0; z < eter; z++) {      
      let span = document.createElement('span');
      span.innerHTML = str;  
      
      div.appendChild(span);
      result8.appendChild(div);
    }
  }
};

but8.onclick = () => cell8('x ', 5);