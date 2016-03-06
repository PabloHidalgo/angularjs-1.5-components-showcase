(function() {
	'use strict';

	angular
	  .module('app.buttonLikeCounter', [])
	  .component('buttonLikeCounter', {
  		templateUrl: 'app/components/buttonLikeCounter/buttonLikeCounter.html',
	  	bindings: {
				//inputs
        likes: '<',
        liked: '<',

				//outputs
				onLike: '&'
	  	}
	  });
})();
