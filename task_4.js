'use strict';

const products = [
	 {
		 id: 3,
		 price: 200,
	 },
	 {
		 id: 4,
		 price: 900,
	 },
	 {
		 id: 1,
		 price: 1000,
	 },
 ];
let discountedProducts15 = products.slice();

function getDiscountedPrice(product) {
	product.price *= 1 - 0.15;
}

discountedProducts15.forEach(getDiscountedPrice);
 	
console.log(discountedProducts15);