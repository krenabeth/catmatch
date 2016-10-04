var app = angular.module('myApp');

app.controller('quickCtrl', function ($scope, $window){

	$scope.quick = function(cat) {
        $window.alert("Hello " + $scope.cat);
	};

});