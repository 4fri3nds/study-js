// class Machine
let Machine = function () {
  this.power = false;
  this.powerOn = () => this.power = true;
  this.powerOff = () => this.power = false;
  
  this.ready = false;
  this.readyOn = () => this.ready = true;
  this.readyOff = () => this.ready = false;

  this.water = false;
  this.waterOn = function() {
    this.water = true;
    coffe.machineWaterCountElem.innerHTML = coffe.mountWater;
  } 
  this.waterOff = function() {
    this.water = false;
    coffe.machineWaterCountElem.innerHTML = "----";
  } 

  this.coffe = false;
  this.coffeOn = function() {
    this.coffe = true;
    coffe.machineCoffeCountElem.innerHTML = coffe.mountCoffe;
  } 
  this.coffeOff = function() {
    this.coffe = false;
    coffe.machineCoffeCountElem.innerHTML = "----";
  }
};

let machine = new Machine;

// class Coffe
let Coffe = function () {
  this.mountWater = 1500;
  this.mountCoffe = 100;
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
  this.elemMountCoffe = document.querySelector('.mount-coffe');
  this.coffeSmoke = document.querySelector('.coffe-cup-wrap img');
  this.machineWaterCountElem = document.querySelector('.machine-water-count');
  this.machineCoffeCountElem = document.querySelector('.machine-coffe-count');

  this.machinePower.addEventListener('click', this.getPower);
  this.setCoffeCup.addEventListener('click', this.setCoffeCupClosure);
  this.waterMount.addEventListener('click', this.fillWater);
  this.coffeMount.addEventListener('click', this.fillCoffe);
  this.getCoffeCup.addEventListener('click', this.getCoffe);
  this.elemMountCoffe.addEventListener('click', this.takeCoffe);
};

Coffe.prototype.fillWater = function () {
  this.classList.toggle('active');
  coffe.waterIndicator.classList.toggle('active');
  
  !machine.water ? machine.waterOn() : machine.waterOff();
};

Coffe.prototype.fillCoffe = function () {
  this.classList.toggle('active');
  coffe.coffeIndicator.classList.toggle('active');
  
  !machine.coffe ? machine.coffeOn() : machine.coffeOff();
};

Coffe.prototype.getPower = function () {
  coffe.powerIndicator.classList.toggle('active');
  
  !machine.power ? machine.powerOn() : machine.powerOff();
  
  coffe.powerDisplay.classList.toggle('conc');
  coffe.powerDisplay.classList.toggle('disc');

  coffe.machineWaterCountElem.classList.toggle('active');
  coffe.machineCoffeCountElem.classList.toggle('active');

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
    case ('expresso'):
      this.outWater = 100;
      this.outCoffe = 30;
      break;
    case ('americano'):
      this.outWater = 200;
      this.outCoffe = 40;
      break;
    case ('latte'):
      this.outWater = 300;
      this.outCoffe = 50;
      break;
    default:
      this.outWater = 0;
  }
};

// method remain coffe
Coffe.prototype.remain = function () {
  this.mountCoffe -= this.outCoffe;
  this.mountWater -= this.outWater;

  // console.log('Остаток кофе : ' + Math.round(this.mountCoffe / this.outCoffe) + ' чашек.');
  // console.log('Остаток воды : ' + Math.round(this.mountWater / this.outWater) + ' чашек.');

  coffe.machineWaterCountElem.innerHTML = coffe.mountWater;
  coffe.machineCoffeCountElem.innerHTML = coffe.mountCoffe;

};

// coffe.ramain();
// display coffe machine
Coffe.prototype.textDisplay = function (cl) {
  let className = coffe.powerDisplay.classList[0];
  let oldClassName = coffe.powerDisplay.classList[1];

  coffe.powerDisplay.classList = className + ' ' + cl;

  setTimeout(function(){
    coffe.powerDisplay.classList = className + ' ' + oldClassName;
  }, 1800);
};

// check cup size
Coffe.prototype.checkCupSize = function() {
  let capListItem = document.getElementsByClassName('cap-size-item');
  for (let i = 0; i < capListItem.length; i++) {
    let input = capListItem[i].getElementsByTagName('input')[0];
    if ( input.hasAttribute('checked', 'checked') ) return input.getAttribute('data-cup');
  };
};

// prepare coffe
Coffe.prototype.getCoffe = function (output) {
  // if (!machine.power) return coffe.textDisplay('npow');
  
  // if (!machine.water) return coffe.textDisplay('fw');
  
  // if (!machine.coffe) return coffe.textDisplay('fc');
  
  // if (machine.ready) return coffe.textDisplay('ready');
  
  coffe.textDisplay('wait');
  coffe.elemMountCoffe.classList = coffe.elemMountCoffe.classList[0] + ' ' + coffe.checkCupSize();
  machine.readyOn();

  coffe.setCup( coffe.checkCupSize() );
  coffe.remain();
};

Coffe.prototype.takeCoffe = function () {
  if (!machine.ready) return coffe.textDisplay('fc');
  
  machine.readyOff();

  this.style.animation = 'take-coffe 5s';
  
  setTimeout( () => coffe.elemMountCoffe.classList = coffe.elemMountCoffe.classList[0], 2500 );
  setTimeout( () => this.style.animation='', 5000 );

  setTimeout( () => coffe.coffeSmoke.style.display = 'block', 4000 );
  setTimeout( () => coffe.coffeSmoke.style.display = 'none', 10000 );
};

Coffe.prototype.setCoffeCupClosure = Coffe.prototype.selectCoffe();

let coffe = new Coffe();
