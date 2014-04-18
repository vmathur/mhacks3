var express = require('express');
var routes  = require('./routes/index');
var http    = require('http');
var path    = require('path');
var handle  = require('./routes/handle');
var dataGet  = require('./routes/dataGet');
var dataPost = require('./routes/dataPost');

var DB_LOCATION = process.env.MONGOHQ_URL||'localhost:27017';


console.log('using db: '+DB_LOCATION);
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient
var monk = require('monk');
// var db = monk(DB_LOCATION+'/buddyup');

var MongoClient = mongo.MongoClient;

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
app.get('/map',routes.map);
app.get('/update', handle.update);

MongoClient.connect(DB_LOCATION, function(err, db) {
	console.log('connected to db')
	console.log(db)
	app.get('/data/get/getUserWith/:stuff', dataGet.getUserWith(db));
	app.get('/data/get/getUser', dataGet.getUser(db));
	app.post('/data/post/user', dataPost.addUser(db));
});

app.listen(process.env.PORT || 3000);
console.log('Listening on port 3000');