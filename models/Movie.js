// import mongoose module
var mongoose = require("mongoose") ;

// import schema
var Schema = mongoose.Schema ;

// define the movie schema
var MovieSchema = new Schema(
    {
        title: { type: String, required: true },
        synopsis: {type: String, required: true},
        cover_url: {type: String, required: true },
        release_year: {type : Number, require: true},
        director: {type: Schema.Types.ObjectId, ref: 'Director'},
        actors: [{type: Schema.Types.ObjectId, ref: 'Actor'}],
        genre: [{type: String, require: true}]
    }
);

// Export model
module.exports = mongoose.model('Movie', MovieSchema);