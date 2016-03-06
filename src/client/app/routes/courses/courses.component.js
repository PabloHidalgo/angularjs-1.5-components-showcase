(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courses', {
  		template:
				'{{$ctrl}} ' +
				'<h1 style="text-align: center;">{{$ctrl.title}}</h1>' +
				'<course-gallery ' +
				'	layout="row" layout-wrap ' +
				'	courses="$ctrl.courses"> ' +
				'</course-gallery>',
	  	bindings: {
				//inputs
	  		courses: '<',
        title: '<'

				//outputs
	  	}
	  });
})();
