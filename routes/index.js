// exports.index = function(req, res){
//  res.redirect('/index.html');
// };


exports.index = function(req, res){
  var body = 'Hey durr World';
  res.end(body);
}