const db = require("../models");
const fs = require('fs');

module.exports = function(app){

    //login page
    app.get('/', (req, res) => {
        res.render('login', { user: req.user });
    });

    app.get("/logout", function (req,res){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    })

    // Members page (dashboard)
    app.get('/members', function (req, res) {
        fs.readFile('./public/details.json', 'utf8', (err, jsonString) => {
            if (err) {
                console.log("Error reading file from disk:", err)
            return
            }
            try {
                const user = JSON.parse(jsonString)
                //console.log("User is:", user.id) 
                let query = user.id
                //console.log("fs userId" + query);
                db.user.findOne({
                    where: query,
                    include: [
                     {
                         model: db.bookmark,
                         include: [
                             {
                                 model: db.tag,
                             }
                         ],
                 }]
                }).then((user)=>{
                 const result = JSON.parse(JSON.stringify(user))
                    //res.json(user)
                    res.render('index', result)
                })
            } catch(err) {
                console.log('Error parsing JSON string:', err)
            }
        })

})


}