var express = require("express");
var cors = require("cors")
var mongoose = require("./db/schema");

var Question = mongoose.model("Question");
var Comment = mongoose.model("Comment");


var parser = require("body-parser");
var app = express();

app.use(cors());
app.use(parser.json({extended: true}));
app.listen(4000, function(){
  console.log("I am here on channel 4000 bae");
});

app.get("/", function(req, res){
  res.json("Hey Worlio");
});

app.get("/questions", function(req, res){
  Question.find({}).then(function(questions){
    res.json(questions);
  });
});

app.get("/questions/:author", function(req, res){
  Question.findOne({author: req.params.author}).then(function(question){
    res.json(question);
  });
});

app.post("/questions", function(req, res){
  Question.create(req.body).then(function(addquestion){
    res.json(addquestion);
  });
});

app.put("/questions/:author", function(req, res){
  Question.findOneAndUpdate({author: req.params.author}, req.body, {new: true}).then(function(updateQuestion){
    res.json(updateQuestion);
  });
});

app.delete("/questions/:author", function(req, res){
  Question.findOneAndRemove({author: req.params.author}).then(function(deleteQuestion){
    res.json(deleteQuestion);
  });
});
