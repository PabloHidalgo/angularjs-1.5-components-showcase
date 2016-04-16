(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseActions', {
  		templateUrl: 'app/courses/components/course-actions/course-actions.html',
	  	bindings: {
				//inputs
				courseId: '<',

				totalEnrolls: '<',
				enrolled: '<',

				totalLikes: '<',
				liked: '<',

        //outputs
        onEnroll: '&',
        onLike: '&'
	  	},
			controller: CourseActionsController
	  });

		CourseActionsController.$inject = ['datacontext'];

		function CourseActionsController(datacontext) {
			var vm = this;

			vm.toggleEnrollCourse = function(courseId) {
				console.log('CourseActionsController::toggleEnrollCourse');
        console.log(courseId);
				datacontext.courses.enroll(courseId).then(function() {
					return vm.onEnroll();
				});
				//vm.galleryCtrl.enrollCourse
			};

			vm.toggleLikeCourse = function(courseId) {
				console.log('CourseActionsController::toggleLikeCourse');
        console.log(courseId);
				datacontext.courses.like(courseId).then(function() {
					return vm.onLike();
				});
				//vm.galleryCtrl.enrollCourse
			};
		}
})();
