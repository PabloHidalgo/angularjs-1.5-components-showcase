(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courses', {
  		template:
      '<h1 style="text-align: center;">{{$ctrl.title}}</h1> ' +
      '<course-gallery ' +
      	'layout="row" layout-wrap ' +
      	'courses="$ctrl.courses"> ' +
      '</course-gallery>',
			bindings: {
				//inputs
        title: '<',
        courses: '<'

				//outputs
			},
			controller: function() { }
	  });
})();
