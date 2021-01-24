// import module express
var express = require('express') ;
// import body-parser
var bodyParser = require('body-parser');

// import router module from express
var router = express.Router() ;

// import movie controller
var movie_controller = require('../controllers/MovieController');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/create',jsonParser,movie_controller.movie_create);

router.get('/list',movie_controller.movie_list) ;

// export the router 
module.exports = router ;