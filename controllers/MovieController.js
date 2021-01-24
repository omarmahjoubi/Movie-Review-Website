var Movie = require('../models/Movie') ;


// display list of all movies
exports.movie_list = async function(req,res) {
    
    var movies = await Movie.find() ;
    res.send(movies) ;
}

exports.movie_create = function(req,res) {
    // retrieve request json data
    var movieJson = req.body ;
    console.log("json ====> " + movieJson );
    var title = movieJson.title;
    var synopsis = movieJson.synopsis;
    var cover_url = movieJson.cover_url ;
    var release_year = movieJson.release_year ;
    var genre = movieJson.genre ;

    // create Movie entity
    var movie = new Movie({
        title: title ,
        synopsis: synopsis ,
        cover_url: cover_url ,
        release_year: release_year ,
        genre : genre
    })

    // save movie to database
    movie.save(function(err, movie1) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      }) ;
}