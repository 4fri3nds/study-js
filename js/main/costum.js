class Rand {
  constructor (name) {
    this.yourName = name;
  };

  sayHi() {
    console.log('​Rand -> sayHi -> name', this.yourName);
  }
}

let user1 = new Rand('Vasya');
let user2 = new Rand('Masha');
user1.sayHi();
user2.sayHi();