var app = angular.module("app", [])

app.config( function ($routeProvider)
{
	$routeProvider
		.when( '/'
			 , 	{
					templateUrl: "main.html"
				,	controller: "AppCtrl"
				})
		.otherwise({ redirectTo: "/" })
});



