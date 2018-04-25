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
let checkedSubj = [];
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
  checkedSubj = [];

  empty(resultStudy);

  for (let x = 0; x < progStudy.length; x++) {
    if (progStudy[x].hasAttribute('checked','checked') ) {
      checkedSubj.push(progStudy[x].value);
    };
  };

  div(checkedSubj.join(', '), resultStudy);
});

// 6 task
let makeVisible = document.getElementById('visibleInput');
let unvizInput = document.getElementById('hiddenInput');

makeVisible.addEventListener('change', trigerViz);

function trigerViz() {
  if (makeVisible.checked) {
    unvizInput.style.display = 'none';
  } else {
    unvizInput.style = { 'display': 'inline-block', 'border': '2px solid black' };
  }
};

// 7 task
let listColor = document.getElementsByClassName('list-color');
let getColor = document.getElementById('get-color');
let wrongColor = document.getElementById('wrong-color');

getColor.addEventListener('blur', function () {
  if (getColor.value > 0 && getColor.value <= listColor.length ) {
    let val = getColor.value - 1;
    let color = listColor[val].getAttribute('data-col');

    listColor[val].style.background = color;
    wrongColor.style.display = 'none';
  } else {
    wrongColor.style.display = "block";
  };
});

// 8 task
let inputTransform = document.getElementsByClassName('text-transform');
let getBold = document.getElementById('bold');
let getCross = document.getElementById('cross');
let getGreen = document.getElementById('green');
let textLorem = document.getElementById('text-lorem');

for (let x = 0; x < inputTransform.length; x++ ) {
  inputTransform[x].addEventListener('change', textTransform);
}

function textTransform() {
  if (getBold.checked) {
    textLorem.style.fontWeight = 'bold';
  } else {
    textLorem.style.fontWeight = 'normal';
  };
  if (getCross.checked) {
    textLorem.style.textDecoration = 'underline';
  } else {
    textLorem.style.textDecoration = 'none';
  };
  if (getGreen.checked) {
    textLorem.style.color = 'green';
  } else {
    textLorem.style.color = 'black';
  };
};

// 9 task
let popup = document.getElementsByClassName('popup');

for (let x=0; x < popup.length; x++) {
  let button = popup[x].querySelector('button');
  button.addEventListener('click', function () {
    this.parentNode.style.display = 'none';
  })
};