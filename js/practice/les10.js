// 1 task
let addCountry = document.getElementById('add-country');
let inputCountry = document.getElementById('input-country');
let listCountry = document.getElementById('country-list');

addCountry.addEventListener('click', function () {
  let arr = inputCountry.value.split(',');

  for (let x = 0; x < arr.length; x++) {
    let listItem = listCountry.querySelector('li').cloneNode();
    listCountry.appendChild(listItem);

    let z = listCountry.querySelectorAll('li')[x];
    z.innerHTML = arr[x];
  }
  listCountry.lastChild.remove();
});

//2 task
let inputCountry2 = document.getElementById('input-country2');
let listCountry2 = document.getElementById('country-list2');

inputCountry2.addEventListener('keypress', function () {
  if (event.which == 13) {
    div(inputCountry2.value, listCountry2);
  };
});

// 3 task
let cutLorem = document.getElementById('cut-lorem');
let textLorem = document.getElementsByClassName('text-lorem');

cutLorem.addEventListener('click', function () {
  for (let x = 0; x < textLorem.length; x++) {
    textLorem[x].innerHTML = textLorem[x].innerHTML.slice(0, 10);
  };
})

// 4 task
let numItem = document.getElementById('random-num-table').getElementsByTagName('td');
let getMaxBtn = document.getElementById('get-max');
let numMax = 0;

getMaxBtn.addEventListener('click', fillCells);

function fillCells() {
  this.removeEventListener('click', fillCells);
  this.addEventListener('click', getMax);

  numMax = 0;

  for (let y = 0; y < numItem.length; y++) {
    numItem[y].style.backgroundColor = 'white'
  };

  fill(numItem, null)
};

function fill(cells, arr) {
  for (let x = 0; x < cells.length; x++) {
    cells[x].innerHTML = getRandom(1, 100);

    if (arr !== null) {
      arr.push(cells[x].innerHTML);
    };

  };
};

function getMax() {
  this.addEventListener('click', fillCells);
  this.removeEventListener('click', getMax);

  for (let x = 0; x < numItem.length; x++) {
    if (numItem[x].innerHTML > numMax) {
      numMax = numItem[x].innerHTML;
    };
  };

  for (let y = 0; y < numItem.length; y++) {
    if (numMax == numItem[y].innerHTML) {
      numItem[y].style.backgroundColor = 'green'
    }
  }
};

// 5 task
let numItemSort = document.getElementById('sort-num-table').getElementsByTagName('td');
let getSortBtn = document.getElementById('get-sort');
let arrNumSortPrimary = [];
let arrNumSort = [];
let numSort = 0;

getSortBtn.addEventListener('click', sortCells);

function sortCells() {
  this.removeEventListener('click', sortCells);
  this.addEventListener('click', sortNum);

  arrNumSortPrimary = [];

  fill(numItemSort, arrNumSortPrimary);
};

function sortNum() {
  this.addEventListener('click', sortCells);
  this.removeEventListener('click', sortNum);

  arrNumSortPrimary.sort(compareNumbers);

  for (let x = 0; x < numItemSort.length; x++) {
    numItemSort[x].innerHTML = arrNumSortPrimary[x]
  };
};

// 6 task
let numItemSum = document.getElementById('sum-num-table').getElementsByTagName('td');
let getSumBtn = document.getElementById('get-sum');
let sumCount = 0;

getSumBtn.addEventListener('click', fillSum);

function fillSum() {
  if (document.getElementsByClassName('sum-cells').length !== 0) {
    document.getElementsByClassName('sum-cells')[0].remove();
  }

  this.removeEventListener('click', fillSum);
  this.addEventListener('click', calcSum);

  fill(numItemSum, null);

}

function calcSum() {
  this.addEventListener('click', fillSum);
  this.removeEventListener('click', calcSum);

  let tr = document.createElement('tr');

  let lengthTable = document.getElementById('sum-num-table').getElementsByTagName('tr')[0].querySelectorAll('td');

  let y;

  for (let x = 0; x < lengthTable.length; x++) {

    sumCount = 0;

    for (y = 0; y < 3; y++) {
      sumCount += parseInt(document.getElementById('sum-num-table').getElementsByTagName('tr')[y].getElementsByTagName('td')[x].innerHTML);
    };

    let td = document.createElement('td');

    tr.classList = "sum-cells";
    td.innerHTML = sumCount;

    document.getElementById('sum-num-table').appendChild(tr);
    tr.appendChild(td);
  };
};

// 7 task
let cellsSum = document.getElementById('sum-cells-table').getElementsByTagName('td'),
  getCellsSumBtn = document.getElementById('get-cells-sum'),
  fillCellsBtn = document.getElementById('random-cells'),
  checkReverseCells = document.getElementById('select-all-cells'),
  resultDiff = document.getElementById('result-dif'),
  showArr = document.getElementById('show-arr'),
  sumCellsCount = 0,
  sumCellsArr = [];

function triggerClassActive(elem, arr, elArr) {
  elem.classList.toggle('active');

  if (elem.classList.contains('active')) {
    arr.push(elem.innerHTML);
  } else {
    for (let x = 0; x < arr.length; x++) {
      if (elem.innerHTML == arr[x]) {
        arr.splice(x, 1);
      }
    }
  }
};

function takeSumCells(arr) {
  for (let x = 0; x < arr.length; x++) {
    sumCellsCount += parseInt(arr[x]);
  };
};

for (let x = 0; x < cellsSum.length; x++) {
  cellsSum[x].addEventListener('click', function () {
    triggerClassActive(this, sumCellsArr, x);
  });
};

fillCellsBtn.addEventListener('click', function () {
  sumCellsCount = 0;
  sumCellsArr = [];

  empty(showArr);
  empty(document.getElementById('result-cells-sum'));

  for (let x = 0; x < cellsSum.length; x++) {
    cellsSum[x].classList = '';
  }

  fill(cellsSum, null);
});

getCellsSumBtn.addEventListener('click', function () {
  sumCellsCount = 0;

  div("Выбранные числа: " + sumCellsArr, showArr, true);

  takeSumCells(sumCellsArr);

  empty(document.getElementById('result-cells-sum'));
  div("Сумма выбраных чисел: " + sumCellsCount, document.getElementById('result-cells-sum'), false);
});

checkReverseCells.addEventListener('change', function () {
  sumCellsCount = 0;
  sumCellsArr = [];

  newArrByClass();

  for (let x = 0; x < cellsSum.length; x++) {
    cellsSum[x].classList.toggle('active');
  };
});

function newArrByClass() {
  for (let x = 0; x < cellsSum.length; x++) {
    if (!cellsSum[x].classList.contains('active')) {
      sumCellsArr.push(cellsSum[x].innerHTML);
    };
  };
};

// 8 task
let changeCells = document.getElementById('change-cells-table').getElementsByTagName('td');

for (let x = 0; x < changeCells.length; x++) {
  changeCells[x].addEventListener('click', addElems)
};

function addElems() {
  createInnerElems(this);

  this.removeEventListener('click', addElems);
  this.getElementsByClassName('btn-save-val')[0].addEventListener('click', changeValue);
};

function changeValue() {
  let newValue = this.parentNode.getElementsByClassName('input-new-val')[0].value;
  let that = this;
  
  that.parentNode.innerHTML = newValue;
  
  that.removeEventListener('click', changeValue);
  // that.parentNode.addEventListener('click', addElems);
  
};

function createInnerElems(value) {
  let input = document.createElement('input');
  let button = document.createElement('button');

  input.classList = 'input-new-val';
  input.value = value.innerHTML;
  value.innerHTML = '';
  button.classList = 'btn-save-val';
  button.innerHTML = 'save result';

  value.appendChild(input);
  value.appendChild(button);
};

