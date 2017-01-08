var express = require('express');
var app  = express();

app.get('/hello', function(req, res){
	
	res.send("Hello world!");
});

app.post('/hello', function(req,res){
	
	res.send("called post method");
});

app.listen(3333);
