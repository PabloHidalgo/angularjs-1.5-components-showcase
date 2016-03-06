(function() {
	'use strict';

	angular
	  .module('app.courseGallery', [])
	  .component('courseGallery', {
  		templateUrl: 'app/components/courseGallery/courseGallery.html',
			controller: CourseGalleryController,
	  	bindings: {
				//inputs
	  		courses: '<'

				//outputs
	  	}
	  });

		function CourseGalleryController() {
			var vm = this;

			vm.$onInit = function() {
				console.log('CourseGalleryController::$onInit');
			};
		}
})();
