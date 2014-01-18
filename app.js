var express = require('express');
var routes  = require('./routes/index');
var http    = require('http');
var path    = require('path');
var handle  = require('./routes/handle');
var dataGet  = require('./routes/dataGet');
var dataPost = require('./routes/dataPost');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/buddyup');

var app = express();

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.configure(function(){
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(express.bodyParser());
});

app.set('title', 'BuddyUp');

app.get('/', routes.index);
app.get('/update', handle.update);

//app.get('/data/get/user', dataGet.getUserWith())
app.get('/data/get/user', dataGet.getUser(db));
app.post('/data/post/user', dataPost.addUser(db));

app.listen(3000);
console.log('Listening on port 3000');