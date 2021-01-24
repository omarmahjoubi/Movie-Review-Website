var Actor = require('../models/Actor') ;

exports.actor_create = function(req,res) {
    // retrieve request json data
    var actorJson = req.body ;
    console.log("json ====> " + actorJson );
    var first_name = actorJson.first_name;
    var last_name = actorJson.last_name;
    var picture_url = actorJson.picture_url ;
    var date_of_birth = actorJson.date_of_birth;
    if (actorJson.hasOwnProperty('date_of_death') == true) {
        var date_of_death = actorJson.date_of_death ;
    } 
    var nationality =  actorJson.nationality;

    

    // create Actor entity
    if (typeof GFG_Var === 'undefined') {
        var actor = new Actor({
            first_name: first_name ,
            last_name: last_name ,
            picture_url: picture_url ,
            date_of_birth: date_of_birth ,
            nationality : nationality
        });
    } else {
        var actor = new Actor({
            first_name: first_name ,
            last_name: last_name ,
            picture_url: picture_url ,
            date_of_birth: date_of_birth ,
            date_of_death: date_of_death ,
            nationality : nationality
        });
    }
    

    // save movie to database
    actor.save(function(err, actor1) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      }) ;
}

// display list of all actors
exports.actor_list = async function(req,res) {
    
    var actors = await Actor.find() ;
    res.send(actors) ;
}