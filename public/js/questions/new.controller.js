"use strict";

  (function(){
    angular
    .module("questions")
    .controller("QuestionNewController", [
      "QuestionFactory",
      QuestionNewControllerFunction
    ]);

    function QuestionNewControllerFunction(QuestionFactory){
      var vm = this;
      vm.question = new QuestionFactory();
      vm.create = function(){
        vm.question.$save();
      }
    }
  }());
