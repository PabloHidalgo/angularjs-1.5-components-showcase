(function() {
  'use strict';

  angular
    .module('app')
    .run(appRun);

  appRun.$inject = ['$rootScope', '$location', '$window'];

  function appRun($rootScope, $location, $window) {
    if ($window.ga) {
      // initialise google analytics
      $window.ga('create', 'UA-77220706-1', 'auto');

      // record page view on each state change
      $rootScope.$on('$stateChangeSuccess', function (event) {
          $window.ga('send', 'pageview', $location.path());
      });
    }
  }
})();
