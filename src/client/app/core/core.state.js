(function() {
	'use strict';

	angular
	  .module('app.core')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
      $stateProvider.state('404', {
        url: '/404',
        template: '<h1>Not found! :(</h1>',
        //templateUrl: 'app/core/404.html',
        title: '404'
			});

      $urlRouterProvider.otherwise('/courses');
    }
})();
