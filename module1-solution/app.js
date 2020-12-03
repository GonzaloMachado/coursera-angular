(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
  $scope.dishList = "";
  $scope.myMessage = "";

  $scope.checkList = function () {
    var totalDishes = calculateDishes($scope.dishList);
    $scope.myMessage = totalDishes;
  };

function calculateDishes(string) {
  if (string  == "") {
    return "Please enter data first!";
  }

  var dishes = string.split(',')
  var total = 0;
  for (var i = 0; i < dishes.length; i++) {
    if (dishes[i].trim() != ""){
      total++;
    }
  }
  if (total > 3 ) {
    return "Too much!";
  }
  else {
    return "Enjoy!";
  }
};

  }
})();
