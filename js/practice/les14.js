// 1 вернуть кол-во вызовов
function showCalls() {
  let calls = 1;
  return function () {
    return calls++
  }
}

let fn = showCalls();

document.getElementById('get1').onclick = () => {
  div('Вызов 1й fn(): ' + fn(), document.getElementById('result1'))
  div('Вызов 2й fn(): ' + fn(), document.getElementById('result1'))
  div('Вызов 3й fn(): ' + fn(), document.getElementById('result1'))
}

// 2 
let but2 = document.getElementsByClassName('but2');

for (let i = 0; i < but2.length; i++) {
  but2[i].onclick = funClick(this);
}

function funClick() {
  let count = 0;

  return function () {
    return this.innerHTML = ++count;
  }
}

let callCaunt = funClick();

// 3 change color абзацов
let colDiv3 = document.getElementsByClassName('colors3');
let arr3 = ['green', 'orange', 'blue', 'yellow'];
for (let i = 0; i < colDiv3.length; i++) {
  colDiv3[i].onclick = chgCol3(this);
}

function chgCol3() {
  let z = 0;
  return function () {
    if (z == arr3.length) {
      z = 0;
    };
    return this.style.background = arr3[z++]
  }
}

//4 save history inputs
let form4 = document.getElementsByClassName('form4');

for (let i = 0; i < form4.length; i++) {
  form4[i].getElementsByClassName('input4')[0].onchange = getHistory4();

  function getHistory4() {
    let arr = [];
    return function () {
      return (arr.push(this.value),
        this.value = '',
        div('История инпута - ' + i + ' : ' + arr, document.getElementById('result4'), true)
      )
    }
  }
}

//5 get random 10 num
let form5 = document.getElementsByClassName('form5')[0];
let enter5 = form5.getElementsByClassName('enter')[0];
let result5 = document.querySelector('#result5');
let obj5 = {};
let arr5 = [];
let altArr = [];

enter5.onclick = rand5();

while (Object.keys(obj5).length < 9) {
  let rand = getRandom(1, 10);

  obj5[rand] = true;
  arr5.push(rand);
}; 

iteration: for (let i = 0; i < arr5.length; i++) {
  let x = arr5[i];
  for (let z = 0; z < altArr.length; z++) {
    let y = altArr[z]; 
    if(x == y) continue iteration;
  }
  altArr.push(arr5[i]);
};

function rand5() {
  let x = 0;
  return function () {
    let td = document.createElement('td');
    return (
        td.innerHTML = altArr[x++],
        form5.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].appendChild(td)
    )
  }
};

