(function() {
	'use strict';

	angular
	  .module('app.totalEnrollsCounter', [])
	  .component('totalEnrollsCounter', {
  		templateUrl: 'app/components/totalEnrollsCounter/totalEnrollsCounter.html',
	  	bindings: {
				//inputs
        courses: '<'
	  	},
      controller: TotalEnrollsCounterController
	  });

    TotalEnrollsCounterController.$inject = [];

    function TotalEnrollsCounterController() {
      var vm = this;

      vm.calculateEnrollsCounter = calculateEnrollsCounter;

      function calculateEnrollsCounter(courses) {
        return ( courses || [] ).filter(function(course) {
          return course.enrolled;
        }).length;
      }
    }
})();
