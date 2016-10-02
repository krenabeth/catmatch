var app = angular.module('myApp');

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			template: '',
			controller: 'catCtrl'
		}).
		when('/:quick', {
			template: '<h1>HELLLO {{cat.name}}</h1>',
			controller: 'quickCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

});