var budgetCalculator = angular.module('budget', []);
budgetCalculator.controller('mainController', [function($scope){
$scope.income = [];
  $scope.expense = [];
  $scope.output = 0;
  $scope.output2 = 0;
  
  $scope.add = function () { 
    $scope.income.push ({"entered":$scope.Given, "amt1":$scope.AddIncome
  });
$scope.output += parseInt($scope.AddIncome);

  };

$scope.box2 = function () {
  $scope.expense.push ({"secondEntry":$scope.secondBox, "amount2":$scope.input2});


$scope.output2 += parseInt($scope.input2);
$scope.total = $scope.output - $scope.output2;
};
}]);






