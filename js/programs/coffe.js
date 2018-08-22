let Machine = function () {
  this.power = false;
  this.powerOn = () => this.power = true;
  this.powerOff = () => this.power = false;
};

let pow = new Machine;
pow.powerOn();
console.log(pow.power);

let CoffeMachine = function () {
  this.mountWater = 4200;
  this.mountCoffe = 1000;
  this.timeWorming = 0;
};

CoffeMachine.prototype.warming = function (i) {
  let warming = setInterval(() => console.log('Ваше кофе будет готово через : ' + i--), 500);

  setTimeout(() => (clearInterval(warming), console.log('Можете забирать коффе')), this.timerStop);
};

CoffeMachine.prototype.remain = function () {
  this.mountCoffe -= this.outCoffe;
  this.mountWater -= this.outWater;
  console.log('Остаток кофе : ' + Math.round(this.mountCoffe / this.outCoffe) + ' чашек.');
  console.log('Остаток воды : ' + Math.round(this.mountWater / this.outWater) + ' чашек.');
};

CoffeMachine.prototype.getCoffe = function (output) {
  switch (output) {
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

  this.warming(this.timeWorming);
  this.remain();
};

let coffe = new CoffeMachine();

coffe.getCoffe('small');
