// 1 task
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

function alertFinished() {
  alert('Finished my homework');
}

document.getElementById('result1').addEventListener('click', function() {
  doHomework('math', alertFinished);
});

// 3 task callback 

function some_function(arg1, arg2, callback) {
  // переменная, генерирующая случайное число в интервале между arg1 и arg2 
  var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
  
  callback(my_number); //  вызываем callback, куда передаём наш результат 
};


document.getElementById('result2').addEventListener('click', function() {
  
  // вызываем функцию 
  some_function(5, 15, function (num) {
    // это - анонимная функция выполнится после вызова callback-функции 
    div("callback called! " + num, document.getElementById('displayResult2'), true);
  });

});