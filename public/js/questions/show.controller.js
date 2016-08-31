"use strict";

  (function(){
    angular
    .module("cloudy")
    .controller("QuestionShowController", [
      "QuestionFactory",
      "$stateParams",
      QuestionShowControllerFunction
    ]);

    function QuestionShowControllerFunction(QuestionFactory, $stateParams){
      this.question= QuestionFactory.get({author: $stateParams.author});
    }
  }());
