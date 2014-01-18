exports.getUser = function(db) {
    return function(req, res) {
    	var collection = db.get('user');
    	collection.find({},{},function(e,docs){
    		res.send('data', docs);
    	});
    };
};