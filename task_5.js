'use strict'


/**
 *Функция-калькулятор для двух чисел
 @arg1 {number} arg1 первый операнд
 @arg2 {number} arg1 второй операнд
 @operation {string} operation знак оператора
 @returns {number} результат арифметической операции
*/
function mathOperation(arg1, arg2, operation) {
	let result = 0;
	function summ(a, b) {
		return a + b;
	}

	function subtrct(a, b) {
		return a - b;
	}

	function division(a, b) {
		return a / b;
	}

	function multip(a, b) {
		return a * b;
	}
	switch(operation) {
		case "+":
			result = summ(arg1, arg2);
			break;
		case "-":
			result = subtrct(arg1, arg2);
			break;
		case "/":
			result = division(arg1, arg2);
			break;
		case "*":
			result = multip(arg1, arg2);
			break;
		default:
			result = "Введен некорректный знак";
	}
	return result;
}


let firstNum = +prompt("Введите число №1");
let secondNum = +prompt("Введите число №2");
let symbol = prompt("Введите арифметический оператор '+' или '-' или '/' или '*'");

alert(`Результат операции "${symbol}": ${mathOperation(firstNum, secondNum, symbol)}`);
