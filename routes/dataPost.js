exports.addUser = function(db) {
    return function(req, res) {

        console.log(req);
        // Get our form values. These rely on the "name" attributes
        //var user = req.body;

        // Set our collection
        var collection = db.get('testData');
        collection.insert({
            "username" : userName,
            "email" : userEmail
        }, function (err, doc) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            }
            else {
                console.log(res);
                // If it worked, set the header so the address bar doesn't still say /adduser
                //res.location("userlist");
                // And forward to success page
                //res.redirect("userlist");
            }
        });

    }
}