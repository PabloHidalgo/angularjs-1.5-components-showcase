(function() {
	'use strict';

	angular
	  .module('app')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
			var states = getStates();

			states.forEach(function(state) {
					$stateProvider.state(state);
			});

      $urlRouterProvider.otherwise('/courses');
    }

		function getStates() {
			return [
					{
            name: '404',
            url: '/404',
            template: '<h1>Not found! :(</h1>',
            //templateUrl: 'app/core/404.html',
            title: '404'
					}
			];
		}
})();
