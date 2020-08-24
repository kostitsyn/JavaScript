'use strict';


//стиль es5

/*function Post(author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function() {
	this.text = prompt('Введите текст');
}



function AttachedPost(author, text, date, highlighted) {
	Post.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function() {
	this.highlighted = true;
}

const post1 = new Post('John Doe', '', '23.08.20');
const post2 = new Post('Vasya Pupkin', '', '24.08.20');

post1.edit();
post2.edit();


const post3 = new AttachedPost('John Doe', '', '24.08.20');
const post4 = new AttachedPost('Vasya Pupkin', '', '25.08.20');

post3.makeTextHighlighted();
post4.makeTextHighlighted();*/



//стиль es6

class Post {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}
	edit() {
		this.text = prompt('Введите текст');
	}
}

class AttachedPost extends Post {
	constructor(author, text, date, highlighted) {
		super(author, text, date);
		this.highlighted = false;
	}
	makeTextHighlighted() {
		this.highlighted = true;
	}

}

const post1 = new Post('John Doe', '', '23.08.20');
const post2 = new Post('Vasya Pupkin', '', '24.08.20');

post1.edit();
post2.edit();


const post3 = new AttachedPost('John Doe', '', '24.08.20');
const post4 = new AttachedPost('Vasya Pupkin', '', '25.08.20');

post3.makeTextHighlighted();
post4.makeTextHighlighted();