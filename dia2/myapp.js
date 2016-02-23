var c = 'hola';
// IIFE
(function(){
  'use strict';
  angular.module('myApp',[])
  .directive('ejemplo',ejemplo)
  .directive('imagen',imagen)
  .controller('mycontroller', mycontroller)
  .controller('otherController',otherController);

  function imagen(){
    var directive = {
      restrict: "E",
      templateUrl: 'imagen.html',
      replace:true,
    };
    return directive;
  }

  function ejemplo(){
    var directive = {
      restric: 'AE',
      templateUrl: 'directive.html',
      // controller: directiveController,
      // controllerAs: "asController",
      // bindToController: true,
      replace: true,
    };
    return directive;
  }

  // function directiveController(){
  //   var asController = this;
  //   asController.param = Math.random();
  // }

  function mycontroller(){
    var first = this;

    first.name      = "hola"
    first.number    = 5;
    first.people = [
      {'name':'Josue','age': 27,'place':'México'},
      {'name':'Uriel','age': 20,'place':'USA'},
      {'name':'Juan','age': 29,'place':'México'},
      {'name':'Carla','age': 26,'place':'Bolivia'},
    ]
    first.elements  = [1,2,3,4,5,6];

    first.clickeame = clickeame;
    first.clickdos  = clickdos;
    first.addage = addage;

    function addage(p){
      p.age += 1;
    }

    function clickeame(){
      console.log('c');
    }

    function clickdos(){
      console.log(first.name);
    }
  }

  function otherController(){
    var other = this;

    other.name = "Uriel";
  }

})();
