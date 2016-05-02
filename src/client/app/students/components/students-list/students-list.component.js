(function() {
  'use strict';

  angular
    .module('app.students')
    .component('studentsList', {
      templateUrl: 'app/students/components/students-list/students-list.html',
      controller: StudentsListController,
      bindings: {
        //inputs
        students: '<',
        filter: '<'

        //outputs
      }
    });

    function StudentsListController() {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        console.log('StudentsListController::$onInit');
      };
    }
})();
