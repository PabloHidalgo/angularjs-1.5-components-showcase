(function() {
	'use strict';

	angular
	  .module('app.components')
	  .component('buttonEnrollCounter', {
  		templateUrl: 'app/components/buttonEnrollCounter/buttonEnrollCounter.html',
			bindings: {
				//inputs
				enrolls: '<',
				enrolled: '<',

				//outputs
				onEnroll: '&'
			}
	  });
})();
