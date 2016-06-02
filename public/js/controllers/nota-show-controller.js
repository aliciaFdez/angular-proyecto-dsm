
angular.module('NotasApp')
.controller('NotaShowController', function(Nota, $scope,$routeParams, $location) {
  var controller = this;
  controller.nota = Nota.get({id: $routeParams.id});
  $scope.borrarNota = function(nota){
    //Nota.$delete(nota);
    /*nota.$remove().then(function(){
          
        });*/
    console.log("entra");
    Nota.delete({id: $routeParams.id});
    $location.path('/');
  }
  /*$scope.editarNota = function(nota){
    //Nota.update({id: $routeParams.id});
    $location.path('/notas/editar/{id: $routeParams.id}');
  }*/

});

  /**/

  /*$http({method: 'GET', url: '/notas/'+$routeParams.id})
	.success(function(data) {
    //console.log(data);
    controller.nota = data;
  })*/

/*Nota.encontrar($routeParams.id)
  .success(function(data) {
    controller.nota = data;
  });*/