(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('coursesTopFavourites', {
  		templateUrl: 'app/routes/courses/topFavourites/topFavourites.html',
			controller: CoursesTopFavouritesComponent,
	  });

	CoursesTopFavouritesComponent.$inject = ['datacontext'];

	function CoursesTopFavouritesComponent(datacontext) {
		var $ctrl = this;

		activate();

		this.$routerOnActivate = function(next, previous) {
			return datacontext.courses.getTopFavourites().then(function(courses) {
				$ctrl.courses = courses;
			});
		};

		function activate() {
			$ctrl.title = 'TOP FAVOURITES';
		}
	}
})();
