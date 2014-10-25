'use strict';

/**
 * @ngdoc function
 * @name todoerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoerApp
 */
angular.module('todoerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
