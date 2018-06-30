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
  divEl.innerHTML = 'Ваш результат: ' + str;

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

// getRandom function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

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
  }
};

// получить случайное число из массива
function randNumArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

//collapse menu in header
for (let i = 0; i < menu.querySelectorAll('h5').length; i++) {
  menu.querySelectorAll('h5')[i].addEventListener('click', function () {
    if (menu.className != 'active') {
      menu.className = 'active';
    } else {
      menu.className = '';
    }
  });
};

//tabs
function openMark(evt, mark) {
  let nav = document.getElementsByClassName('tabs-nav-item'),
      content = document.getElementsByClassName('tabs-content-item');

  for (let i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(' active', '');
    content[i].className = content[i].className.replace(' active', '');
  };

  evt.currentTarget.className += ' active';
  document.getElementById(mark).className += ' active';
};