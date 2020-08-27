'use strict';

function createChessBoard () {
	let body = document.querySelector('body');
	body.insertAdjacentHTML('afterbegin', '<div></div>');
	let numDivs = document.querySelector('div');
	numDivs.setAttribute('class', 'numDivs');

	let num = 8;
	const lastNum = 0;
	while (num >= lastNum) {
		let numDiv = document.createElement('div');
		numDivs.insertAdjacentElement('afterbegin', numDiv);
		numDiv.setAttribute('class', 'numDiv');
		if (num == 0) {
			numDiv.innerText = '';
		}else {
			numDiv.innerText = num;
		}
		num--;
	}

	for (let i=0; i<8; i++) {
		let rowDiv = document.createElement('div');
		body.insertAdjacentElement('beforeend', rowDiv);
		rowDiv.setAttribute('class', 'rowDiv');
		for (let j=0; j<9; j++) {
			rowDiv.insertAdjacentHTML('afterbegin', '<div></div>');
			let cellDiv = rowDiv.querySelector('div');
			if (j % 8 == 0 && j != 0) {
				cellDiv.setAttribute('class', 'cellDiv');
				cellDiv.innerText = String.fromCharCode(65+i);
		    } else {
		    	if (i % 2 != 0) {
				     if (j % 2 == 0) {
				    	cellDiv.classList.add('whiteCell');
				    } else if (j % 2 != 0) {
				    	cellDiv.classList.add('blackCell');
				    }
				} else {
					if (j % 2 == 0) {
				    	cellDiv.classList.add('blackCell');
				    } else if (j % 2 != 0) {
				    	cellDiv.classList.add('whiteCell');
				    }
				}
		    }  
		}
	}
}

createChessBoard();