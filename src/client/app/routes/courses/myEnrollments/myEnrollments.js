(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('coursesMyEnrollments', {
  		templateUrl: 'app/routes/courses/myEnrollments/myEnrollments.html',
			controller: CoursesMyEnrollmentsComponent,
	  });

	CoursesMyEnrollmentsComponent.$inject = ['datacontext'];

	function CoursesMyEnrollmentsComponent(datacontext) {
		var $ctrl = this;

		activate();

		this.$routerOnActivate = function(next, previous) {
			return datacontext.courses.getMyEnrollments().then(function(courses) {
				$ctrl.courses = courses;
			});
		};

		function activate() {
			$ctrl.title = 'COURSES I\'M ENROLLED IN';
		}
	}
})();
