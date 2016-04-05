(function() {
	'use strict';

	angular
	  .module('app.students')
	  .component('studentsListItem', {
  		templateUrl: 'app/students/components/students-list-item/students-list-item.html',
			controller: StudentsListItemController,
	  	bindings: {
				//inputs
	  		student: '<'

				//outputs
	  	}
	  });

		function StudentsListItemController() {
			var vm = this;

			vm.$onInit = function() {
				console.log('StudentsListItemController::$onInit');
			};
		}
})();
