/// <reference path="angular.min.js" />

var myApp = angular.module ("myModule", []); //No dependencies are added.

myApp.controller ("myController", function ($scope){
	
	$scope.message "Test Message";
	
});