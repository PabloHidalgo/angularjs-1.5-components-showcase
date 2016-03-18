(function() {
	'use strict';

	angular
	  .module('app.about')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
      $stateProvider.state('about', {
				url: '/about',
				templateUrl: 'app/about/index.html'
			});
    }
})();
