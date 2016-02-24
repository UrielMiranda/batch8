(function(){
  'use strict';
  angular.module('myapp',['ngResource'])
  .factory('apiUsers',apiUsers)
  .directive('cardUser',cardUser) /* cardUser se llama en html como card-user */
  .controller('mycontroller', mycontroller);

 function cardUser(){
   var directive = {
     restrict:"EA",
     templateUrl: "/partials/carduser.html",
     scope: {
       data: "=",
     },
     controller: cardController,
     controllerAs: 'cardinfo',
     bindToController: true,
     replace: true,
   }
   return directive;
 }

  function cardController(){
    var cardinfo = this;
    cardinfo.text = "Hello";
    cardinfo.alert = cardalert;

    function cardalert(params){
      console.log(params);
    }
  }
  apiUsers.$inject = ['$resource'];

  function apiUsers($resource){
    return $resource('/users/:id',{},{});
  }

  mycontroller.$inject = ['apiUsers'];
  function mycontroller(apiUsers){
    var mc = this;
    mc.hello = "HOLA";
    mc.users = apiUsers.query();


  }
})();
