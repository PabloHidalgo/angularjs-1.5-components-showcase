(function() {
	'use strict';

	angular
	  .module('app.teachers')
	  .component('teachers', {
  		template:
      '<h1 style="text-align: center;">{{$ctrl.title}}</h1> ' +
      '<h2>Total teachers: {{$ctrl.teachers.length}}</h2> ',
			bindings: {
				//inputs
        title: '<',
        teachers: '<'

				//outputs
			},
			controller: function() { }
	  });
})();
