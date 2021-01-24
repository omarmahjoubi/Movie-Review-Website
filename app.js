var express = require("express") ;

// import body-parser
var bodyParser = require("body-parser") ;

// import cors
var cors = require("cors") ;




// import router wiki,movie
var wikiRouter = require('./routes/wiki.js') ;
var movieRouter = require('./routes/movie.js') ;
var actorRouter = require('./routes/actor') ;

// import the mongoose module
var mongoose = require("mongoose") ;

// set up mongoose connection
var mongoDB = "mongodb://127.0.0.1/review_site_database"; 
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


// get the default connection
var db = mongoose.connection ;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// import morgan à logging tool
const morgan = require("morgan") ;

const app = express() ;

// authorize cross origin request
app.use(cors()) ;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false})) ;

// parse application/json
app.use(bodyParser.json()) ;

app.use(morgan("common")) ;

// define port
const port=3000

app.use('/wiki',wikiRouter) ;
app.use('/movie',movieRouter) ;
app.use('/actor',actorRouter) ;


// launch server
app.listen(port,() => {
    console.log(`Listening on port : ${port}`) ;
}) ;