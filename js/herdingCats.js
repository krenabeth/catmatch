var app = angular.module('myApp');

app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			template: 'index.html',
			controller: 'catCtrl'
		}).
		when('/:quick', {
			template: '<div><h1>{{cat.name}}</h1></div>',
			controller: 'quickCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});

});