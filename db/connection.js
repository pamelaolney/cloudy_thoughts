var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/questions")

module.exports = mongoose
