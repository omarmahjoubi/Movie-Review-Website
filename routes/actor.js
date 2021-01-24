// import module express
var express = require('express') ;
// import body-parser
var bodyParser = require('body-parser');

// import router module from express
var router = express.Router() ;

// import actor controller
var actor_controller = require('../controllers/ActorController');

// create application/json parser
var jsonParser = bodyParser.json();

router.post('/create',jsonParser,actor_controller.actor_create);

router.get('/list',actor_controller.actor_list) ;

// export the router 
module.exports = router ;
