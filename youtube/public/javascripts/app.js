(function(){
  'use strict';
  angular.module("youtubeplayer",[])
  ,directive("youtubePlayer",youtubePlayer);

function youtubePlayer(){
  var directive = {
    restrict: "EA",
    scope :{
      data :"=",
    },
    templateUrl: "/partials/youtube.html",
    controller: youtubeController,
    controllerAs: "player",
    bindToController: true,
    replace: true,
  }
  return directive;
}
  youtubePlayer.$inject = ["youtubePlayer"] ;
  function youtubeController(youtubePlayer){
    var player = this;
    player.text = "Youtube";
  }
})();
