(function() {
  'use strict';

  angular
    .module('app.students')
    .component('studentItem', {
      templateUrl: 'app/students/components/student-item/student-item.html',
      controller: StudentItemController,
      bindings: {
        //inputs
        student: '<'

        //outputs
      }
    });

    function StudentItemController() {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        console.log('StudentItemController::$onInit');
      };
    }
})();
