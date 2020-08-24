'use strict';

/**
* Преобразовывает число в объект.
* @param {int} num Передаваемое число от 0 до 1000.
* @returns {{units: int, tens: int, hundreds: int}} Объект содержащий
* единицы, десятки, сотни переданного числа.
*/

function tranformToObject (num) {
	if (num < 0 || num > 999 || isNaN(num) || !Number.isInteger(num)) {
		console.log("Введите целое число от 0 до 1000!");
		return;
	};	
	let obj = {
		units: 0,
		tens: 0,
		hundreds: 0
	};
	obj.units = num % 10;
	obj.hundreds = Math.floor(num / 100);
	obj.tens = Math.floor(num / 10) % 10;
	return obj;
}

let num1 = parseInt(prompt("Введите целое число от 0 до 1000"));
console.log(tranformToObject(num1));