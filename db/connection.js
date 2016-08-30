var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
    author: String,
    body: String
  });

var QuestionSchema = new mongoose.Schema({
    title: String,
    comments: [{CommentSchema}]
});

mongoose.model("Question", QuestionSchema)
mongoose.model("Comment", QuestionSchema)
mongoose.connect("mongodb://localhost/questions")

module.exports = mongoose
