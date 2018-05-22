// task 1
function task1() {
  let result1 = document.getElementById('result1');
  let check1 = document.getElementById('check1');
  let radio1 = document.getElementsByClassName('check1');

  function first() {
    return 'first'
  };

  function second() {
    return 'second'
  };


  for (let i = 0; i < radio1.length; i++) {
    radio1[i].addEventListener('click', function () {
      if (check1.checked) {
        div(first(), result1, true);
      } else if (check2.checked) {
        div(second(), result1, true);
      };
    });
  };
};
task1();

// 2 task
document.getElementById('but2').addEventListener('click', degree);

function degree(num, degree) {
  let inputNum = document.getElementById('num2');
  let inputDegree = document.getElementById('degree2');
  let result = document.getElementById('result2');
  
  num = inputNum.value;
  degree = inputDegree.value;

  let cur = num;

  for (let i = 0; i < degree - 1; i++) {
    cur = cur * num;
  };

  return div(cur, result, true);
};

// 3 task
