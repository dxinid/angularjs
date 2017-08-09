/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []).controller("myController", function ($scope) {

    var employee = {
        Name: "Dimitris Xinidis",
        Address: "Peloponhsou 34",
        image: "geronimo.jpeg"
    };

    var employees = [
        {
            Name: "Dimitris Xinidis",
            Address: "Peloponhsou 34",
            image: "geronimo.jpeg"
        },
        {
            Name: "Bill Psalto",
            Address: "Panormou 10",
            image: "geronimo.jpeg"
        }

    ];

    var countries = [
        {
            name: "Greece",
            cities: [
                {name: "Athens"},
                {name: "Kalamata"}
            ]
        },
        {
            name: "Italy",
            cities: [
                {name: "Roma"},
                {name: "Napoli"}
            ]
        }


    ];

    var technologies = [
        {
            name: "Java",
            likes: 0,
            dislikes: 0

        },
        {   name: "C",
            likes: 0,
            dislikes: 0
        },
        {   name: "Python",
            likes: 0,
            dislikes: 0
        }
    ];

    $scope.message = "Test Message";
    $scope.employees = employees;
    $scope.countries = countries;
    $scope.technologies = technologies;


    $scope.incrementLikes = function (technology)
    {
        technology.likes++;
    }

    $scope.decrementLikes = function (technology)
    {
        technology.dislikes++;

    }
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

