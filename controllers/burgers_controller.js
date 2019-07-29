var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    // console.log(res);
    burger.selectAll(function(data){
        // console.log("This is working");
        console.log(data);
        res.render("index", { burgers: data});
    });   
    
});

router.get("/api/burgers", function(req, res){
    burger.selectAll(function(data){
        // console.log("This is working");
        console.log(data);
        res.json("index", { burgers: data});
    });
    
});

router.post("/api/burgers", function(req, res){

    burger.insertOne([req.body.burger_name],function(result){
        console.log(req.body.burger_name);
        
        res.json({id: result.insertId});
    });
    console.log("Post Route");
    
});

router.put("/api/burgers/:id", function(req, res){
    var condition = req.params.id;
    // console.log("condition", condition);
    
    burger.updateOne(condition, function(result){
        if (result.changedRows == 0) {
            console.log("Not Updated!")
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;