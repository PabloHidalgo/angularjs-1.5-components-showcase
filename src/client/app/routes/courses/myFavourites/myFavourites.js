(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('coursesMyFavourites', {
  		templateUrl: 'app/routes/courses/myFavourites/myFavourites.html',
			controller: CoursesMyFavouritesComponent,
	  });

	CoursesMyFavouritesComponent.$inject = ['datacontext'];

	function CoursesMyFavouritesComponent(datacontext) {
		var $ctrl = this;

		activate();

		this.$routerOnActivate = function(next, previous) {
			return datacontext.courses.getMyFavourites().then(function(courses) {
				$ctrl.courses = courses;
			});
		};

		function activate() {
			$ctrl.title = 'MY FAVOURITES COURSES';
		}
	}
})();
