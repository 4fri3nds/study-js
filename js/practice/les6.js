// 1 task
let links = document.getElementById('wrap').children;
let links2 = document.getElementById('wrap2').children;
let links3 = document.getElementById('wrap3').children;

for (let x = 0; x < links.length; x++) {
  let val = links[x].getAttribute('href');
  links[x].innerHTML = val;
}

// 2 task
for (let x = 0; x < links2.length; x++) {
  let val = links2[x].getAttribute('href');
  let begin = val.substring(0, 7);
  if (begin == 'http://') {
    links2[x].style.color = 'blue';
    links2[x].innerHTML = "&rarr;" + " " + links2[x].innerHTML;
  }
}

// 3 task
for (let x = 0; x < links3.length; x++) {
  links3[x].addEventListener('click', function () {
    let val = parseInt(this.innerHTML);
    this.innerHTML = val * val;
  })
}

// 4 task
let imgs = document.getElementsByClassName('img-container')[0].children;

for (let x = 0; x < imgs.length; x++) {
  let i = 1;

  function grow() {
    if (i < 40) {
      imgs[x].style.width = 50 + i + 'px';
      i++;
    }
  };

  imgs[x].addEventListener('mouseenter', function () {
    var growImg = setInterval(grow, 10);
  });
};

// 5 task setInterval
let printNumbersInterval = function () {
  let i = 1;
  let timerId = setInterval(function () {
    div(i, result5);
    i++;
    if (i > 5) {
      div('stop', result5);
      clearInterval(timerId);
    }
  }, 300);
};
printNumbersInterval();
let result5 = document.getElementById('result5');
// 6 task
let imgs2 = document.getElementsByClassName('img-container')[1].children;

for (let x = 0; x < imgs2.length; x++) {
  imgs2[x].addEventListener('click', mess);

  function mess() {
    this.style.width = this.width * 2 + 'px';
    this.removeEventListener('click', mess);
    this.addEventListener('click', dismiss);
  };

  function dismiss() {
    this.style.width = this.width / 2 + 'px';
    this.removeEventListener('click', dismiss);
    this.addEventListener('click', mess);
  };
};

// 7 task
let imgs3 = document.getElementsByClassName('img-container')[2].children;

for (let x = 0; x < imgs3.length; x++) {
  imgs3[x].addEventListener('click', copyImg)
};

function copyImg() {
  let clone = this.cloneNode();
  let d = document.getElementById('cloned-img').appendChild(clone);
  console.log(d);
}

// 8 task
let imgsCtrl = document.getElementsByClassName('img-ctrl');

for (let x = 0; x < imgsCtrl.length; x++) {
  imgsCtrl[x].addEventListener('click', function () {
    let img = this.parentNode.getElementsByTagName('img')[0];

    if (this.hasAttribute("data-minus")) {
      img.style.width = img.width - 5 + 'px';
    } else {
      img.style.width = img.width + 5 + 'px';
    }

  })
}

// 9 task
let input9 = document.getElementById('input9');
let countWrap = document.getElementById('countdown')

input9.onblur = function () {
  let that = this.value;
  input9.setAttribute('disabled', 'disabled');

  function countdown() {
    let count = that--;
    if (count >= 0) {
      countWrap.innerHTML = count;
    } else {
      input9.value = 'done!';
      input9.style.color = 'blue';
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

// 10 task
let colorWrap2 = document.getElementById('color-wrap2'),
  colorSwitch2 = document.getElementById('color-switch2'),
  countColorsArr = 0,
  colorArr = ['red', 'green', 'blue'];

colorSwitch2.addEventListener('click', startSortArr);

function startSortArr() {
  sortColorsBreak = setInterval(sortColors, 500);
  this.removeEventListener('click', startSortArr);
  this.addEventListener('click', dismissSortArr);
  div('on', result11, true);
}

function dismissSortArr() {
  clearInterval(sortColorsBreak);
  colorWrap2.style.backgroundColor = "transparent";
  this.removeEventListener('click', dismissSortArr);
  this.addEventListener('click', startSortArr);
  div('off', result11, true);
}

function sortColors() {
  colorWrap2.style.backgroundColor = colorArr[countColorsArr];

  countColorsArr++;

  if (countColorsArr >= colorArr.length) {
    countColorsArr = 0;
  }
}

// 11 task
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

let result11 = document.getElementById('result11');
// 12 task
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
