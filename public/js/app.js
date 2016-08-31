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

    function RouterFunction($stateProvider){
      $stateProvider
      .state("questionIndex", {
        url: "/questions",
        templateUrl: "js/questions/index.html",
        controller: "QuestionIndexController",
        controllerAs: "QuestionIndexViewModel"
      })
      .state("questionNew", {
        url: "/questions/new",
        templateUrl: "js/questions/new.html",
        controller: "QuestionNewController",
        controllerAs: "QuestionNewViewModel"
      })
      .state("questionEdit", {
        url: "/questions/:author/edit",
        templateUrl: "js/questions/edit.html",
        controller: "QuestionEditController",
        controllerAs: "QuestionEditViewModel"
      })
      .state("questionShow", {
        url: "/questions/:author",
        templateUrl: "js/questions/show.html",
        controller: "QuestionShowController",
        controllerAs: "QuestionShowViewModel"
      });
    }

  }());
