let input = document.getElementById('input');
let input2 = document.getElementById('input2');
let input3 = document.getElementById('input3');
let input4 = document.getElementById('input4');

// 1 задание
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
// 2 задание
input2.addEventListener('blur', function () {
  var date = new Date();
  var yearNow = date.getFullYear();
  this.value = yearNow - this.value;
});

// 3 задание
input3.addEventListener('blur', function () {
  let val = this.value;
  let arr = val.split('');
  let arrRev = val.split('').reverse();
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] !== arrRev[x]) {
      console.log('this is different word');
      return;
    } else {
      console.log('palindrom');
      return
    }
  }
});

// 4 задание
input4.addEventListener('blur', function() {
  let val = this.value;
  for (let x = 0; x < val.length; x++) {
    if (val[x] == 3) {
      console.log('yep num 3 in there');
      return 
    } 
  }
  console.log('no there is NOT num 3');
  return
});


// 5 задание
document.getElementById('button').addEventListener('click', function() {
  let p = children(this);

  for (let x = 0; x < p.length; x++) {
    p[x].innerHTML = x + 1 + " " + p[x].innerHTML;
  }
});

// 6 задание
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
  
})