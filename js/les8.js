// 1 task
let input = document.getElementById('input');
let countWrap = document.getElementById('countdown')

input.onblur = function () {
  let that = this.value;
  input.setAttribute('disabled', 'disabled');

  function countdown() {
    let count = that--;
    if (count >= 0) {
      countWrap.innerHTML = count;
    } else {
      input.value = 'done!';
      input.style.color = 'blue';
      countWrap.innerHTML = 'done!';
      countWrap.style.color = 'blue';
      stop();
    }
  }

  let interval = setInterval(countdown, 500)

  function stop() {
    window.clearInterval(interval);
  }
};

// 2 task
let colorWrap = document.getElementById('color-wrap'),
  colorSwitch = document.getElementById('color-switch');

colorSwitch.addEventListener('click', mess);

function mess() {
  this.removeEventListener('click', mess);
  this.addEventListener('click', dismiss);
  intON();
  console.log('on');
}

function intON() {
  start = setInterval(colorsOn, 500);
}

function intOFF() {
  clearInterval(start)
}

function dismiss() {
  this.addEventListener('click', mess);
  this.removeEventListener('click', dismiss);
  colorWrap.style.backgroundColor = "transparent";
  intOFF();
  console.log('off');
}

function colorsOn() {
  if (colorWrap.style.backgroundColor == "green") {
    colorWrap.style.backgroundColor = "orange";
  } else if (colorWrap.style.backgroundColor == "orange") {
    colorWrap.style.backgroundColor = "red";
  } else {
    colorWrap.style.backgroundColor = "green";
  }
};

// 3 task
let colorWrap2 = document.getElementById('color-wrap2'),
  colorSwitch2 = document.getElementById('color-switch2'),
  countColorsArr = 0,
  colorArr = ['red', 'green', 'blue'];

colorSwitch2.addEventListener('click', startSortArr);

function startSortArr() {
  sortColorsBreak = setInterval(sortColors, 500);
  this.removeEventListener('click', startSortArr);
  this.addEventListener('click', dismissSortArr);
  console.log('on');
}

function dismissSortArr() {
  clearInterval(sortColorsBreak);
  colorWrap2.style.backgroundColor = "transparent";
  this.removeEventListener('click', dismissSortArr);
  this.addEventListener('click', startSortArr);
  console.log('off');
}

function sortColors() {
  colorWrap2.style.backgroundColor = colorArr[countColorsArr];

  countColorsArr++;

  if (countColorsArr >= colorArr.length) {
    countColorsArr = 0;
  }
}

// 4 task
let textWrap = document.getElementById('text-wrap'),
  textSwitch = document.getElementById('text-switch'),
  textNumArr = ['one', 'two', 'three'],
  originalText = textWrap.innerHTML,
  textCountCtrl = 0;

textSwitch.addEventListener('click', function () {
  textWrap.innerHTML = originalText;
  
  textWrap.innerHTML = textNumArr[textCountCtrl] + textWrap.innerHTML;
  
  textCountCtrl++;

  if (textCountCtrl == textNumArr.length) {
    textCountCtrl = 0;
  }  
});

// 5 task
let inputWrap = document.getElementById('input-wrap').children,
  inputNumStart = document.getElementById('input-num-start'),
  inputNumBreak = document.getElementById('input-num-break'),
  inputNumLength = 0;
  inputNumCount = 0;

inputNumStart.addEventListener('click', function () {
  inputIndicatorInterval = setInterval(indicationStart, 300);
});

function indicationStart() {
  inputWrap[inputNumLength].value = inputNumCount;
  inputNumCount++;
  inputNumLength++;
  if (inputNumLength == inputWrap.length) {
    inputNumLength = 0;
  }
};

inputNumBreak.addEventListener('click', function () {
  clearInterval(inputIndicatorInterval);
});
