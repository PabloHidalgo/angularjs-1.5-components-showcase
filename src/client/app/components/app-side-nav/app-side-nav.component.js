(function() {
  'use strict';

  angular
    .module('app.components')
    .component('appSideNav', {
      templateUrl: 'app/components/app-side-nav/app-side-nav.html',
      controller: AppSideNavController,
      bindings: {
          //inputs
          sections: '<'

          //outputs
        }
    });

    AppSideNavController.$inject = ['$rootScope', '$mdSidenav'];

    function AppSideNavController($rootScope, $mdSidenav) {
      $rootScope.$on('$stateChangeSuccess', stateChangeSuccessHandler);

      function stateChangeSuccessHandler(event, toState) {
        closeSideNav();
      }

      function closeSideNav() {
        $mdSidenav('left').close();
      }
    }
})();
