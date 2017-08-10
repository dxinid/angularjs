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

    $scope.sortData = function (column)
    {
        console.log ("sortData Entering...");

        if ($scope.sortColumn == column)
        {
            $scope.ascending = !$scope.ascending; //Reverse the direction
        }

        $scope.sortColumn = column;
    }

    $scope.getClassData = function (column)
    {
        console.log ("getClassData Entering... [column="+column+"]");
        if ($scope.sortColumn == column)
        {
            if ($scope.ascending  == true)
            {
                return 'arrow-down';
            }
            else if ($scope.ascending  == false)
            {
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



