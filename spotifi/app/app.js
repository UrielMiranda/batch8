(function(){
  'use strict';
  angular.module("spotifyplayer", ["ngResource"])
  .directive("spotifyPlayer", spotifyPlayer)
  .factory("spotifySearch", spotifySearch);

  spotifySearch.$inject = ["$resource"];
  function spotifySearch($resource){
    return $resource("https://api.spotify.com/v1/search?type=track&q=:song&market=MX");
  }

  spotifyPlayer.$inject = [];
  function spotifyPlayer(){
    var directive = {
      restric: "EA",
      templateUrl: "/partials/spotify.html",
      controller: spotifyController,
      controllerAs: 'spotify',
      binToController: true,
      replace: true,
    };
    return directive;
  }
  spotifyController.$inject = ["spotifySearch"];
  function spotifyController(spotifySearch){
    var spotify = this;

    spotify.audio = new Audio;
    spotify.play = play;
    spotify.song = null;

    spotify.playlist = null;
    spotify.doSearch = doSearch;

    function play(song){
      spotify.song = song;
      spotify.audio.pause();
      spotify.audio.src= song.preview_url;
      spotify.audio.play();
    }
    function doSearch(){
      console.log(spotify.song_name);
      spotifySearch.get({'song': spotify.song_name})
      .$promise
        .then(function(response){
          console.log(response);
          spotify.playlist = response.tracks.items;
          spotify.play(response.tracks.items[0]);
      });

    }
  }

})();
