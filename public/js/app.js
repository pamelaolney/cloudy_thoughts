"use strict";

  (function(){
    angular
    .module("cloudy", [
      "ui.router",
      "questions"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    angular.module("questions", ["ngResource"])

    function RouterFunction($stateProvider){
      console.log("roter is hit");
      $stateProvider
      .state("questionIndex", {
        url: "/questions",
        templateUrl: "js/questions/index.html",
        controller: "QuestionIndexController",
        controllerAs: "QuestionIndexViewModel"
      });
    }

  }());
