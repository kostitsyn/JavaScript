'use strict';
window.addEventListener('load', () => {
	const field = new Field();
	const game = new Game();

	field.init(game);
	game.init(field);

	field.renderMap();
	field.initEventHandlers();
})