// obj coffe machine dom elems
let elCoffe = {
  selectCoffeCup: document.getElementsByClassName('coffe-cap-size-switcher')[0],
  socket: document.getElementsByClassName('socket')[0],
  powerDisp: document.getElementsByClassName('power-display')[0],
  getCoffe: document.getElementsByClassName('power-button')[0],
  coffeCupMenuItems: document.getElementsByClassName('cap-size-item'),
  coffeCupMenuItems: document.getElementsByClassName('cap-size-item'),
};

// class Machine
let Machine = function () {
  this.power = false;
  this.powerOn = () => this.power = true;
  this.powerOff = () => this.power = false;
};

let pow = new Machine;

// class Coffe
let Coffe = function () {
  this.mountWater = 4200;
  this.mountCoffe = 1000;
  this.timeWorming = 0;

  this.waterMount = document.querySelector('.water-mount');

  this.powerDisplay = document.querySelector('.power-display');

  this.coffeMount = document.querySelector('.mount-beans');

  this.getCoffeCup = document.querySelector('.power-button');

  this.machinePower = document.querySelector('.socket');
};

Coffe.prototype.fillWater = function () {
  this.classList.toggle('active');
};

Coffe.prototype.fillCoffe = function () {
  this.classList.toggle('active');
};

Coffe.prototype.getPower = function () {
  if (!pow.power) {
    pow.powerOn()
  } else {
    pow.powerOff()
  }

  coffe.powerDisplay.classList.toggle('conc');
  coffe.powerDisplay.classList.toggle('disc');

  this.classList.toggle('active');
}

// select coffe closure
function selectCoffe() {
  let deg = -25,
    step = -1;

  return function () {
    let elem = elCoffe.coffeCupMenuItems;
    let last = elem.length - 1;

    deg += 25;
    step++;

    if (step == last) {
      step = -1;
      deg = -25;

      elem[last].getElementsByTagName('input')[0].removeAttribute('checked', 'checked');
      elem[0].getElementsByTagName('input')[0].setAttribute('checked', 'checked');
    } else {
      elem[step].getElementsByTagName('input')[0].removeAttribute('checked', 'checked');
      elem[step].nextElementSibling.getElementsByTagName('input')[0].setAttribute('checked', 'checked');
    }
    this.style.transform = 'rotate(' + deg + 'deg)';
  };
};

let selectCoffeClosure = selectCoffe();

elCoffe.selectCoffeCup.addEventListener('click', selectCoffeClosure);

// param coffe cup
Coffe.prototype.setCup = function (cap) {
  switch (cap) {
    case ('small'):
      this.outWater = 100;
      this.outCoffe = 30;
      this.timeWorming = 3;
      this.timerStop = 2000;
      break;
    case ('medium'):
      this.outWater = 180;
      this.outCoffe = 40;
      this.timeWorming = 4;
      this.timerStop = 2500;
      break;
    case ('large'):
      this.outWater = 250;
      this.outCoffe = 50;
      this.timeWorming = 5;
      this.timerStop = 3000;
      break;
    default:
      this.outWater = 0;
  }
};

// method warming
Coffe.prototype.warming = function (i) {
  let warming = setInterval(() => console.log('Ваше кофе будет готово через : ' + i--), 500);

  setTimeout(() => (clearInterval(warming), console.log('Можете забирать коффе')), this.timerStop);
};

// method remain coffe
Coffe.prototype.remain = function () {
  this.mountCoffe -= this.outCoffe;
  this.mountWater -= this.outWater;
  console.log('Остаток кофе : ' + Math.round(this.mountCoffe / this.outCoffe) + ' чашек.');
  console.log('Остаток воды : ' + Math.round(this.mountWater / this.outWater) + ' чашек.');
};

// prepare coffe
Coffe.prototype.getCoffe = function (output) {
  // if (!this.power) {
  //   return console.log('Включите апарат в розетку');
  // }
  console.log(pow.power);

  // this.setCup(output)
  // this.warming(this.timeWorming);
  // this.remain();
};

let coffe = new Coffe();

// coffe.getCoffe('small');

coffe.machinePower.addEventListener('click', coffe.getPower);

coffe.waterMount.addEventListener('click', coffe.fillWater);

coffe.coffeMount.addEventListener('click', coffe.fillCoffe);

coffe.getCoffeCup.addEventListener('click', coffe.getCoffe);
