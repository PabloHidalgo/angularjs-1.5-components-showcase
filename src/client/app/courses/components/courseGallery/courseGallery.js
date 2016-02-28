(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseGallery', {
  		templateUrl: 'app/courses/components/courseGallery/courseGallery.html',
			controller: CourseGalleryController,
	  	bindings: {
	  		courses: '<'
	  	}
	  });

		function CourseGalleryController() {
			var vm = this;

			vm.$onInit = function() {
				console.log('entra');
			};

			// vm.enrollCourse = function(courseId, courseTitle, enrolledOnCourse) {
			// 	var operation = ( enrolledOnCourse ) ? 'Unsuscribing' : 'Enrolling';
			// 	console.log(operation + ' from ' + courseTitle + ' (' + courseId + ')...');
			// 	setCourseEnrollmentStatus(vm.courses, courseId, !enrolledOnCourse);
			// };
			//
			// vm.likeCourse = function() {
			//
			// };
			//
			// function setCourseEnrollmentStatus(courses, courseId, status) {
			// 	for ( var i = 0; i < courses.length; i++ ) {
			// 		var course = courses[i];
			//
			// 		if ( course.id === courseId ) {
			// 			course.enrolled = status;
			// 			course.enrolls += ( status ) ? 1 : -1;
			// 			console.log(course);
			// 		}
			// 	}
			// }

			// vm.enrolledOnCourse = (function() {
			//
			// })();
		}
})();
