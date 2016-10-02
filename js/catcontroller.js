var app = angular.module('myApp');

app.controller('catCtrl', ['$scope', '$http', function ($scope, $http){
	$http.get('cats.json').success(function(data) {
		$scope.cats = data;
	});

	$scope.removeName = function(cat) {
		var i = $scope.cats.indexOf(cat);
		$scope.cats.splice(i, 1);
	};

}]);



