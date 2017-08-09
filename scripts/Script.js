/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []).controller("myController", function ($scope) {



    var employees = [
        {
            name: "Dimitris Xinidis",
            address: "Peloponhsou 34",
            gender: "Male",
            birthdate: new Date ("March 24, 1982"),
            salary: 23500.20
        },
        {
            name: "Bill Psalto",
            address: "Panormou 10",
            gender: "Male",
            birthdate: new Date("January 1, 1982"),
            salary: 40600.45
        }

    ];


    $scope.employees = employees;


    // $scope.incrementLikes = function (technology)
    // {
    //     technology.likes++;
    // }
    //
    // $scope.decrementLikes = function (technology)
    // {
    //     technology.dislikes++;
    //
    // }
});



