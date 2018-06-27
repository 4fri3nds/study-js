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
var div = document.createElement('div');
div.classList.add('includer');

input3.onblur = function() {
  var value = this.value,
    sumArr = 0;
    arr = value.split(',');

  if (  isNaN(arr[0]) ) {
    div.innerHTML = notNumber()
    document.getElementById('fieldset3').appendChild(div);

  } else {
    
    for(var x=0; x<arr.length; x++) {
      sumArr += parseInt(arr[x]) / arr.length;
      }
    console.log(sumArr);
    div.innerHTML = "Среднее арифметичесское введенных чисел равняется = "+sumArr;
    document.getElementById('fieldset3').appendChild(div);
    
  }
}