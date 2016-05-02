(function() {
  'use strict';

  angular
    .module('app.components')
    .component('timelineCard', {
      templateUrl: 'app/components/timeline-card/timeline-card.html',
      bindings: {
        //inputs

        //outputs
      },
      controller: TimelineCardController
    });

    function TimelineCardController() {
      var $ctrl = this;

      $ctrl.onInit = function() {
        console.log('TimelineCardController::onInit()');
      }
    }
})();
