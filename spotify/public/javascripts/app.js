(function(){
  'use strict';

  angular.module('spotify',['ngResource'])
  .factory('apiSpotify',apiSpotify)
  .controller('mycontroller',mycontroller);

  apiSpotify.$inject = ['$resource'];
  function apiSpotify($resource){
    return $resource('/index/',{},{});

  }
  mycontroller.$inject = ['apiSpotify'];
  function mycontroller(apiSpotify){
    var spf = this;
    spf.name = "NEKRO";

    spf.track = apiSpotify.query();
  }
  
})();
