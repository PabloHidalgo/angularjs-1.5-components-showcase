(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('coursesTopEnrollments', {
  		templateUrl: 'app/routes/courses/topEnrollments/topEnrollments.html',
			controller: CoursesTopEnrollmentsComponent,
	  });

	CoursesTopEnrollmentsComponent.$inject = ['datacontext'];

	function CoursesTopEnrollmentsComponent(datacontext) {
		var $ctrl = this;

		activate();

		this.$routerOnActivate = function(next, previous) {
			return datacontext.courses.getTopEnrollments().then(function(courses) {
				$ctrl.courses = courses;
			});
		};

		function activate() {
			$ctrl.title = 'COURSES TOP ENROLLMENTS';
		}
	}
})();
