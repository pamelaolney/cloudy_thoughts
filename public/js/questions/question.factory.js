"use strict";

  (function(){
    angular
    .module("questions")
    .factory("QuestionFactory", [
      "$resource",
      QuestionFactoryFunction
    ]);

    function QuestionFactoryFunction($resource){
      return $resource("http://localhost:4000/questions/:author", {}, {
        update: { method: "PUT"}
      });
    }

  }());
