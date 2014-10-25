'use strict';

/**
 * @ngdoc function
 * @name todoerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoerApp
 */
angular.module('todoerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
