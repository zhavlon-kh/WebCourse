(function () {
	'use strict';

	angular.module('LunchCheck',[])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =  ['$scope'];
		

	function LunchCheckController($scope) {
		$scope.meals="";
		$scope.output="";

		$scope.checkTooMuch = function () {
			var arrayOfMeals = getArrayOfMeals($scope.meals);
			var numberOfMeals = arrayOfMeals.length;
			$scope.tooMuch = numberOfMeals>3;
			if (numberOfMeals==0) {
				$scope.output = "Please enter data first";
				$scope.color = "red";}
			else if (numberOfMeals>3) {
				$scope.output = "Too much!";
				$scope.color = "blue";}
			else {$scope.output = "Enjoy!";
				$scope.color = "green";}
		};

		function getArrayOfMeals(meals) {
			var splittedMeals = meals.split(',');

			splittedMeals = splittedMeals.map(meal => meal.trim());
			
			var filteredMeals = splittedMeals.filter(function (element) {
				return element!=undefined && element != null && element!="";
			});

			return filteredMeals;
		}

	}

})()