var app = angular.module("app", ['ui.keypress']);

function FastInterviewCtrl( $scope, $http )
{
    $http.get('questions.json').success(function(data) {
        console.info(data);
        // random between 1 and n
        var randomnumber = Math.floor( Math.random() * 100 );
        $scope.question = data[ randomnumber ];
    });
}

function CounterCtrl( $scope, $timeout )
{
	$scope.counter = 15;
	$scope.error = "countdown" + $scope.counter;
	$scope.onTimeout = function(){
		$scope.counter--;
		if ($scope.counter == 0 )
		{
			$timeout.cancel(mytimeout);
			$scope.error = "countdown" + $scope.counter;
			// load error page
		}
		else
		{
			$scope.error = "countdown" + $scope.counter;
			mytimeout = $timeout($scope.onTimeout,1000);
		}
    }
	var mytimeout = $timeout($scope.onTimeout,1000);
}

function MainCtrl( $scope )
{
	$scope.emit = function($event) {
		$scope.$broadcast('keypress', $event);
	};
}

function KeyboardCtrl( $scope )
{
	$scope.$on('keypress', function($event, event) {
		keypressListeners_space.forEach(function(listener) {
			if (listener.keyCode === event.keyCode)
				listener.fn();
		});
		keypressListeners_enter.forEach(function(listener) {
			if (listener.keyCode === event.keyCode)
				listener.fn();
		});
	});

	$scope.space = function() {
		alert('Works fine!space');
		// restart timer
	};
	
	$scope.enter = function() {
		alert('Works fine!enter');
		// load next question
		// restart timer
	};
	
	var keypressListeners_space = [{ keyCode : 32, fn : $scope.space }];
	var keypressListeners_enter = [{ keyCode : 13, fn : $scope.enter }];
}
