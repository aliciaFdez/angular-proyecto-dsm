

angular.module('NotasApp')
.controller('NotaBorrarController', function($scope, Nota) {
	$window.document.write("entra1");
	$scope.borrarNota = function(nota){
		Nota.$delete(nota);
		//alert("entra");
		console.log("entra");
	}

});
/*.controller('NotaBorrarController', function($routeParams, Nota) {
  var controller = this;
  //recogemos el id de la nota
  controller.nota = Nota.get({id: $routeParams.id});
  //controller.nota = Nota.query();

});*/