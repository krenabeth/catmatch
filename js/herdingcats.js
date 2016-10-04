var app = angular.module('myApp');

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'html/matches.html',
			controller: 'catCtrl'
		}).
		when('/matches', {
			templateUrl: 'html/matches.html',
			controller: 'catCtrl'
		}).
		when('/connections', {
			templateUrl: 'html/connections.html',
			controller: 'connectCtrl'
		}).
		when('/messages', {
			templateUrl: 'html/messages.html',
			controller: 'messageCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

});