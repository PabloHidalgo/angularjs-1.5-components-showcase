(function() {
	'use strict';

	angular
	  .module('app.students')
	  .component('studentsList', {
  		templateUrl: 'app/students/components/students-list/students-list.html',
			controller: StudentsListController,
	  	bindings: {
				//inputs
	  		students: '<'

				//outputs
	  	}
	  });

		function StudentsListController() {
			var vm = this;

			vm.$onInit = function() {
				console.log('StudentsListController::$onInit');
			};
		}
})();
