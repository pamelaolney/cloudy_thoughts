var mongoose = require('./schema');
var seedData = require('./seeds');

var Question = mongoose.model("Question");
var Comment = mongoose.model("Comment");

Question.remove({}).then(function(){
  Question.collection.insert(seedData).then(function(){
    process.exit();
  });
});
