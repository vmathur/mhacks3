exports.getUser = function(db) {
    return function(req, res) {
    	var collection = db.get('user');
    	collection.find({},{},function(e,docs){
    		res.send('data', docs);
    	});
    };
};

exports.getUserWith = function(db) {
    return function(req, res) {
    	var studying = req.params.stuff;
    	console.log(studying);
    	var collection = db.get('user');

    	collection.find({studying: 'Science'},function(e,docs){
    		res.send('data',docs)
    	});
    	// collection.find({},{},function(e,docs){
    	// 	res.send('data', docs);
    	// });
    };
};