(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseCard', {
  		templateUrl: 'app/courses/components/course-card/course-card.html',
	  	bindings: {
				//inputs
				id: '<',

				title: '<',
				content: '<',
				image: '<',

				enrolls: '<',
				enrolled: '<',

				likes: '<',
				liked: '<',

				//outputs
	  	},
			controller: CourseCardController
	  });

		CourseCardController.$inject = ['datacontext'];

		function CourseCardController(datacontext) {
			var vm = this;

			vm.$onInit = function() {
				console.log('CourseCardController:vm$onInit');
				console.log(vm);
			}

			vm.onEnroll = function(courseId) {
				console.log('CourseCardController::onEnroll');
        console.log(courseId);
			};

			vm.onLike = function(courseId) {
				console.log('CourseCardController::onLike');
        console.log(courseId);
			};
		}
})();
