// import mongoose module
var mongoose = require("mongoose") ;

// import schema
var Schema = mongoose.Schema ;

// define the movie schema
var ReviewSchema = new Schema(
    {
        rating: {type: nummbre, enum: [0,1,2,3,4,5]},
        content: {type: String, require: true},
        movie: {type: Schema.Types.ObjectId, ref: 'Movie',
            validate() {
                return this.movie || this.director || this.actor
            }
        },
        director: {type: Schema.Types.ObjectId, ref: 'Director',
            validate() {
                return this.movie || this.director || this.actor
            }
        },
        director: {type: Schema.Types.ObjectId, ref: 'Director',
            validate() {
                return this.movie || this.director || this.actor
            }
        }
    }
);

// Export model
module.exports = mongoose.model('Review', ReviewSchema);
        