function uswords(str) {
  let arr = str.toUpperCase();
  str = arr;
  return str;
}

function notNumber() {
  return "Вы ввели не число. Исправьте, пожалуйста."
}

//button 'click' create div with scenario
function div(str, location, cleaner, lab) {
  let divEl = document.createElement('div');
  let lable = 'Ваш результат: ' + '<br/>';

  if (lab != true) {
    lable = '';
  }

  divEl.style.transition = 0.5 + "s";
  divEl.className = "includer";
  divEl.innerHTML = lable + str;

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
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// флаг. Наличия элемента в массиве
function hasElem(mass, num) {
  for (let i = 0; i < mass.length; i++) {
    if (num == mass[i]) {
      return true;
    }
  }
  return false;
};

// вывести массив в табличку dom
function dispArr(mass, elem) {
  let table = document.createElement('table'),
      tr = document.createElement('tr');

  elem.parentElement.insertBefore(table, elem);
  table.appendChild(tr);

  for (let i = 0; i < mass.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = mass[i];
  };
};

// получить случайное число из массива
function randNumArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
