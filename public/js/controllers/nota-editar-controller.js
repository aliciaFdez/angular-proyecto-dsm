
angular.module('NotasApp')
.controller('NotaEditarController', function($scope, $routeParams, Nota, $location) {
  console.log("entra controlador edit");
  this.nota = {};
  var controller = this;
  controller.nota = Nota.get({id: $routeParams.id});

  $scope.nota = new Nota();//////////////resource

  this.actualizaNota = function() {
    //console.log("no entra");
    var controller = this;
    controller.errors = null;
    controller.nota.$update(this.nota)/////////////resource
    .catch(function(nota) {
      controller.errors = nota.data.error;
    })
    this.nota = {};
    $location.path("/");
  };
 
});
