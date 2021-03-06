var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
}

app.use(allowCrossDomain);

Genre = require('./models/genre');
Book = require('./models/book');
// connect to mongoose
var port = process.env.PORT || 8080;
mongoose.connect("mongodb://localhost/restbookstore");

//mongoose.connect("mongodb://jeyarajbookstore:jeyarajbookstore@ds137729.mlab.com:37729/bookstore")
var db = mongoose.connection;

app.get('/', function(req, res){

	//res.send("Hello world");
	res.render('index.html');

})

app.get('/api/genres', function(req, res){

	Genre.getGenres(function(err, genres){

		if(err){
			throw err;
		}
		res.json(genres);
	});

});

app.post('/api/genres', function(req, res){

	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){

		if(err){
			throw err;
		}
		res.json(genre);
	});

});

app.put('/api/genres/:_id', function(req, res){

	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){

		if(err){
			throw err;
		}
		res.json(genre);
	});

});

app.delete('/api/genres/:_id', function(req, res){

	var id = req.params._id;
	Genre.deleteGenre(id, function(err, genre){

		if(err){
			throw err;
		}
		res.json(genre);
	});

});

app.get('/api/books', function(req, res){

	Book.getBooks(function(err, books){

		if(err){
			throw err;
		}
		res.json(books);
	});

});

app.get('/api/books/:_id', function(req, res){

	Book.getBookById(req.params._id, function(err, book){

		if(err){
			throw err;
		}
		res.json(book);
	});

});

app.post('/api/books', function(req, res){

	var book = req.body;
	Book.addBook(book, function(err, book){
		if(err)
		{
			throw err;
		}
		res.json(book);
	})
});

app.put('/api/books/:_id', function(req, res){

	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, function(err, book){

		if(err){
			throw err;
		}
		res.json(book);
	});

});

app.delete('/api/books/:_id', function(req, res){

	var id = req.params._id;
	Book.deleteBook(id, function(err, book){
		if(err)
		{
			throw err;
		}
		res.json(book);
	})
});

app.listen(port);
console.log("app running on port 8080");
