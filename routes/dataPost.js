exports.addUser = function(db) {
    return function(req, res) {
        

         var data = req.body;
         console.log(data.username);
         console.log(data.longitude);
         console.log(data.latitude);
         console.log(data.studying);

         res.send('thnx :)')

        // Set our collection
        // var collection = db.get('user');
        // collection.insert({
        //     "username" : data.name,
        //     "location" : {"long":data.location, "lat":data.location},
        //     "studying" : data.studying
        // }, function (err, doc) {
        //     if (err) {
        //         res.send("There was a problem adding the information to the database.");
        //     }
        //     else {
        //         res.send("Data successfully entered");
        //     }
        // });

    }
}