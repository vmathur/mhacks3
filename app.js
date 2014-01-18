var express = require('express')
  , routes = require('./routes')
  , http = require('http')

var app = express();

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.set('title', 'Awesome Webapp');

app.get('/', routes.index);


app.listen(3000);
console.log('Listening on port 3000');