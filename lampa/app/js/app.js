'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/О кафедре', {templateUrl: 'partials/Ab_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Бакалавриат', {templateUrl: 'partials/Bag_k.html', controller: 'MyCtrl2'});
  $routeProvider.when('/Контакты', {templateUrl: 'partials/Kont_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Магистратура', {templateUrl: 'partials/Mg_s.html', controller: 'MyCtrl2'});
  $routeProvider.when('/Научная работа', {templateUrl: 'partials/Nayc_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Специалитет', {templateUrl: 'partials/Spec_s.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
