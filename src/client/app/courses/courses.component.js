(function() {
  'use strict';

  angular
    .module('app.courses')
    .component('courses', {
      template:
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
