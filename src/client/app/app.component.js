(function() {
  'use strict';

  angular
    .module('app')
    .component('app', {
      templateUrl: 'app/app.html',
      controller: AppController,
      bindings: {
          //inputs

          //outputs
        }
    });

  AppController.$inject = ['$rootScope', '$mdSidenav'];

  function AppController($rootScope, $mdSidenav) {
    var vm = this;

    vm.data = getData();
    vm.toggleSidenav = toggleSidenav;

    $rootScope.$on('$stateChangeSuccess',updateTitle);

    function toggleSidenav(menu) {
      $mdSidenav(menu).toggle();
    }

    function updateTitle(event, toState) {
      $rootScope.title = toState.data.title;

      vm.title = toState.data.title;
    }

    function getData() {
      return {
        sidenav: {
          sections: [
            {
              name: 'Courses',
              type: 'toggle',
              expand: true,
              actions: [{
                name: 'All Courses',
                icon: 'list',
                state: 'courses'
              }, {
                name: 'Top Favourites',
                icon: 'thumbs_up_down',
                state: 'courses-top-favourites'
              }, {
                name: 'Top Enrollments',
                icon: 'swap_vert',
                state: 'courses-top-enrollments'
              }]
            },
            {
              name: 'My Career',
              type: 'toggle',
              expand: false,
              actions: [{
                name: 'My Favourites',
                icon: 'thumb_up',
                state: 'courses-my-favourites'
              }, {
                name: 'My Enrollments',
                icon: 'turned_in',
                state: 'courses-my-enrollments'
              }]
            },
            {
              name: 'Students',
              icon: 'face',
              type: 'link',
              state: 'students'
            },
            {
             name: 'Teachers',
             icon: 'assignment_ind',
             type: 'link',
             state: 'teachers'
           },
           {
            name: 'About',
            icon: 'info',
            type: 'link',
            state: 'about'
          }
        ]}
      };
    }
  }
})();
