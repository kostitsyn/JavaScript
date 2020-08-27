'use strict';
let images = document.querySelectorAll('img');
let buttons = document.querySelectorAll('button');
let productNames = document.querySelectorAll('.productName');


let desc = document.createElement('div');
desc.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro cupiditate dignissimos tempora, ut, adipisci totam ducimus."


for (let i = 0; i < 3; i++)
	buttons[i].addEventListener('click', function(event){
		buttons[i].innerText = "Отмена";
		images[i].style.display = 'none';
		productNames[i].insertAdjacentElement('afterend', desc);
});