(function(){
  'use strict'

  angular.module('myMovies',[])
  .controller("moviesController", moviesController);


  function moviesController(){
    var movies = this;

    movies.name = [
      {
        'image':'http://ia.media-imdb.com/images/M/MV5BMTg2MzcxNTY3NV5BMl5BanBnXkFtZTgwOTQ5NDQxMDE@._V1_SX640_SY720_.jpg',
        'nombre':"Trainspotting",
        'actores':[{"name":'Pancho'},{"name":"Julio"}],
        'anio':"2006",
        'genero':'Sex',
      },
      {
        'image':'http://ia.media-imdb.com/images/M/MV5BMTg2MzcxNTY3NV5BMl5BanBnXkFtZTgwOTQ5NDQxMDE@._V1_SX640_SY720_.jpg',
        'nombre':"Trainspotting",
        'actores':[{"name":'Pancho'},{"name":"Julio"}],
        'anio':"2006",
        'genero':'Sex',
      },
      {
        'image':'http://ia.media-imdb.com/images/M/MV5BMTg2MzcxNTY3NV5BMl5BanBnXkFtZTgwOTQ5NDQxMDE@._V1_SX640_SY720_.jpg',
        'nombre':"Trainspotting",
        'actores':[{"name":'Pancho'},{"name":"Julio"}],
        'anio':"2006",
        'genero':'Sex',
      },
      {
        'image':'http://ia.media-imdb.com/images/M/MV5BMTg2MzcxNTY3NV5BMl5BanBnXkFtZTgwOTQ5NDQxMDE@._V1_SX640_SY720_.jpg',
        'nombre':"Trainspotting",
        'actores':[{"name":'Pancho'},{"name":"Julio"}],
        'anio':"2006",
        'genero':'Sex',
      },
    ]
  }

})();
