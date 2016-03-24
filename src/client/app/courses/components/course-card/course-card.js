(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseCard', {
  		templateUrl: 'app/courses/components/course-card/course-card.html',
	  	bindings: {
				//inputs
				course: '<'

				//outputs
	  	},
			require: {
		    galleryCtrl: '^courseGallery'
		  },
			controller: CourseCardController
	  });

		CourseCardController.$inject = ['datacontext'];

		function CourseCardController(datacontext) {
			var vm = this;

			vm.$onInit = function() {
				console.log('CourseCardController:vm$onInit');
				console.log(vm.course);
			}

			vm.onEnroll = function(course) {
				console.log('CourseCardController::onEnroll');
			};

			vm.onLike = function(course) {
				console.log('CourseCardController::onLike');
			};
		}
})();
