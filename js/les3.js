// task 1
let input = document.getElementById('input');

input.onblur = function () {
  let val = input.value,
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

// task 2
let input2 = document.getElementById('input2');

input2.addEventListener('blur', function bigLetter() {
  this.value = uswords(this.value);
  div(this.value);
});

// task 3
let input3 = document.getElementById('input3');
input3.addEventListener('blur', toUpper);

function toUpperFirstLetter(str) {
  let arr = str.split(' ');

  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  str = arr.join(' ');
  return str
}

function toUpper() {
  this.value=toUpperFirstLetter(this.value);  
}
