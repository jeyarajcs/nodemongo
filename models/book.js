var mongoose = require('mongoose');

// Book Schema

var bookSchema = mongoose.Schema({

	title:{
		type : String,
		required : true
	},
	genre:{
		type : String,
		required : true
	},
	description:{
		type : String
	},
	author:{
		type : String,
		required : true
	},
	publisher:{
		type : String
	},
	pages:{
		type: String
	},
	image_url:{
		type : String
	},
	buy_url:{
		type : String
	},
	created_date:{
		type : Date,
		default : Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books

module.exports.getBooks = function(callback, limit){

	Book.find(callback).limit(limit);

}

//Get book by id

module.exports.getBookById = function(id, callback){

	Book.findById(id, callback);

}

// Add Book

module.exports.addBook = function(book, callback){

	Book.create(book, callback);
}

// Update Book

module.exports.updateBook = function(id, book, options, callback){

	var query = {_id:id}
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url:book.image_url,
		buy_url: book.buy_url
	}

	Book.findOneAndUpdate(query, update, options, callback);
}

// Delete Book

module.exports.deleteBook = function(id, callback){

	var query  = {
		_id: id
	}

	Book.remove(query, callback);
}



/*{
	"title":"I Too Had a Love Story",
"genre":"Romance",
"description":"This novel is based on a real life event that happened with Ravinder Singh, the author. This story is about two people Ravin and khushi who are looking ",
"author":"Ravinder Singh",
"publisher":"Penguin Random House India",
"pages":"216",
"image_url":"http://ecx.images-amazon.com/images/I/511pQnokJqL._SX324_BO1,204,203,200_.jpg",
"buy_url":"http://www.amazon.in/Too-Had-Love-Story-Book/dp/0143418769/ref=sr_1_4?s=books&ie=UTF8&qid=1485799835&sr=1-4&keywords=romantic+books"
}*/