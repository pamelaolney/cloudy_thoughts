"use strict";

  (function(){
    angular
    .module("question")
    .controller("QuestionShowController", [
      "QuestionFactory",
      "$stateParams",
      QuestionShowControllerFunction
    ]);

    function QuestionShowControllerFunction(QuestionFactory, $stateParams){
      var vm = this;
      vm.question = QuestionFactory.get({id: $stateParams.id})
    }
  }());
