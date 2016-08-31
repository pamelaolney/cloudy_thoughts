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


var sam = new Question({author: "sam", title: "question1"})
var jan = new Question({author: "jan", title: "question2"})
var pam = new Question({author: "pam", title: "question3"})

var comment1 = new Comment({author: "lady1", body: "comment1!!!"})
var comment2 = new Comment({author: "lady2", body: "comment2!!!"})
var comment3 = new Comment({author: "lady3", body: "comment3!!!"})
var comment4 = new Comment({author: "lady3", body: "comment4!!!"})
var comment5 = new Comment({author: "lady4", body: "comment5!!!"})
var comment6 = new Comment({author: "lady5", body: "comment6!!!"})
var comment7 = new Comment({author: "lady6", body: "comment7!!!"})

var authors = [sam, jan, pam]
var comments = [comment1, comment2, comment3, comment4, comment5, comment6, comment7]

for(var i = 0; i < authors.length; i++){
  authors[i].comments.push(comments[i], comments[i+3])
  authors[i].save(function(err){
    if(err){
      console.log(err);
    }else{
      console.log("author was saved");
    }
  })
}

module.exports = mongoose
