
function check() {
  let arr = [1, 2, 3, 4],
      triger = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 3) {
      triger = 1;
    }
  }
  
  if (triger == 1) {
    console.log('finded')
  } else {
    console.log('nope')
  }
};

check();