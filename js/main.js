function uswords(str) {
  let arr = str.toUpperCase();
  str = arr;
  return str;
}

function notNumber() {
  return "Вы ввели не число. Исправьте, пожалуйста."
}

//button 'click' create div with scenario
function div(str) {
  let divEl = document.createElement('div');

  divEl.className = "includer";
  divEl.innerHTML = str;

  document.body.appendChild(divEl)
}


function countWords(count) {
  let str = count.split(" ");
  count = str.length;
  return count
}

function children(elem) {
  var elem = elem.parentElement.getElementsByTagName('p');
  return elem
}

// metod sort - el.sort(compareNumbers)
function compareNumbers(a, b) {
  return a - b;
}

// method случайного числа
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}