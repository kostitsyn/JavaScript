'use strict'

let a = +prompt("Введите целочисленное число №1");
let b = +prompt("Введите целочисленное число №2");
let result = 0;

if (a >= 0 && b >= 0) {
	if (a > b) {
		result = a - b;
	}
	else {
		result = b - a;
	}
} else if (a < 0 && b < 0) {
	result = a * b;
} else if ((a >= 0 && b < 0) || (a < 0 && b >=0)) {
	result = a + b;
}
alert(`Результат ${result}`);