$(document).ready(function() { 
	var kittyId;
	$.getJSON('http://api.petfinder.com/pet.getRandom?&format=json&key=1234&animal=cat&callback=?')
  	.done(function(petApiData) {kittyId = petApiData.petfinder.petIds.id.$t; 	
  		// now get the random kitty's data
  		$.getJSON('http://api.petfinder.com/pet.get?format=json&key=1234&id=' + kittyId + '&callback=?')
  		.done(function(kittyData) { 
			var fluffyPath = kittyData.petfinder.pet.media.photos.photo[0].$t;
			var fluffyName = kittyData.petfinder.pet.name.$t;
			var fluffyAge = kittyData.petfinder.pet.age.$t;
			var fluffyBreed = kittyData.petfinder.pet.breeds.breed.$t;
			var fluffyLink = 'https://www.petfinder.com/petdetail/' + kittyId;
	
			var fluffy = '<li class="onlineCat"><img src="' + fluffyPath + '"' + ' width="75"><h3>' + fluffyName + '</h3><p>' + fluffyAge + ' | ' + fluffyBreed + '</p><p><a href="' + fluffyLink + '">Chat now!</a></p></li>';
			$('ul.online').html(fluffy);

  			})
  		.error(function(err) { console.log('Error retrieving data!'); 
		});})
  	.error(function(err) { console.log('Error retrieving data!'); 
	});



}); // end of jQuery name space 


var app = angular.module('myApp');

app.controller('petCtrl', function ($scope) {

});
