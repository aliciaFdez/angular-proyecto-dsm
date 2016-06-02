$.get("/usuarios",function(data){
  //cogemos los usuarios fuera del controller, llamamos a una función que nos devuelve los datos de la base de datos en forma de array
    usuarios=data.info;
     //alert("dato 0 "+data.info);
});
angular.module('NotasApp')
.controller('UsuariosIndexController', function($scope, Gravatar) {
  this.usuarios = usuarios;
  $scope.gravatarUrl = function(email) {
    return Gravatar(email);
  };
});

