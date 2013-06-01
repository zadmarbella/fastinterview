var app = angular.module("app", [])


function FastInterviewCtrl($scope, $timeout)
{
	$scope.question = "test question?";
	$scope.counter = 15 + "s";
}


function KeyboardCtrl($scope)
{
	$scope.keyup = function(keyEvent) {
		console.log( 'keyup', keyEvent );
	};
}