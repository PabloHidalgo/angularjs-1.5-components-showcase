(function() {
  'use strict';

  angular
    .module('app.components')
    .component('totalLikeCounter', {
      templateUrl: 'app/components/total-like-counter/total-like-counter.html',
      bindings: {
        //inputs
        courses: '<',
        display: '<'

        //outputs
      },
      controller: TotalLikeCounterController
    });

    TotalLikeCounterController.$inject = [];

    function TotalLikeCounterController() {
      var $ctrl = this;

      $ctrl.calculateLikeCounter = calculateLikeCounter;

      function calculateLikeCounter(courses) {
        return ( courses || [] ).filter(function(course) {
          return course.liked;
        }).length;
      }
    }
})();
