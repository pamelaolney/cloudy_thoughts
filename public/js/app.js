"use strict";

  (function(){
    angular
    .module("cloudy", [
      "ui router",
      "questions"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("questionIndex", {
        url: "/questions",
        templateUrl: "js/questions/index.html",
        controller: "QuestionIndexController",
        controllerAs: "QuestionIndexViewModel"
      });
    }

  }());
