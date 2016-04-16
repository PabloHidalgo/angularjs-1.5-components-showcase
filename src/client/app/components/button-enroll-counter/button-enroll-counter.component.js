(function() {
	'use strict';

	angular
	  .module('app.components')
	  .component('buttonEnrollCounter', {
  		templateUrl: 'app/components/button-enroll-counter/button-enroll-counter.html',
			bindings: {
				//inputs
				enrolls: '<',
				enrolled: '<',

				//outputs
				onEnroll: '&'
			}
	  });
})();
