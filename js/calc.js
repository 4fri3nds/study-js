let
  input = document.getElementsByClassName('calc__top--input')[0].getElementsByClassName('input')[0],
  maxValue = document.getElementsByClassName('max')[0],
  charAt = document.getElementsByClassName('char')[0],
  numBtn = document.getElementsByClassName('num'),
  simpleOp = document.getElementsByClassName('simple-op'),
  holdup = false,
  firstValue = 0,
  secondValue = 0,
  currentChar = '';

// нажитие на цифры
for (let x = 0; x < numBtn.length; x++) {
  numBtn[x].addEventListener('click', function () {
    let i = this.getAttribute('data-value');

    if (holdup) {
      input.value = '';
      holdup = false;
    };

    if (input.value.length <= 9) {
      input.value = input.value + i;
    } else {
      maxValue.classList = maxValue.classList + " active"; // неверно! Оно херачит активы больше одного
    }
  });
};

// находит кнопку по аттрибуту
function btnFunc(attr) {
  let buttonsCalc = document.getElementsByClassName('btn');
  for (let x = 0; x < buttonsCalc.length; x++) {
    if (attr == buttonsCalc[x].getAttribute('data-value')) {
      return buttonsCalc[x];
      break;
    }
  }
};

// удалить один символ
btnFunc('backspace').addEventListener('click', function () {
  let lastSymbol = input.value.length - 1;

  input.value = input.value.substring(lastSymbol, 0);
});

// = равно
btnFunc('equally').addEventListener('click', function () {
  secondValue = input.value;
  input.value = eval(firstValue + currentChar + secondValue);
  charAt.innerHTML = '';

  holdup = true;
});

// простые операции вычисления
for (let i = 0; i < simpleOp.length; i++) {
  simpleOp[i].addEventListener('click', function () {
    holdup = true;

    firstValue = input.value;
    currentChar = this.getAttribute('data-simple-op');

    charAt.innerHTML = this.innerHTML;
  });
};

// збросить AC
btnFunc('ac').addEventListener('click', function () {
  input.value = '';
});

// сделать чтобы лимит работал и на клавиатуре - альтернатива запретить ввод с клавиатуры
// зделать перехват на клавиатуру чтобы постоянно стоял курсор на инпуте
// синхронизировать бэкспэйс на клаве и на кальк
// ентер на =
// перехватывать лимит символов в инпуте не от кол-ва нажиманий на цифры а непостредственно от инпута
// !!! после нажатия на +-\* строка инпута не должна изчезать. Но следующий ввод на цифры сотрет предыдущее значение
// когда нажимаешь последовательно разные знаки вычисления калькулятор ломается
// после =, если мы клацаем на вычисление мы начинаем с чистой строки вводить цифры. Если на цифры мы начинаем с новой строки