"use strict";

  (function(){
    angular
    .module("questions")
    .controller("QuestionEditController", [
      "QuestionFactory",
      "$stateParams",
      QuestionEditControllerFunction
    ]);

    function  QuestionEditControllerFunction(QuestionFactory, $stateParams){
      this.question = QuestionFactory.get({author: $stateParams.author});
      this.update = function(){
        this.question.$update({author: $stateParams.author});
      }
    }



  }());
