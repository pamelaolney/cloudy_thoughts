"use strict";

  (function(){
    angular
    .module("questions")
    .controller("QuestionIndexController", [
      "QuestionFactory",
      QuestionIndexControllerFunction
    ]);

    function QuestionIndexControllerFunction(QuestionFactory){
      this.questions = QuestionFactory.query();
    }
  }());
