angular.module('NotasApp')
.controller('UserShowController', function($routeParams, User, $scope, $location) {
  var controller = this;
  controller.user = User.get({id: $routeParams.id});
  $scope.borrarUser = function(user){
  	console.log("entra");
  	User.delete({id: $routeParams.id});
  	$location.path('/usuarios');
  }
  
});