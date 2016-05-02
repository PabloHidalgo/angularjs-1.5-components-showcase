(function() {
  'use strict';

  angular
    .module('app.students')
    .component('students', {
      template:
      '<search-box ' +
        'title="\'Search a student...\'"' +
        'on-change="$ctrl.search($event.text);"> ' +
      '</search-box> ' +
      '<h2>Total students: {{$ctrl.students.length}}</h2> ' +
      '<students-list students="$ctrl.students" filter="$ctrl.filter"></students-list>',
      bindings: {
        //inputs
        title: '<',
        students: '<'

        //outputs
      },
      controller: StudentsController
    });

    function StudentsController() {
      var $ctrl = this;

      $ctrl.onInit = function() {
        $ctrl.filter = '';
      }

      $ctrl.search = function(value) {
        $ctrl.filter = value;

        console.log('StudentsController::search()');
        console.log(value);
      }
    }
})();
