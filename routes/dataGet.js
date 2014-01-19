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
    	var topic = req.params.stuff;
    	var collection = db.get('user');

    	collection.find({studying: topic},function(e,docs){
    		res.send(docs);
    	});
    };
};