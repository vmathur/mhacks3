exports.info = function(db) {
    return function(req, res) {
    	var collection = db.get('testData');
    	collection.find({},{},function(e,docs){
    		res.send('data', {
    			'stuff' : docs
    		});
    	});
    };
};