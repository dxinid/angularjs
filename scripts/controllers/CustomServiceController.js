var customServiceController = myAppModule.controller("customServiceController",
    function ($scope, stringTransformationService) {


        $scope.transformString = function (inputText) {
            console.log("[transformString] Entering...");

            $scope.output = stringTransformationService.transformString(inputText);
        }
    }
);