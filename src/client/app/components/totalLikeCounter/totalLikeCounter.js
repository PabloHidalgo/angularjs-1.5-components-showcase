(function() {
	'use strict';

	angular
	  .module('app.totalLikeCounter', [])
	  .component('totalLikeCounter', {
  		templateUrl: 'app/components/totalLikeCounter/totalLikeCounter.html',
	  	bindings: {
  			//inputs
        courses: '<'
      },
      controller: TotalLikeCounterController
	  });

    TotalLikeCounterController.$inject = [];

    function TotalLikeCounterController() {
      var vm = this;

      vm.calculateLikeCounter = calculateLikeCounter;

      function calculateLikeCounter(courses) {
        return ( courses || [] ).filter(function(course) {
          return course.liked;
        }).length;
      }
    }
})();
