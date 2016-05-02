(function() {
  'use strict';

  angular
    .module('app.components')
    .component('appToolbar', {
      templateUrl: 'app/components/app-toolbar/app-toolbar.html',
      controller: AppToolbarController,
      bindings: {
          //inputs
          items: '<',
          title: '<',
          courses: '<'

          //outputs
      }
    });

    AppToolbarController.$inject = ['$mdSidenav'];

    function AppToolbarController($mdSidenav) {
      var $ctrl = this;

      $ctrl.toggleSidenav = function(menu) {
        $mdSidenav(menu).toggle();
      };
    }
})();
