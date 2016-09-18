(function(){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController', LaunchCheckController);
LaunchCheckController.$inject = ['$scope'];
function LaunchCheckController($scope){
  $scope.entries = "";
  $scope.message1 = "";
  $scope.countEntries = function (entries) {
    var lunch = entries.trim();
    var lunchEntries = lunch.split(',').filter(str => /\S/.test(str));
    if (lunchEntries.length > 3) {
      $scope.message1 = "Too much!";
    }
        else {
          $scope.message1 = "Enjoy!";
        };
    if (entries == "") {
      $scope.message1 = "Please enter the data first!";
      }
  };
  };
})();