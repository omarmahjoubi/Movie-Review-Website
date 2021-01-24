const express = require("express") ;

// import module wiki
var wiki = require('./wiki.js') ;

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

app.use(morgan("common")) ;

// define port
const port=3000

app.use('/wiki',wiki) ;


// launch server
app.listen(port,() => {
    console.log(`Listening on port : ${port}`) ;
}) ;