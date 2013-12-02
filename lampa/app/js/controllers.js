'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function($scope) {
   $scope.phones = [
    {'name': 'Шамиль',
     'family': 'Минасов'},
    {'name': 'Светлана',
     'family': 'Милушкина'},
    {'name': 'Сагит™',
     'family': 'Валеев'}
  ];       

  }]);