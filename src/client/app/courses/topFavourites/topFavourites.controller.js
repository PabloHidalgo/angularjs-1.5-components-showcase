(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .controller('CoursesTopFavouritesController', CoursesTopFavouritesController);

	CoursesTopFavouritesController.$inject = ['title', 'courses', '$filter'];

	function CoursesTopFavouritesController(title, courses, $filter) {
		var vm = this;

		vm.title = title;
		vm.courses = getTopFavourites(courses);

		function getTopFavourites(courses) {
			var result = $filter('orderBy')(courses, 'likes', true)
			return $filter('limitTo')(result, 10);
		}
	}
})();
