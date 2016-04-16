(function() {
	'use strict';

	angular
	  .module('app.components')
	  .component('totalLikeCounter', {
  		templateUrl: 'app/components/total-like-counter/total-like-counter.html',
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
