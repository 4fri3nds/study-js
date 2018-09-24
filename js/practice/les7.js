// 1 task
let input = document.getElementById('input');
let input2 = document.getElementById('input2');

input.onblur = function() {
  if (input.value < 100 && input.value >= 1) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
};

// 2 task
let selectText = document.getElementById('select-text');
selectText.addEventListener('mouseup', function() {
  let sel = window.getSelection().toString();
  input2.value = sel;
})

// 3 task
let numbers = document.getElementById('numbers').children;
let but = document.getElementById('but');
let char = 0;
let count = 0;

but.addEventListener('click', function() {
  for (let x = 0; x < numbers.length; x++) {
    let val = parseInt(numbers[x].innerHTML);
    if (val > char) {
      char = val;
      count = x; 
    }
  }
  numbers[count].style.background = 'green';
});

// 4 task
let indent = document.getElementById('indent');
let input3 = document.getElementById('input3');
let charIndent = 0;

indent.addEventListener('click', function() {
  charIndent++;
  input3.value = charIndent;
});

// 5 task
let input4 = document.getElementById('input4');

input4.onblur = function() {
  setInterval(quoterInput, 500);
}

function quoterInput() {
    input4.value *= input4.value;
}

//6 task
let input5 = document.getElementById('input5');
let but5 = document.getElementById('but-input5');

but5.addEventListener('click', generate);

function generate() {
  let symbols = 'qwertyuiopasdfghjklzxcvbnm';
  let str = '';

  for (let x = 0; x < 8; x++) {
    str += symbols.charAt(Math.random() * symbols.length);
  }
  
  input5.value = str;
}

//7 task
let input6 = document.getElementById('input6');
let but6 = document.getElementById('but-input6');

but6.addEventListener('click', generate2);

function generate2() {
  let symbols = 'qwertyuiopasdfghjklzxcvbnm';
  let str = '';

  for (let x = 0; x < getRandom(3, 35); x++) {
    str += symbols.charAt(Math.random() * symbols.length); }

  input6.value = str;
}

//8 task
let input7 = document.getElementById('input7');
let input7amount = document.getElementById('input7-amount');
let but7 = document.getElementById('but-input7');

but7.addEventListener('click', generate3);

function generate3() {
  let symbols = 'qwertyuiopasdfghjklzxcvbnm';
  let str = '';
  let amount = input7amount.value;

  for (let x = 0; x < amount; x++) {
    str += symbols.charAt(Math.random() * symbols.length);
  };

  input7.value = str; 
};


//9 task
let input8 = document.getElementById('input8');
let input8char = document.getElementById('input8-char');
let but8 = document.getElementById('but-input8');

but8.addEventListener('click', function() {

  let count = input8char.value;
  let str = '';

  for (let x = 0; x < 8; x++) {
    str += count.charAt(Math.random() * count.length);
  };

  input8.value = str;
});
