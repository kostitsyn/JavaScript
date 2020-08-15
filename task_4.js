'use strict'


/**
 *Функция сложения двух чисел
 @a {number} a первый операнд
 @b {number} b второй операнд
 @returns {number} результат арифметической операции
*/
function summ(a, b) {
	return a + b;
}


/**
 *Функция вычитания двух чисел
 @a {number} a первый операнд
 @b {number} b второй операнд
 @returns {number} результат арифметической операции
*/
function subtrct(a, b) {
	return a - b;
}


/**
 *Функция деления двух чисел
 @a {number} a первый операнд
 @b {number} b второй операнд
 @returns {number} результат арифметической операции
*/
function division(a, b) {
	return a / b;
}


/**
 *Функция умножения двух чисел
 @a {number} a первый операнд
 @b {number} b второй операнд
 @returns {number} результат арифметической операции
*/
function multip(a, b) {
	return a * b;
}


let firstNum = +prompt("Введите число №1");
let secondNum = +prompt("Введите число №2");

alert(`Результат сложения ${summ(firstNum, secondNum)}`);
alert(`Результат вычитания ${subtrct(firstNum, secondNum)}`);
alert(`Результат деления ${division(firstNum, secondNum)}`);
alert(`Результат умножения ${multip(firstNum, secondNum)}`);