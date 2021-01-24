// import mongoose module
var mongoose = require("mongoose") ;

// import schema
var Schema = mongoose.Schema ;

// define the movie schema
var ActorSchema = new Schema(
    {
        first_name: {type: String, require: true},
        last_name: {type: String, require: true},
        picture_url:{type: String, require:true}, 
        date_of_birth: {type: Date, require: true},
        date_of_death: {type: Date},
        nationality: {type: String, require: true}
    }
);


// Export model
module.exports = mongoose.model('Actor', ActorSchema);