

var friends = require("../data/friends");


module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
    res.json(friends);
    });

    app.get('/api/friends/:friends', function(req, res) {
        var friends = req.params.friend;
        console.log(friends)

        for (var i = 0; i < friends.length; i++) {
            console.log() 
            
            res.json(friends[i]);
        }
        return res.json(false);
    });
    
    app.post('/api/friends', function(req, res) {
        var newFriends = req.body;

        // newFriends = userInput.name.replace(/\s+/g, "").toLowerCase();

        console.log("line28", newFriends);

        friends.push(newFriends);

        res.json(newFriends);
    });

}


