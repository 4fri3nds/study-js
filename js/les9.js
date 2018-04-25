// 1 task
let checkBox1 = document.getElementById('check-box');
let checkBtn = document.getElementById('check-switch');

checkBtn.addEventListener('click', triger1);

function triger1() {
  attrCheck(checkBox1);
}

function attrCheck(elem) {
  if (!elem.hasAttribute('checked')) {
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
  for (let x = 0; x < checkBox2.length; x++) {
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
    value = '0' + value;
  }
  return value;
}

// 4 task
let progLang = document.getElementsByClassName('prog-lang');
let resultLang = document.getElementById('result-lang');

for (let x = 0; x < progLang.length; x++) {
  progLang[x].addEventListener('click', function () {
    div(this.value, resultLang);
  });
};

// 5 task
let chooseLang = document.getElementById('btn-study');
let progStudy = document.getElementsByClassName('prog-study');
let resultStudy = document.getElementById('result-study');

for (let x = 0; x < progStudy.length; x++) {
  progStudy[x].addEventListener('change', function () {
    if (this.checked) {
      this.setAttribute('checked', 'checked');
    } else {
      this.removeAttribute('checked', 'checked');
    }
  })
};

chooseLang.addEventListener('click', function () {
  for (let x = 0; x < progStudy.length; x++) {
    if (progStudy[x].hasAttribute('checked','checked') ) {
      div(progStudy[x].value, resultStudy);
    };
  };
});

// 6 task
