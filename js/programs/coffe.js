// Machine
let Machine = function () {
  this.mountWater = 0;
  this.mountCoffe = 0;
  this.maxWater = 400;
  this.maxCoffe = 60;
  
  this.power = false;
  this.powerOn = () => this.power = true;
  this.powerOff = () => this.power = false;
  
  this.ready = false;
  this.readyOn = () => this.ready = true;
  this.readyOff = () => this.ready = false;

  this.water = false;
  this.waterOn = () => this.water = true;
  this.waterOff = () => this.water = false;

  this.coffe = false;
  this.coffeOn = () => this.coffe = true;
  this.coffeOff = () => this.coffe = false;
};

// Coffe
let Coffe = function () {
  Machine.call(this); //наследование контекста

  this.machinePower =           document.querySelector('.socket');
  this.waterMount =             document.querySelector('.water-mount');
  this.coffeMount =             document.querySelector('.mount-beans');
  this.getCoffeCup =            document.querySelector('.power-button');
  this.elemMountCoffe =         document.querySelector('.mount-coffe');
  this.powerDisplay =           document.querySelector('.power-display');
  this.coffeSmoke =             document.querySelector('.coffe-cup-wrap img');
  this.powerIndicator =         document.querySelector('.power-indicator');
  this.waterIndicator =         document.querySelector('.water-indicator');
  this.coffeIndicator =         document.querySelector('.coffe-indicator');
  this.machineWaterCountElem =  document.querySelector('.machine-water-count');
  this.machineCoffeCountElem =  document.querySelector('.machine-coffe-count');
  this.setCoffeCup =            document.querySelector('.coffe-cap-size-switcher');
  this.handspikeCoffeCup =      document.querySelectorAll('.cap-size-item');


  this.machinePower.addEventListener('click',   this.getPower.bind(this) );
  this.waterMount.addEventListener('click',     this.fillWater.bind(this) );
  this.coffeMount.addEventListener('click',     this.fillCoffe.bind(this) );
  this.getCoffeCup.addEventListener('click',    this.getCoffe.bind(this) );
  this.elemMountCoffe.addEventListener('click', this.takeCoffe.bind(this) );
  this.setCoffeCup.addEventListener('click',    this.setCoffeCupClosure.bind(this) );
};

Coffe.prototype.fillWater = function () {
  this.waterMount.classList.toggle('active');
  this.waterIndicator.classList.toggle('active');
  
  this.machineWaterCountElem.innerHTML = coffe.mountWater;
  
  !this.water ? this.waterOn() : this.waterOff();
};


Coffe.prototype.fillCoffe = function () {
  this.coffeMount.classList.toggle('active');
  this.coffeIndicator.classList.toggle('active');
  
  this.machineCoffeCountElem.innerHTML = this.mountCoffe;
  
  !this.coffe ? this.coffeOn() : this.coffeOff();
};

Coffe.prototype.getPower = function () {
  this.powerIndicator.classList.toggle('active');
  
  !this.power ? this.powerOn() : this.powerOff();

  this.powerDisplay.classList.toggle('conc');
  this.powerDisplay.classList.toggle('disc');
  this.machineWaterCountElem.classList.toggle('active');
  this.machineCoffeCountElem.classList.toggle('active');
  this.machinePower.classList.toggle('active');
};

// select coffe closure
Coffe.prototype.selectCoffe = function() {
  let handspikeRadiusDeg = -25,
      handspikeStep = -1;
  return function () {
    let last = this.handspikeCoffeCup.length - 1;

    handspikeRadiusDeg += 25;
    handspikeStep++;

    if (handspikeStep == last) {
      handspikeStep = -1;
      handspikeRadiusDeg = -25;
      this.handspikeCoffeCup[last].getElementsByTagName('input')[0].removeAttribute('checked', 'checked');
      this.handspikeCoffeCup[0].getElementsByTagName('input')[0].setAttribute('checked', 'checked');
    } else {
      this.handspikeCoffeCup[handspikeStep].getElementsByTagName('input')[0].removeAttribute('checked', 'checked');
      this.handspikeCoffeCup[handspikeStep].nextElementSibling.getElementsByTagName('input')[0].setAttribute('checked', 'checked');
    };

    this.setCoffeCup.style.transform = 'rotate(' + handspikeRadiusDeg + 'deg)';
  };
};

// call back function setCup
Coffe.prototype.setCup = function(getCoffeSize) {
  switch (getCoffeSize) {
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

// method - remain coffe
Coffe.prototype.remain = function () {
  this.mountCoffe -= this.outCoffe;
  this.mountWater -= this.outWater;

  // console.log('Остаток кофе : ' + Math.round(this.mountCoffe / this.outCoffe) + ' чашек.');
  // console.log('Остаток воды : ' + Math.round(this.mountWater / this.outWater) + ' чашек.');

  this.machineWaterCountElem.innerHTML = this.mountWater;
  this.machineCoffeCountElem.innerHTML = this.mountCoffe;
};

// display coffe machine
Coffe.prototype.textDisplay = function(getCoffeCup) {
  let className = this.powerDisplay.classList[0];
  let oldClassName = this.powerDisplay.classList[1];

  this.powerDisplay.classList = className + ' ' + getCoffeCup;

  setTimeout(
    () => this.powerDisplay.classList = className + ' ' + oldClassName, 1800);
};

// check cup size
Coffe.prototype.checkCupSize = function() {
  let capListItem = document.getElementsByClassName('cap-size-item');

  for (let i = 0; i < capListItem.length; i++) {
    let input = capListItem[i].getElementsByTagName('input')[0];
    if ( input.hasAttribute('checked', 'checked') ) return input.getAttribute('data-cup');
  };

};

//

// prepare coffe
Coffe.prototype.getCoffe = function () {
  if (!this.power) return this.textDisplay('npow');
  
  if (!this.water || this.mountWater <= 300) return this.textDisplay('fw');
  
  if (!this.coffe || this.mountCoffe <= 50) return this.textDisplay('fc');
  
  if (this.ready) return this.textDisplay('ready');

  this.textDisplay('wait');

  this.elemMountCoffe.classList = 
    this.elemMountCoffe.classList[0] + ' ' + this.checkCupSize();

  this.setCup( this.checkCupSize() );

  this.remain();
  this.readyOn();
};

Coffe.prototype.takeCoffe = function () {
  if (!this.ready) return this.textDisplay('fc');
  
  this.readyOff();

  this.elemMountCoffe.style.animation = 'take-coffe 5s';
  
  setTimeout( () => this.elemMountCoffe.classList = this.elemMountCoffe.classList[0], 2500 );
  setTimeout(() => this.elemMountCoffe.style.animation='', 5000 );

  setTimeout( () => this.coffeSmoke.style.display = 'block', 4000 );
  setTimeout( () => this.coffeSmoke.style.display = 'none', 10000 );
};

Coffe.prototype.setCoffeCupClosure = Coffe.prototype.selectCoffe();

let machine = new Machine;
let coffe = new Coffe();
