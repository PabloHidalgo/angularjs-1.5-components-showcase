(function() {
	'use strict';

	angular
	  .module('app.students')
	  .component('students', {
  		template:
      '<h1 style="text-align: center;">{{$ctrl.title}}</h1> ' +
      '<h2>Total students: {{$ctrl.students.length}}</h2> ' +
      '<students-list students="$ctrl.students"></students-list>',
			bindings: {
				//inputs
        title: '<',
        students: '<'

				//outputs
			},
			controller: function() { }
	  });
})();
