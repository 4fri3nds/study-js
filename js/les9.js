// 1 task
let checkBox = document.getElementById('check-box');
let checkBtn = document.getElementById('check-switch');

checkBtn.addEventListener('click', triger1);

function triger1() {
  attrCheck(checkBox);
}

function attrCheck(elem) {
  if (!elem.hasAttribute('checked')){
    elem.setAttribute('checked', 'checked');
  } else {
    elem.removeAttribute('checked', 'checked');
  }
}

// 2 task
let checkBox2 = document.getElementsByClassName('check-box');
let checkBtn2 = document.getElementById('check-switch2');

checkBtn2.addEventListener('click', checkOnAll);

function checkOnAll() {
  for (let x = 0; x < checkBox2.length; x ++) {
    attrCheck(checkBox2[x])
  }
}

// 3 task
let countChickens = document.getElementById('count_chickens');
let countCows = document.getElementById('count_cows');
let countBtn = document.getElementById('count_btn');

countBtn.addEventListener('click', getCount);

function getCount() {
  let location = document.getElementById('result-zirro');
  div('chickens' + ' = ' + addZiro(countChickens), location);
  div('cows' + ' = ' + addZiro(countCows), location);
}

function addZiro(input) {
  let value = input.value;

  while (value.length < 3) {
    value = '0' +  value;
  }

  return value;
}