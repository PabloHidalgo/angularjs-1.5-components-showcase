(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .controller('CoursesIndexController', CoursesIndexController);

	CoursesIndexController.$inject = ['title', 'courses'];

	function CoursesIndexController(title, courses) {
		var vm = this;

		vm.title = title;
		vm.courses = courses;
	}
})();
