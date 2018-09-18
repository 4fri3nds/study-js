// class Machine
let Machine = function () {
  this.power = false;
  this.powerOn = () => this.power = true;
  this.powerOff = () => this.power = false;

  this.water = false;
  this.waterOn = () => this.water = true;
  this.waterOff = () => this.water = false;
  
  this.coffe = false;
  this.coffeOn = () => this.coffe = true;
  this.coffeOff = () => this.coffe = false;
};

let machine = new Machine;

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
  this.powerIndicator = document.querySelector('.power-indicator');
  this.waterIndicator = document.querySelector('.water-indicator');
  this.coffeIndicator = document.querySelector('.coffe-indicator');
  this.setCoffeCup = document.getElementsByClassName('coffe-cap-size-switcher')[0];
};

Coffe.prototype.fillWater = function () {
  this.classList.toggle('active');
  coffe.waterIndicator.classList.toggle('active');
  
  if (!machine.water) {
    machine.waterOn()
  } else {
    machine.waterOff()
  }
};

Coffe.prototype.fillCoffe = function () {
  this.classList.toggle('active');
  coffe.coffeIndicator.classList.toggle('active');

  if (!machine.coffe) {
    machine.coffeOn()
  } else {
    machine.coffeOff()
  }
};

Coffe.prototype.getPower = function () {
  coffe.powerIndicator.classList.toggle('active');

  if (!machine.power) {
    machine.powerOn()
  } else {
    machine.powerOff()
  }

  coffe.powerDisplay.classList.toggle('conc');
  coffe.powerDisplay.classList.toggle('disc');

  this.classList.toggle('active');
};

// select coffe closure
Coffe.prototype.selectCoffe = function() {
  let deg = -25,
    step = -1;

  return function () {
    let elem = document.getElementsByClassName('cap-size-item');
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

// param coffe cup
Coffe.prototype.setCup = function(cap) {
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

// display coffe machine
Coffe.prototype.textDisplay = function (cl) {
  let className = coffe.powerDisplay.classList[0];
  let oldClassName = coffe.powerDisplay.classList[1];

  coffe.powerDisplay.classList = className + ' ' + cl;

  setTimeout(function(){
    coffe.powerDisplay.classList = className + ' ' + oldClassName;
  }, 1000);
};

// check cup size
Coffe.prototype.checkCupSize = function() {
  let capListItem = document.getElementsByClassName('cap-size-item');
  for (let i = 0; i < capListItem.length; i++) {
    let input = capListItem[i].getElementsByTagName('input')[0];
    if ( input.hasAttribute('checked', 'checked') ) return console.log(input.getAttribute('data-cup'));
  };
};

// prepare coffe
Coffe.prototype.getCoffe = function (output) {
  if (!machine.power) {
    return coffe.textDisplay('npow')
  }
  if (!machine.water) {
    return coffe.textDisplay('fw')
  }
  if (!machine.coffe) {
    return coffe.textDisplay('fc')
  }
  
  coffe.checkCupSize(); 

  
  // this.setCup(output)
  // this.warming(this.timeWorming);
  // this.remain();
};

let coffe = new Coffe();

Coffe.prototype.setCoffeCupClosure = Coffe.prototype.selectCoffe();

// coffe.getCoffe('small');


coffe.setCoffeCup.addEventListener('click', coffe.setCoffeCupClosure);

coffe.machinePower.addEventListener('click', coffe.getPower);

coffe.waterMount.addEventListener('click', coffe.fillWater);

coffe.coffeMount.addEventListener('click', coffe.fillCoffe);

coffe.getCoffeCup.addEventListener('click', coffe.getCoffe);