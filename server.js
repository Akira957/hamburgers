var express = require("express");
var handlebars = require("express-handlebars");
var method = require("method-override");
var parser = require("body-parser");

var PORT = process.env.PORT || 3546;

var app = express();
app.use(express.static("public"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(method("_method"));

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
    
});