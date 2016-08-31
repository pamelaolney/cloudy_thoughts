var mongoose = require("./connection");
var parser = require("body-parser");

var db = mongoose.connection;

db.on("error", function(err){
  console.log("err");
});

db.once("open", function(){
  console.log("database has been connected");
})

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

var CommentSchema = new Schema({
  author: String,
  body: String
});

var QuestionSchema = new Schema({
  author: String,
  title: String,
  comments: [CommentSchema]
});

var Question = mongoose.model("Question", QuestionSchema);
var Comment = mongoose.model("Comment", CommentSchema);

module.exports = mongoose
