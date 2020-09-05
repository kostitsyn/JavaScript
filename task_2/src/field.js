'use strict';

class Field {
	constructor() {
		this.gameTableElement = document.getElementById('game');
		this.mapValues = [
	        ['', '', ''],
	        ['', '', ''],
	        ['', '', ''],
	    ];
        this.phase = 'X';
	}


	init(game) {
		this.game = game;
	}


	/**Отрисовывает игровое поле*/
	renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    }

    /**
     * Инициализация обработчиков событий.
     */
     initEventHandlers() {
     	this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
     };

      /**
     * Обработчик события клика.
     * @param {MouseEvent} event
     */
     cellClickHandler(event) {
     	if(!this.isCorrectClick(event)) {
     		return;
     	}

        this.fillCell(event);
        if (this.game.hasWon()) {
            this.game.setStatusStopped();
            this.game.sayWonPhase();
        }
        this.game.togglePhase();
     }


     /**
     * Проверка был ли корректный клик, что описан в событии event.
     * @param {Event} event
     * @returns {boolean} Вернет true в случае если статус игры "играем", клик что описан в объекте event был
     * по ячейке и ячейка куда был произведен клик был по пустой ячейке.
     */
     isCorrectClick(event) {
     	return this.game.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
     }


     /**
     * Проверка что клик был по ячейке.
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если клик был по ячейке, иначе false.
     */
     isClickByCell(event) {
     	return event.target.tagName === "TD";
     }


     /**
    * Получает позицию ячейки.
    * @param {Event} event
    * @param {HTMLElement} event.target
    */
    getCellPosition(event) {
        let row = +event.target.dataset.row;
        let col = +event.target.dataset.col;

        return [row, col];
    }


     /**
     * Проверка что в ячейку не ставили значение (крестик или нолик).
     * @param {Event} event
     * @param {HTMLElement} event.target
     * @returns {boolean} Вернет true, если ячейка пуста, иначе false.
     */
     isCellEmpty(event) {
     	return this.mapValues[this.getCellPosition(event)[0]][this.getCellPosition(event)[1]] === '';
     }

     /**
     * Заполняет ячейку в которую кликнул пользователь в событии event.
     * @param {Event} event
     * @param {HTMLElement} event.target
     */
     fillCell(event) {
        this.mapValues[this.getCellPosition(event)[0]][this.getCellPosition(event)[1]] = this.phase;
        event.target.textContent = this.phase;
     }



}   
