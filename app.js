(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Gonzalo";
  $scope.sayHello = function () {
    return "Hello Coursera!"
  };
});

})();
