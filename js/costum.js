
var elem = document.getElementById('elem');

function func(surname, name) {
  alert(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()
func = func.bind(elem);

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'