(function(){
  'use strict';
  angular.module("mapa",[])
  .directive("mapaMexico",mapaMexico);

  function mapaMexico(){
    var directive = {
      restrict: "AE",
      templateUrl: "/partials/mapa.html",
      controller: mapaController,
      controllerAs: "mexico",
      bindToController: true,
      replace: true,

    };
    return directive;
  }

  mapaController.$inject = ["$scope"]
  function mapaController($scope){
    var mexico = this;

    mexico.list = [
      {'id':'MX-CHP','name':'Chiapas'},
      {'id':'MX-AGU','name':'Aguascalientes'},
      {'id':'MX-CHH','name':'Chihuahua'},
      {'id':'MX-JAL','name':'Jalisco'},
    ]
    mexico.over = null;

    var initialColor = "#3DBFA7";
    var mouseOverColor = "#90F272";
    var mouseOutColor = "#D0F0A5";

    var paths = d3.selectAll("path");
    paths.style("fill",initialColor);

    paths.on('mouseover', function(){
      console.log(this.id);
      mexico.over = this.id;
      d3.select(this).style("fill", mouseOverColor);
      $scope.$apply();
    })

    paths.on('mouseout', function(){
      console.log(this);
      d3.select(this).style("fill", mouseOutColor);
    });
  }

})();
