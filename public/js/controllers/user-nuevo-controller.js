angular.module('NotasApp')
.controller('UserNuevoController', function($scope, User,$location) {
  this.user = {};
  $scope.user = new User();//////////////resource
  this.guardaNuevoUser = function() {
    console.log(this.user);
    var controller = this;
    controller.errors = null;
    $scope.user.$save(this.user)/////////////resource
    .catch(function(user) {
      controller.errors = user.data.error;
    })
    $location.path("/usuarios");
    this.user = {};

  };
});
