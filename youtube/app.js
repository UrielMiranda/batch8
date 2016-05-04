(function(){
  'use strict';
  angular.module("youtube",[])
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
  youtubeController.$inject = ["$sce"];
  function youtubeController($sce){
    var youtube = this;
    youtube.id = "kIVd9uTlS-Q";
    youtube.text = "hola";
    youtube.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/"+youtube.id);

  }

})();
