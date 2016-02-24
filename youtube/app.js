(function(){
  'use strict';
  angular.module("youtube",['ngResource'])
  .directive("youtubePlayer", youtubePlayer);


  function youtubePlayer(){
    var directive = {
      restrict:"EA",
      templateUrl:"/partials/youtube.html",
      controller: youtubeController,
      controllerAs: 'youtube',
      bindToController: true,
      replace: true,
    };
    return directive;
  }

  function sce(){
    var sce = this;
    sce.url = "https://www.youtube.com/watch?v=kIVd9uTlS-Q";

  }
  youtubeController.$inject = ["$sce"];
  function youtubeController($sce){
    var youtube = this;
    youtube.text = "hola";
    youtube.url = $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=kIVd9uTlS-Q");

  }

})();
