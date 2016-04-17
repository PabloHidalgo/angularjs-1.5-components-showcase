(function() {
  'use strict';

  angular
    .module('app.about')
    .config(appConfig);

    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
      $stateProvider.state('about', {
        name: 'about',
        url: '/about',
        component: 'about',
        resolve: {
          students: ['datacontext', function(datacontext) {
              return datacontext.students.getList();
          }]
        },
        data: {
          title: 'ABOUT'
        }
      });
    }
})();
