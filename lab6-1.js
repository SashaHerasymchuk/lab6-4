function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function fLoveScore () {
var score = randomInteger(1, 100);
var Name1 = prompt("Введіть ваше ім'я");
var Name2 = prompt("Введіть ім'я другої людини");
alert(Name1 + ", ваш love score з " + Name2 + " = " + score + "%");
}
console.log("Команда для виклику функції сумісності двох людей : fLoveScore()")

function calculatorBMI (weight , height) {
	var index = weight/height**2;
	if (index <= 24.9 && index >= 18.5) {
		console.log("Ваш ІМТ в межах норми і дорівнює " + index);
  } else if (index <= 18.5) {
		console.log("Ваш ІМТ менший за норму і дорівнює " + index);
	} else if (index <= 29.9 && index >= 25) {
		console.log("У вас передожеріння а ваш ІМТ дорівнює " + index);
	} else if (index <= 34.9 && index >= 30) {
		console.log("У вас ожиріння I ступеня а ваш ІМТ дорівнює " + index);
  } else if (index <= 39.9 && index >= 35) {
    console.log("У вас ожиріння II ступеня а ваш ІМТ дорівнює " + index);
	} else console.log("Введено некоректні дані!")
}
console.log("Для запуску калькулятора індексу ваги тіла напишіть calculatorBMI(weight, height) з вказаними параметрами в кілограмах та метрах відповідно");

function leapYear (year) {
	if (year % 400 == 0 ) {
	 	console.log(year + " Рік високосний");
	} else if (year % 100 == 0) {
		console.log(year + " Рік не високосний");
	} else if(year % 4 == 0) {
				console.log(year + " Рік високосний");
	} else {
		console.log(year + " Рік не високосний");
	}
}
console.log("Щоб дізнатись чи високосний зараз рік введіть leapYear(year)");

function Who_is_buying_Coffee (arr){
	name = randomInteger(0, arr.length - 1);
	console.log("Каву оплачує: " + arr[name]);
}
console.log("Щоб дізнатись, хто заплатить за каву напишіть функцію Who_is_buying_Coffee([]), де в квадратних дужках вкажіть імена в лапках");


var num = 100;
var name = "Sasha";
var surname = "Herasymchuk";
var namesurname = "Sasha Herasymchuk";
function MySequence1 () {

	if (num >= 1) {
		if (num % 3 == 0 && num % 5 == 0) {
			console.log(namesurname);
			num--;
			MySequence1 ()
		} else if (num % 5 == 0) {
			console.log(surname);
			num--;
			MySequence1 ()
		} else if ( num % 3 == 0) {
			console.log(name);
			num--;
			MySequence1 ()
		} else {
			console.log(num--);
			MySequence1 ()
		}
	}
}
console.log("Щоб вивести функцію завдання 2 введіть  MySequence1 () або MySequence2 () або MySequence3 ()");

function MySequence2 () {
	while (num >= 1) {
		if (num % 3 == 0 && num % 5 == 0) {
			console.log(namesurname);
		} else if (num % 5 == 0) {
			console.log(surname);
		} else if ( num % 3 == 0) {
			console.log(name);
		} else {
			console.log(num);
		}
	num--
	}
}

function MySequence3 () {
	for (; num >= 1; num--) {
		if (num % 3 == 0 && num % 5 == 0) {
			console.log(namesurname);
		} else if (num % 5 == 0) {
			console.log(surname);
		} else if ( num % 3 == 0) {
			console.log(name);
		} else {
			console.log(num);
		}
	}
}

function bottles_of_beer () {
	var n = 99;
	while ( n >= 1 ) {
		if (n != 1) {
			console.log(n + " bottles of beer on the wall,");
			console.log(n + " bottles of beer.");
			console.log(" Take one down and pass it around,");
			console.log(--n + " bottles of beer on the wall.")
		} else {
			console.log(n + " bottles of beer on the wall,");
			console.log(n-- + " bottles of beer.");
			console.log(" Take one down and pass it around,");
			console.log("no more bottles of beer on the wall.")
			console.log("No more bottles of beer on the wall,");
			console.log("no more bottles of beer.");
			console.log("Go to the store and buy some more,");
			console.log("99 bottles of beer on the wall.");
		}
	}
}
console.log("Для виведення тексту відомої пісні пропишіть bottles_of_beer ()")


function fibonacci(num) {
	var arr = [];

	for(var a = 0; a < num; a++) {
		arr.push(a);
	}
			console.log(arr);
}
console.log("Для виведення послідовності фібоначчі пропишіть fibonacci(num)")
