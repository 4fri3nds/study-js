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

// function checkOn() {
//   this.addEventListener('click', checkOff);
//   this.removeEventListener('click', checkOn);
// }

// function checkOff() {
//   this.removeEventListener('click', checkOff);
//   this.addEventListener('click', checkOn);
// }

// 2 task
let checkBox2 = document.getElementsByClassName('check-box');
let checkBtn2 = document.getElementById('check-switch2');

checkBtn2.addEventListener('click', checkOnAll);

function checkOnAll() {
  for (let x = 0; x < checkBox2.length; x ++) {
    attrCheck(checkBox2[x])
  }
}
