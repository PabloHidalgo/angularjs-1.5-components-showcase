(function() {
  'use strict';

  angular
    .module('app.courses')
    .config(appConfig);

    appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
      var states = getStates();

      states.forEach(function(state) {
          $stateProvider.state(state);
      });
    }

    function getStates() {
      return [
          {
            name: 'courses',
            url: '/courses',
            component: 'courses',
            resolve: {
              courses: ['datacontext', function(datacontext) {
                  return datacontext.courses.getList();
              }]
            },
            data: {
              title: 'COURSES LIST'
            }
          },
          {
            name: 'courses-top-favourites',
            url: '/courses/top-favourites',
            component: 'courses',
            resolve: {
              courses: ['datacontext', function(datacontext) {
                return datacontext.courses.getTopFavourites();
              }]
            },
            data: {
              title: 'COURSES TOP FAVOURITES'
            }
          },
          {
            name: 'courses-top-enrollments',
            url: '/courses/top-enrollments',
            component: 'courses',
            resolve: {
              courses: ['datacontext', function(datacontext) {
                return datacontext.courses.getTopEnrollments();
              }]
            },
            data: {
              title: 'COURSES TOP ENROLLMENTS'
            }
          },
          {
            name: 'courses-my-favourites',
            url: '/courses/my-favourites',
            component: 'courses',
            resolve: {
              courses: ['datacontext', function(datacontext) {
                return datacontext.courses.getMyFavourites();
              }]
            },
            data: {
              title: 'MY FAVOURITES COURSES'
            }
          },
          {
            name: 'courses-my-enrollments',
            url: '/courses/my-enrollments',
            component: 'courses',
            resolve: {
              courses: ['datacontext', function(datacontext) {
                return datacontext.courses.getMyEnrollments();
              }]
            },
            data: {
              title: 'COURSES I\'M ENROLLED IN'
            }
          }
      ];
    }
})();
