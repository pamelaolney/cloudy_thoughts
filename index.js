var express = require("express");
var mongoose = require("./db/connection");

var Question = mongoose.model("Question");
var Comment = mongoose.model("Comment");


var parser = require("body-parser");
var app = express();


app.get("/", function(req, res){
  res.json("Hey Worlio");
});

app.get("/questions", function(req, res){
  Question.find({}).then(function(questions){
    res.json(questions);
  });
});









app.listen(4000, function(){
  console.log("I am here on channel 4000 bae");
});