/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []).controller ("myController", function ($scope){

    	var employee = {
			Name: "Dimitris Xinidis",
			Address: "Peloponhsou 34"
	};

	$scope.message = "Test Message";
	$scope.employee = employee;
});

// var myApp = angular.module ("myModule", []); //No dependencies are added.

// myApp.controller ("myController", function ($scope){
//
// 	var employee = {
// 			Name: "Dimitris Xinidis",
// 			Address: "Peloponhsou 34"
// 	};
//
// 	$scope.message = "Test Message";
// 	$scope.employee = employee;
// });
