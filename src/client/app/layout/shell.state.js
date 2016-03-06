(function() {
	'use strict';

	angular
	  .module('app.layout')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
      $stateProvider.state('shell', {
        abstract: true,
        views: {
            'header@shell': {
                templateUrl: 'app/layout/header.html'
            },
            'shell@': {
                templateUrl: 'app/layout/shell.html'
            },
            'footer@shell': {
                templateUrl: 'app/layout/footer.html'
            }
        }
			});
    }
})();
