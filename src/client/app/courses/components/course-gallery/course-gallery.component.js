(function() {
  'use strict';

  angular
    .module('app.courses')
    .component('courseGallery', {
      templateUrl: 'app/courses/components/course-gallery/course-gallery.html',
      controller: CourseGalleryController,
      bindings: {
        //inputs
        courses: '<',
        filter: '<'

        //outputs
      }
    });

    CourseGalleryController.$inject = [];

    function CourseGalleryController() {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        console.log('CourseGalleryController::$onInit');
      };
    }
})();
