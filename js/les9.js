// 1 task
let checkBtn = document.getElementById('check-switch');
let checkBox = document.getElementById('check-box');

checkBtn.addEventListener('click', checkOn);

function checkOn() {
  checkBox.setAttribute('checked', 'checked');
  this.addEventListener('click', checkOff);
  this.removeEventListener('click', checkOn);
}
function checkOff() {
  checkBox.removeAttribute('checked', 'checked');
  this.removeEventListener('click', checkOff);
  this.addEventListener('click', checkOn);
}

// 2 task

