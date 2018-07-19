
var foo = 6;

function test() {
  var foo = 7;
  function more() {
    var foo = 8;
    console.log(foo);  // 1
  }
  more();
  console.log(foo);  // 2
};

test();
​console.log(foo);​  // 3