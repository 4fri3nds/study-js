class Tank {
  constructor(ammunition) {
    this.ammunition = ammunition;
    this._age;
  }

  toFire(x, y) {
    return this.ammunition = this.ammunition - 1;
  }

  toMove(x, y) { }

  _canFire(ammunition) {
    if (ammunition < 0) {
      return true;
    } else {
      return false;
    }
  }

  setAge(age) {
    if (age < 0 || age > 150) {
      alert('this is fake age')
    } else {
      this._age = age;
    }
  }
}

let tank = new Tank(1);
tank.toFire();
console.log(tank.ammunition)
tank.toFire();
console.log(tank.ammunition)

tank.setAge(100);
alert(tank._age)

console.log('tank work');