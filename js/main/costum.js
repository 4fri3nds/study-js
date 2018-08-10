function People() {
  let year = 2018;

  function foo(name) { // это вспомогательная функция
    return 'Age ' + name + ' is : '
  };

  this.burn = function() {
    return foo(this.name) + (year - this.age)
  }; 
};

let Ann = new People;
Ann.name = 'Anna';
Ann.age = 32;

console.log(Ann.burn());
console.log(Ann); 
