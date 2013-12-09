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
  $routeProvider.when('/Бакалавриат', {templateUrl: 'partials/Bag_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Контакты', {templateUrl: 'partials/Kont_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Магистратура', {templateUrl: 'partials/Mg_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Научная работа', {templateUrl: 'partials/Nayc_k.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Специалитет', {templateUrl: 'partials/Spec_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Преподаватели', {templateUrl: 'partials/Prep_s.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Расписание', {templateUrl: 'partials/Raspis_al.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Новости', {templateUrl: 'partials/Novos.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Документы', {templateUrl: 'partials/Dock.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Направления и специальности', {templateUrl: 'partials/Spec.html', controller: 'MyCtrl1'});
  
  $routeProvider.when('/Лаборатории', {templateUrl: 'partials/Lab.html', controller: 'MyCtrl1'});
  $routeProvider.when('/Главная', {templateUrl: 'partials/Glavnaya.html', controller: 'MyCtrl1'});
    $routeProvider.when('/Фотогалерея', {templateUrl: 'partials/Foto.html', controller: 'MyCtrl1'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
