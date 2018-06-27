// task 1
function task1() {
  let result1 = document.getElementById('result1');
  let check1 = document.getElementById('check1');
  let radio1 = document.getElementsByClassName('check1');

  function first() {
    return 'first'
  };

  function second() {
    return 'second'
  };


  for (let i = 0; i < radio1.length; i++) {
    radio1[i].addEventListener('click', function () {
      if (check1.checked) {
        div(first(), result1, true);
      } else if (check2.checked) {
        div(second(), result1, true);
      };
    });
  };
};
task1();

// 2 task
document.getElementById('but2').addEventListener('click', degree);

function degree(num, degree) {
  let inputNum = document.getElementById('num2');
  let inputDegree = document.getElementById('degree2');
  let result = document.getElementById('result2');

  num = inputNum.value;
  degree = inputDegree.value;

  let cur = num;

  for (let i = 0; i < degree - 1; i++) {
    cur = cur * num;
  };

  return div(cur, result, true);
};

// 3 task
let emptyEl = document.getElementById('insta-mass').getElementsByTagName('td'),
  addNum3 = document.getElementById('add-num3'),
  newMassTable = document.getElementById('new-mass').getElementsByTagName('td'),
  butResult3 = document.getElementById('but3'),
  excessNumMass = [],
  randomMass = [];

for (let i = 0; i < 10; i++) {
  randomMass.push(getRandom(1, 99))
  emptyEl[i].innerHTML = randomMass[i];
}

addNum3.addEventListener('click', function () {
  if (this.previousElementSibling.value !== '' && hasElem(randomMass, this.previousElementSibling.value)) {
    excessNumMass.push(this.previousElementSibling.value);
    addNewEl3.call(this);
  } else {
    document.getElementById('err-upsent').style.display = 'block';
    document.getElementById('err-notvalid').style.display = 'block';
  };
});

function addNewEl3() {
  document.getElementById('err-notvalid').style.display = 'none';
  document.getElementById('err-upsent').style.display = 'none';

  let el = document.createElement('input');
  el.classList = 'sq';

  this.parentElement.insertBefore(el, this);
}

butResult3.addEventListener('click', displayNewMass);

function displayNewMass() {

  for (let i = 0; i < excessNumMass.length; i++) {
    for (let z = 0; z < randomMass.length; z++) {
      if (excessNumMass[i] == randomMass[z]) {
        randomMass.splice(z, 1);
      }
    }
  }

  for (let i = 0; i < randomMass.length; i++) {
    let newTd = newMassTable[0].cloneNode();
    newMassTable[0].parentElement.appendChild(newTd);
    newMassTable[i].innerHTML = randomMass[i];
  };

  newMassTable[0].parentElement.lastChild.remove();
}

// 4 Вывести разницу массивов
let but4 = document.getElementById('but4');
let firstDiffMass = [11, 45, 33, 43, 55, 99, 77, 88, 99, 77];
let secondDiffMass = [12, 13, 99, 55, 34, 77, 34, 44, 35, 48];
let finalDiffMass = [];

dispArr(firstDiffMass, but4);
dispArr(secondDiffMass, but4);

function getDiff(arr1, arr2) {
  let difference = arr1
    .filter(x => arr2.indexOf(x) == -1)
    .concat(arr2.filter(x => arr1.indexOf(x) == -1));

  return difference;
};

but4.onclick = function() {
  dispArr(getDiff(firstDiffMass, secondDiffMass), but4.nextSibling);
};

// 5 получить случайное число с массива
let but5 = document.getElementById('but5');
let getRandomNumMass = [11, 45, 33, 43, 55, 99, 77, 88, 99, 77];

dispArr(getRandomNumMass, but5);

but5.onclick = function () {
  dispArr([ randNumArr(getRandomNumMass) ], but5.nextSibling);
};

// 6 убрать дубли
let but6 = document.getElementById('but6');
let delDuplic = [55, 45, 33, 45, 55, 99, 77, 88, 99, 77];
let objDelDuplic = {};

dispArr(delDuplic, but6);

but6.onclick = function() {
  dispArr(Object.keys(objDelDuplic), but6.nextSibling);
};

for (let i = 0; i < delDuplic.length; i++) {
  objDelDuplic[delDuplic[i]] = true;
}

// 7 перемешать числа
let but7 = document.getElementById('but7');
let shuffleArr = [];
let shuffleArrRand = [];

for (let i = 0; i < 10; i++) {
  shuffleArr.push(getRandom(10,100));
};

dispArr(shuffleArr, but7);

but7.onclick = function() {
  for (let i = 0; i < shuffleArr.length; i++) {
    shuffleArrRand.push(shuffleArr[getRandom(1, 10)]);
  };
    
  dispArr(shuffleArrRand, but7.nextSibling);
};

