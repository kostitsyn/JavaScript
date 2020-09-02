'use strict';

// Подгружаем css файлы и иконки.
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="packages/animate/animate.css">');
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="task_2.css">');
document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

// Создаём объект слайдер
let slider = {
	/* {int} Номер текущего изображения.*/
	currentSlide: 0,

	/* {HTMLDivElement[]} slides элементы слайдов.*/
	sliderArr: [],

	/**
	* Запускает методы для создания блоков, наполнения их картинками, добавления иконок.
	*/
	init() {
		this.createBlocksImages();
		this.insertImages();
		this.addIcons();
	},

	/**
	* Cоздаёт блоки под картинки.
	*/
	createBlocksImages() {
		let containerEl = document.querySelector('.container');
		for (let i=6; i>=1; i--) {
			containerEl.insertAdjacentHTML('afterbegin', `<div class='block block${i} hideBlock'></div>`);
		}
	},

	/**
	* Вставляет в блоки картинки.
	*/
	insertImages() {
		this.sliderArr = document.querySelectorAll('.block');
		this.sliderArr.forEach(function(blockImage, i) {
			blockImage.insertAdjacentHTML('afterbegin', `<img class='slideOutLeft' src='images/${i+1}.jpg'>`);
		})
	},

	/**
	* Добавляет иконки прокрутки и загрузки.
	*/
	addIcons() {
		let containerEl = document.querySelector('.container');

		let loadIcon = document.createElement('i');
		loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin', 'slider-loadIcon');
		containerEl.insertAdjacentElement("afterbegin", loadIcon);

		let leftArrow = document.createElement('i');
		leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
		containerEl.insertAdjacentElement("beforeend", leftArrow);

		let rightArrow = document.createElement('i');
		rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
		containerEl.insertAdjacentElement("beforeend", rightArrow);

		this.addEventLoadIcon(loadIcon);
		this.addEventLeftArrow(leftArrow);
		this.addEventRightArrow(rightArrow);
		this.showSlide();
	},

	/**
	* Скрывает иконку загрузки при окончании загрузки страницы.
	* @param {loadIcon} loadIcon объект иконки загрузки.
	*/
	addEventLoadIcon(loadIcon) {
		window.addEventListener('load', function() {
			loadIcon.style.display = 'none';
		})
	},

	/**
	* Добавляет событие переключения слайда влево.
	*  @param {leftArrow} leftArrow объект стрелки прокрутки влево.
	*/
	addEventLeftArrow(leftArrow) {
		let a = this;
		let newFn = this.checkSlideToLeft.bind(a);
		leftArrow.addEventListener('click', function() {
			newFn();
		})
	},

	/**
	* Добавляет событие переключения слайда вправо.
	* @param {rightArrow} rightArrow объект стрелки прокрутки вправо.
	*/
	addEventRightArrow(rightArrow) {
		let b = this;
		let newFn = this.checkSlideToRight.bind(b);
		rightArrow.addEventListener('click', function() {
			newFn();
		})
	},

	/**
	* Берет слайд с текущим индексом и делаем его видимым.
	* @param {string} direction выбранное направление прокрутки слайда.
	*/
	showSlide(direction) {
		this.sliderArr[this.currentSlide].classList.remove('hideBlock');
		this.addSlideAnimation(direction);
		
	},

	/**
	* Добавляет текущему блоку класс с анимацией к слайду в зависимости от направления.
	* @param {string} direction выбранное направление прокрутки слайда.
	*/
	addSlideAnimation(direction) {
		this.sliderArr[this.currentSlide].classList.add('animated');
		if (direction == 'right') {
			this.sliderArr[this.currentSlide].classList.add('slideInRight');
		}else if (direction == 'left') {
			this.sliderArr[this.currentSlide].classList.add('slideInLeft');
		}
	},

	/**
	* Скрывает видимый блок
	* @param {string} direction выбранное направление прокрутки слайда.
	*/
	hideActiveSlide(direction) {
		document.querySelector('.block:not(.hideBlock)').classList.add('hideBlock');
		this.deleteSlideAnimation(direction);
	},


	/**
	* Удаляет текущему блоку класс с анимацией к слайду в зависимости от направления.
	* @param {string} direction выбранное направление прокрутки слайда.
	*/
	deleteSlideAnimation(direction) {
		if (document.querySelector('.slideInRight') !== null) {
			document.querySelector('.slideInRight').classList.remove('slideInRight');
		} else if (document.querySelector('.slideInLeft') !== null) {
			document.querySelector('.slideInLeft').classList.remove('slideInLeft');
		}
	},

	/**
	* Переключает слайд влево.
	*/
	checkSlideToLeft() {
		this.hideActiveSlide();
		if (this.currentSlide == 0) {
			this.currentSlide = this.sliderArr.length - 1;
		} else {
			this.currentSlide--;
		}
		this.showSlide('left');
	},

	/**
	* Переключает слайд вправо.
	*/
	checkSlideToRight() {
		this.hideActiveSlide();
		if (this.currentSlide == this.sliderArr.length - 1) {
			this.currentSlide = 0;
		} else {
			this.currentSlide++;
		}
		this.showSlide('right');
	}
}

// Инициализация слайдера.
slider.init();