(function() {
  'use strict';

  angular
    .module('app.courses')
    .component('courses', {
      template:
      '<search-box ' +
        'ng-if="$ctrl.searchEnabled" ' +
        'title="\'Search your course...\'"' +
        'on-change="$ctrl.search($event.text);"> ' +
      '</search-box> ' +
      '<course-gallery ' +
        'layout="row" layout-wrap ' +
        'courses="$ctrl.courses" ' +
        'filter="$ctrl.filter"> ' +
      '</course-gallery>',
      bindings: {
        //inputs
        courses: '<',
        searchEnabled: '<'

        //outputs
      },
      controller: CoursesController
    });

    function CoursesController() {
      var $ctrl = this;

      $ctrl.onInit = function() {
        $ctrl.filter = '';
      }

      $ctrl.search = function(value) {
        $ctrl.filter = value;

        console.log('CourseGalleryController::search()');
        console.log(value);
      }
    }
})();
