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
    console.log(i);
    i++;
    if (i > 5) {
      console.log('stop');
      clearInterval(timerId);
    }
  }, 300);
};
printNumbersInterval();

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