'use strict'

//Стиль es5

function Product1(name, price) {
	this.name = name;
	this.price = price;
}

Product1.prototype.make25PercentDiscount = function () {
	this.price *= (1 - 0.25);
}

const product1 = new Product1('monitor', '5000');
const product2 = new Product1('printer', '3500');

product1.make25PercentDiscount();
product2.make25PercentDiscount();




//Стиль es6

class Product2 {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	make25PercentDiscount() {
		this.price *= (1 - 0.25); 
	}
}


const product3 = new Product2('mouse', '300');
const product4 = new Product2('keyboard', '900');

product3.make25PercentDiscount();
product4.make25PercentDiscount();