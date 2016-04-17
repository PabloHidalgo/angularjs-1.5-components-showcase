(function() {
  'use strict';

  angular
    .module('app.teachers')
    .config(appConfig);

    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
      $stateProvider.state({
        name: 'teachers',
        url: '/teachers',
        component: 'teachers',
        resolve: {
          teachers: ['datacontext', function(datacontext) {
              return datacontext.teachers.getList();
          }]
        },
        data: {
          title: 'TEACHERS LIST'
        }
      });
    }
})();
