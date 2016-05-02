(function() {
  'use strict';

  angular
    .module('app.components')
    .component('timelineGallery', {
      templateUrl: 'app/components/timeline-gallery/timeline-gallery.html',
      bindings: {
        //inputs

        //outputs
      },
      controller: TimelineGalleryController
    });

    function TimelineGalleryController() {
      var $ctrl = this;

      $ctrl.onInit = function() {
        console.log('TimelineGalleryController::onInit()');
      }
    }
})();
