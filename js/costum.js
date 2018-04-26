var elems = document.getElementsByTagName('td');
var trigger = document.querySelector('button');
trigger.addEventListener('click', func);
var max = '';
var n = 0;

function func() {
  for (var i = 0; i < elems.length; i++) {
    if (+elems[i].innerHTML > max) {
      max = +elems[i].innerHTML;
      n = i;
    }
  }
  elems[n].style.background = 'red';
}