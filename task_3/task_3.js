'use strict';



//Создаём объект корзина.
let basket = {
	/*Номер текущего продукта*/
	currentProduct: 0,

	/* {HTMLDivElement{}} товары.*/
	productsArr: {},

	/**Инициализируем корзину*/
	init() {
		this.getButtonsToBasket();
	},
	




	/**Получаем объект с коллекцией кнопок "В корзину".*/
	getButtonsToBasket() {
		let buttons = document.querySelectorAll('.toBasketBtn');
		this.fillObjProduct(buttons);
		this.hideTableInBasket(buttons);
		
	},

	

	/**Скрываем таблицу.*/
	hideTableInBasket(buttons) {
		let tableEl = document.querySelector('.hideTable');
		tableEl.style.display = 'none';
		this.createResultRow(tableEl);
		this.hideShowTable(tableEl);
		this.whatButton(buttons, tableEl);
	},


	// Назначаем событие показа и скрытия таблицы при нажатии на кнопку "Корзина".
	hideShowTable(tableEl) {
	let buttonBasket = document.querySelector('.buttonBasket');
	buttonBasket.addEventListener('click', function(event) {
		if (tableEl.style.display == 'none') {
			tableEl.style.display = 'block';
		}else {
			tableEl.style.display = 'none';
		}
	});
	},



	/**Создаём результирующую строку.*/
	createResultRow(table) {
		let resultRowEl = document.createElement('tr');
		resultRowEl.setAttribute('class', 'resultRowEl');
		table.appendChild(resultRowEl);
		resultRowEl.insertAdjacentHTML('afterbegin', "<td class='resultCost' colspan='2'></td>");
		resultRowEl.insertAdjacentHTML('afterbegin', "<td colspan='2'>Итого</td>");
		resultRowEl.cells[1].innerText = 0;
	},

	/**Заполняем объект товары*/
	fillObjProduct(buttons) {
		let spam = this;
		buttons.forEach(function(button) {
			spam.productsArr[button.dataset.name] = 0;
			})
		},		

	/**Определяем по какой из кнопок товара произошёл клик*/
	whatButton(buttons, tableEl) {
		let spam = this
		buttons.forEach(function(button) {
			button.addEventListener('click', function(event) {
				if (button.classList.contains('mt-1')) {
					var choiceButton = button;
				} else if (button.classList.contains('mt-2')) {
					var choiceButton = button;
				} else if (button.classList.contains('mt-3')) {
					var choiceButton = button;
				}
				spam.fillTableWithProducts(choiceButton, tableEl);
			})
		})
		this.orderCount()
	},


	/**Заполняем таблицу данными о добавленном в корзину товаре.*/
   	fillTableWithProducts(choiceButton, tableEl) {
   		let productInBasket = [];
   		for (let i=2; i<=tableEl.children.length; i++) {
   			productInBasket.push(tableEl.childNodes[i].childNodes[1].innerText);
   		}
		if (!productInBasket.includes(choiceButton.dataset.name)) {
			var productRow = document.createElement('tr');
			tableEl.appendChild(productRow);
			productRow.insertAdjacentHTML('afterbegin', `<a href='#'><i class="fa fa-trash" aria-hidden="true"></i></a>`);
			productRow.insertAdjacentHTML('afterbegin', `<td id="${choiceButton.dataset.id}">${++this.productsArr[choiceButton.dataset.name]}</td>`);
			productRow.insertAdjacentHTML('afterbegin', `<td>${choiceButton.dataset.price}</td>`);
			productRow.insertAdjacentHTML('afterbegin', `<td>${choiceButton.dataset.name}</td>`);
			productRow.insertAdjacentHTML('afterbegin', `<td>${choiceButton.dataset.id}</td>`);
			this.deleteProductInBasket(productRow, choiceButton, tableEl);
		} else {		
			document.getElementById(choiceButton.dataset.id).innerText = ++this.productsArr[choiceButton.dataset.name];
			}
		this.orderCount(tableEl, choiceButton);
		},



	/**Считаем общую сумму заказа.*/
	orderCount(tableEl, choiceButton) {
		let amount = document.querySelector(".resultCost");
		amount.innerText = +amount.innerText + +choiceButton.dataset.price;
	},

/**Назначаем событие удаления позиции в таблице корзины.*/
	deleteProductInBasket(productRow, choiceButton) {
		let spam = this;
		productRow.querySelector('a').addEventListener('click', function(event) {
			productRow.remove();
			let totalCostProd = +choiceButton.dataset.price * +spam.productsArr[choiceButton.dataset.name];
			let amount = document.querySelector(".resultCost");
			amount.innerText = +amount.innerText - +totalCostProd;
			spam.productsArr[choiceButton.dataset.name] = 0;
		})		
	}
}
	
// Инициализация корзины.
basket.init();
		

	



