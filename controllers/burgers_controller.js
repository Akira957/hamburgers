var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    // console.log(res);
    

    res.redirect("/burgers");
    
});

router.get("/burgers", function(req, res){
    burger.selectAll(function(data){
        console.log(data);
        res.render("index", { burgers: data});
    });
    
});

router.post("burgers/insertOne", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, false],function(){
        res.redirect("/index");
    });
});

router.put("/burgers/updateOne/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    
    burger.updateOne({devoured: req.body.devoured}, condition, function(){
        res.redirect("/index");
    });
});

module.exports = router;