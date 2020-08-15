'use strict'

/**
 *Функция подбирающая правильный падеж для слова "рубль"
 *в зависимости от введенной суммы.
 @arg1 {string} arg1 сумма вклада
 @returns {string} соответствующее сумме вклада наклонение слова "рубль"
*/
function getAnswer(arg1) {
	let word;
	if (arg1 >= 5 && arg1 <= 20) {
		word = "рублей";
	} else {
		let lastNum = arg1.charAt(arg1.length - 1);
		switch(lastNum) {
			case "1":
				word = "рубль";
				break;
			case "2":
			case "3":
			case "4":
				word = "рубля";
				break;
			case "0":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				word = "рублей";
				break;
		default:
			throw new Error("Введите корректную сумму!");
		}
	}
	return `Ваша сумма в ${arg1} ${word} успешно зачислена`
}

let quantity = prompt("Какую сумму Вы хотите положить на счёт?");

alert(getAnswer(quantity));