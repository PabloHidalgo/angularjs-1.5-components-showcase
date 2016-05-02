(function() {
  'use strict';

  angular
    .module('app.timeline')
    .config(appConfig);

    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
        $stateProvider.state({
          name: 'timeline',
          url: '/timeline',
          //component: 'timeline',
          // resolve: {
          //   courses: ['datacontext', function(datacontext) {
          //       return datacontext.courses.getList();
          //   }],
          //   searchEnabled: function() {
          //     return true;
          //   }
          // },
          data: {
            title: 'TIMELINE'
          }
        });
    }
})();
