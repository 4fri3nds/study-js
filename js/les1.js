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