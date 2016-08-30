var mongoose = require('mongoose');
var Schema = require("./schema.js");

var Question = mongoose.model("Question")
var Comment = mongoose.model("Comment")

Question.remove({}).then(function(){
  Question.collection.insert(seedData).then(function(){
    process.exit();
  })
});
