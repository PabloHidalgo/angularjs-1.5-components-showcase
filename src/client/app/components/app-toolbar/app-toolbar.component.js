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
          title: '<'

          //outputs
      }
    });

    AppToolbarController.$inject = ['$mdSidenav'];

    function AppToolbarController($mdSidenav) {
      var vm = this;

      vm.toggleSidenav = function(menu) {
        $mdSidenav(menu).toggle();
      }
    }
})();
