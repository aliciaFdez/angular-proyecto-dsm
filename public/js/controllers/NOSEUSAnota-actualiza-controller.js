

angular.module('NotasApp')
.controller('NotaActualizaController', function($scope, $routeParams, Nota) {
  this.nota = {};
  $scope.nota = Nota.get({id: $routeParams.id});//////////////resource
  $scope.actualizaNota = function(nota) {
    $scope.errors = null;
    $scope.updating = true;
    nota.$update().catch(function(nota){
      $scope.errors = [nota.data.error];
    }).finally(function(){
      $scope.actualizando = false;
    });
  };
});

