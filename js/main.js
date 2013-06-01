var app = angular.module("app", [])

function FastInterviewCtrl($scope, $http)
{
	$http.get('questions.json').success(function(data) {
		console.info(data);
		// random between 1 and n
		$scope.question = data[1];
	});
		
	$scope.counter = 15 + "s";
}

function KeyboardCtrl($scope)
{
	$scope.keyup = function(keyEvent) {
		console.log( 'keyup', keyEvent );
	};
}