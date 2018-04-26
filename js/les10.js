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
let arrNumMax = [];
let numMax = 0;

getMaxBtn.addEventListener('click', fillCells);

function fillCells() {
  getMaxBtn.removeEventListener('click', fillCells);
  getMaxBtn.addEventListener('click', getMax);

  numMax = 0;

  for (let y = 0; y < numItem.length; y++) {
      numItem[y].style.backgroundColor = 'white'
  };

  for (let x = 0; x < numItem.length; x++) {
    numItem[x].innerHTML = getRandomInt(1, 100);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

function getMax() {
  getMaxBtn.addEventListener('click', fillCells);
  getMaxBtn.removeEventListener('click', getMax);

  for(let x = 0; x < numItem.length; x++) {
    if(numItem[x].innerHTML > numMax) {
      numMax = numItem[x].innerHTML;
    };
  };

  for(let y = 0; y < numItem.length; y++ ) {
    if (numMax == numItem[y].innerHTML) {
      numItem[y].style.backgroundColor = 'green'
    }
  }
};

// 5 task
let numItemSort = document.getElementById('sort-num-table').getElementsByTagName('td');
let getSortBtn = document.getElementById('get-sort');
let arrNumSort = [];
let numSort = 0;

