var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.configure(function(){
	app.use(express.static(path.join(__dirname, 'public')));
});

app.set('title', 'Awesome Webapp');

app.get('/', routes.index);


app.listen(3000);
console.log('Listening on port 3000');