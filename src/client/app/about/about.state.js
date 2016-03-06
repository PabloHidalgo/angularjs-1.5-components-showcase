(function() {
	'use strict';

	angular
	  .module('app.about')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
      $stateProvider.state('about', {
				url: '/about',
				parent: 'shell',
				views: {
						'content@shell': {
							templateUrl: 'app/about/index.html',
							controller: function() {
								this.$onInit = function() {
									console.log('about::$onInit()');
								}
							},
							controllerAs: 'vm'
						}
				}
			});
    }
})();
