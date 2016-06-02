angular.module('NotasApp')
.controller('UserEditarController', function($scope, $routeParams, User, $location) {
  console.log("entra controlador edit");
  this.user = {};
  var controller = this;
  controller.user = User.get({id: $routeParams.id});

  $scope.user = new User();//////////////resource

  this.actualizaUser = function() {
    //console.log("no entra");
    var controller = this;
    controller.errors = null;
    controller.user.$update(this.user)/////////////resource
    .catch(function(user) {
      controller.errors = user.data.error;
    });
    this.user = {};
    $location.path("/usuarios");
    //$window.location.href='#/usuarios';
    //window.location.assign('/');

    window.location.reload();
    //$route.reload();
  };
 
});