var   express = require('express');
var   routes = require('./routes/index');
var   http = require('http');
var   path = require('path');
var   handle = require('./routes/handle');

//mongo stuff
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

app.set('title', 'Awesome Webapp');

app.get('/', routes.index);
app.get('/update', handle.update);
//app.get('/userlist', routes.userlist(db));

app.listen(3000);
console.log('Listening on port 3000');