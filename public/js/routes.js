
angular.module('NotasApp')
.config(function($routeProvider){

  $routeProvider

  .when('/', {
    redirectTo: '/notas'
  })

  .when('/notas', {
    templateUrl: '/templates/pages/notas/index.html',
    controller: 'NotasIndexController',
    controllerAs: 'NotasIndex'
  })

  .when('/usuarios', {
    templateUrl: '/templates/pages/usuarios/index.html',
    controller: 'UsuariosIndexController',
    controllerAs: 'UsuariosIndex'
  })

  .when('/notas/nueva', {
      templateUrl: 'templates/pages/notas/nueva.html',
      controller: 'NotaNuevaController',
      controllerAs: 'notaNuevaCtrl'
    })

  .when('/notas/:id', {
    templateUrl: 'templates/pages/notas/nota-show.html',
    controller: 'NotaShowController',
    controllerAs: 'notaShowCtrl'
  })
 /* .when('/notas/borrar/:id', {
    //templateUrl: 'templates/pages/notas/index.html',
    //redirectTo: '/notas',
    controller: 'NotasBorrarController',
    controllerAs: 'notaBorrarCtrl'
    
  })*/
  .when('/notas/:id/editar', {
    templateUrl: 'templates/pages/notas/editar.html',
    controller: 'NotaEditarController',
    controllerAs: 'notaEditarCtrl',
  })
    .when('/usuarios/:id/editar', {
    templateUrl: 'templates/pages/usuarios/editar.html',
    controller: 'UserEditarController',
    controllerAs: 'userEditarCtrl',
  })
  /*.when('/notas/actualiza/:id', {
    templateUrl: 'templates/pages/notas/editar.html',
    controller: 'NotaActualizaController',
    controllerAs: 'notaActualizaCtrl',
  })*/

   .when('/usuarios/:id', {
    templateUrl: 'templates/pages/usuarios/user-show.html',
    controller: 'UserShowController',
    controllerAs: 'userShowCtrl'
  })

   .when('/otronuevo', {
      templateUrl: 'templates/pages/usuarios/nuevo.html',
      controller: 'UserNuevoController',
      controllerAs: 'userNuevoCtrl'
    })

  .otherwise({redirectTo: '/'});

});
