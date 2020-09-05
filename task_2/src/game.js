'use strict';

class Game {
	constructor() {
		this.status = 'playing';
	}

	init(field) {
   		this.field = field;
   	}


   	/**
     * Проверка что мы "играем", что игра не закончена.
     * @returns {boolean} Вернет true, статус игры "играем", иначе false.
     */
     isStatusPlaying() {
     	return this.status === 'playing';
     }

   	/**
     * Проверка есть ли выигрышная ситуация на карте.
     * @returns {boolean} Вернет true, если игра выиграна, иначе false.
     */
     hasWon() {
     	return this.isLineWon({x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}) ||
     		this.isLineWon({x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}) ||
     		this.isLineWon({x: 0, y: 2}, {x: 1, y: 2}, {x: 1, y: 2}) ||

     		this.isLineWon({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}) ||
     		this.isLineWon({x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}) ||
     		this.isLineWon({x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}) ||

     		this.isLineWon({x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 2}) ||
     		this.isLineWon({x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 0});
     }

     /**
     * Проверка есть ли выигрышная ситуация на линии.
     * @param {{x: int, y: int}} a 1-ая ячейка.
     * @param {{x: int, y: int}} b 2-ая ячейка.
     * @param {{x: int, y: int}} c 3-я ячейка.
     * @returns {boolean} Вернет true, если линия выиграна, иначе false.
     */
     isLineWon(a, b, c) {
     	let value = this.field.mapValues[a.y][a.x] + this.field.mapValues[b.y][b.x] + this.field.mapValues[c.y][c.x];
     	return value === 'XXX' || value === '000';
     }

     /**
     * Ставит статус игры в "остановлена".
     */
     setStatusStopped() {
        this.status = 'stopped';
     }

     /**
     * Сообщает о победе.
     */
     sayWonPhase() {
        let figure = this.field.phase === "X" ? "Крестики" : "Нолики";
        alert(`${figure} выиграли!`);
     }


     /**
     * Меняет фигуру (крестик или нолик).
     */
     togglePhase() {
        this.field.phase = this.field.phase === "X" ? "0" : "X"; 
     }

}

