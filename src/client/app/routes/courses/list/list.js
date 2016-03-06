(function() {
	'use strict';

	angular
	  .module('app.courses', [])
	  .component('coursesList', {
  		templateUrl: 'app/routes/courses/list/list.html',
			controller: CoursesListComponent//,
			// $routeConfig: [
			// 	{path:'/top-favourites', name: 'CoursesTopFavourites', component: 'coursesTopFavourites' },
			// 	//{path:'/:id', name: 'CrisisDetail', component: 'crisisDetail'}
			// ]
	  });

	CoursesListComponent.$inject = ['datacontext'];

	function CoursesListComponent(datacontext) {
		var $ctrl = this;

		activate();

		this.$routerOnActivate = function(next, previous) {
	    return datacontext.courses.getList().then(function() {
				$ctrl.courses = datacontext.courses.list;
			});
		};

		function activate() {
			$ctrl.title = 'COURSES LIST';
		}

		// return datacontext.courses.getTopFavourites().then(function(courses) {
		// 	$ctrl.courses = courses; //datacontext.courses.list;
		// });
	}
})();
