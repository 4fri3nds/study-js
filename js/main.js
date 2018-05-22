function uswords(str) {
  let arr = str.toUpperCase();
  str = arr;
  return str;
}

function notNumber() {
  return "Вы ввели не число. Исправьте, пожалуйста."
}

//button 'click' create div with scenario
function div(str, location, cleaner) {
  let divEl = document.createElement('div');
  
  divEl.className = "includer";
  divEl.innerHTML = str;

  if (cleaner == true) {
    empty(location);
  }
  
  if (location !== undefined) {
    location.appendChild(divEl)
  } else {
    document.body.appendChild(divEl)
  }
}
// remove all children node
function empty(wrap) {
  while (wrap.children.length > 0) {
    wrap.removeChild(wrap.lastChild);
  }
};

function countWords(count) {
  let str = count.split(" ");
  count = str.length;
  return count
}

function children(elem) {
  var elem = elem.parentElement.getElementsByTagName('p');
  return elem
}

// Сортировка массива
function compareNumbers(a, b) {
  return a - b;
}

// Случайное число
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// getRandom function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
