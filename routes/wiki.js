// import express module
var express = require("express") ;

// use module router
var router = express.Router() ;

// About page
router.get('/about',function(req,res){
    res.send("About page of the movie review site") ;
}) ;

// export the router
module.exports = router ;

