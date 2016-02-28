(function() {
	'use strict';

	angular
	  .module('app.components')
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
