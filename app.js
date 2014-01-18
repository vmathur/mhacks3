var express = require('express');
var routes  = require('./routes/index');
var http    = require('http');
var path    = require('path');
var handle  = require('./routes/handle');
var data    = require('./routes/data');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/mydb');

var app = express();

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.configure(function(){
	app.use(express.static(path.join(__dirname, 'public')));
});

app.set('title', 'BuddyUp');

app.get('/', routes.index);
app.get('/update', handle.update);
app.get('/data', data.info(db));

app.listen(3000);
console.log('Listening on port 3000');