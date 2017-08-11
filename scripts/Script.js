/// <reference path="angular.min.js" />

var myApp = angular.module("myModule", []).controller("myController", function ($scope, $http, $log) {


    var employees = [
        {
            name: "Dimitris Xinidis",
            address: "Peloponhsou 34",
            gender: "Male",
            birthdate: new Date("March 24, 1982"),
            salary: 23500.20
        },
        {
            name: "Bill Psalto",
            address: "Panormou 10",
            gender: "Male",
            birthdate: new Date("January 1, 1988"),
            salary: 40600.45
        },
        {
            name: "Kostas Giannaros",
            address: "Amarousiou 10",
            gender: "Male",
            birthdate: new Date("March 1, 1980"),
            salary: 50600.45
        },
        {
            name: "Athina Christopoulou",
            address: "Aristotelous 10",
            gender: "Female",
            birthdate: new Date("December 29, 1982"),
            salary: 20400
        }

    ];


    $scope.employees = employees;
    $scope.sortColumn = "name"; //Initial sort column when the page is loaded

    $scope.ascending = true;

    $scope.viewSubPage = "usersTable.html";

    //call rest service

    // $http(
    //     {
    //         method: "GET",
    //         url: "https://jsonplaceholder.typicode.com/posts/1"
    //     }
    //     ).then(
    //
    //     function (response){
    //         $log.info ("[Rest] Received response [response.data="+ response.data+"]");
    //         $scope.users = response.data;
    //     }
    // );

    //or

    $http.get('http://rest-service.guides.spring.io/greeting').then(

        function (response){
            $log.info ("[Rest] Received response [response.data="+ response.data+"]");
            $scope.users = response.data;
            console.log ("[Rest] Received response [$scope.users="+ $scope.users+"]");
        }
    );


    $scope.sortData = function (column) {
        console.log("sortData Entering...");

        if ($scope.sortColumn == column) {
            $scope.ascending = !$scope.ascending; //Reverse the direction
        }

        $scope.sortColumn = column;
    }

    $scope.getClassData = function (column) {
        console.log("getClassData Entering... [column=" + column + "]");
        if ($scope.sortColumn == column) {
            if ($scope.ascending == true) {
                return 'arrow-down';
            }
            else if ($scope.ascending == false) {
                return 'arrow-up';
            }
        }

        return '';
    }
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



