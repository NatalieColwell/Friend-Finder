

var friends = require("../data/friends");


module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
    res.json(friends);
    });

    app.get('/api/friends/:friends', function(req, res) {
        var friends = req.params.friends;
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
        console.log(newFriends);

        var surveyArr = [];
        
        for (var i = 0; i < friends.length -1; i++) {
            var scoreMatch = 0;
            for (var j = 0; j < newFriends.score.length; j++) {
                scoreMatch += Math.abs(parseInt(friends[i].score[i]) - parseInt(newFriends.score[j]));
            }
            surveyArr.push(scoreMatch);
        }

        var compFriends = surveyArr[0];

        for (var i = 0; i < surveyArr.length; i++) {
            if(surveyArr[i] < compFriends) {
                compFriends = surveyArr[i];
            }
        }

        var match1 = surveyArr.indexOf(compFriends);
        var match2 = friends[match1];

        var name = match2.name;
        var photo = match2.photo;

        friends.push(newFriends);  
        
        // console.log("surveyArr" + surveyArr)
        // console.log("match")

        // console.log(name)
        // console.log(photo)

        res.send("Name:" + name + "<img src = ' " + photo + " ' > ");

        // res.json(newFriends);
    });

}


