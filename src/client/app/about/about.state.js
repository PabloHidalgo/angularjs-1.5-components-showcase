(function() {
	'use strict';

	angular
	  .module('app.about')
	  .run(appRun);

		appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'about',
                config: {
                    url: '/about',
										// component: 'courseGallery',
										// resolve: { courses: ['datacontext', function(datacontext) {
										// 		return datacontext.courses.getList().then(function() {
										// 			return datacontext.courses.list;
										// 		});
										// }]}
										parent: 'shell',
										views: {
                        'content@shell': {
			                		templateUrl: 'app/about/index.html'
												}
										}
                }
            }
        ];
    }
})();

/*
appConfig.$inject = ['$stateProvider'];

function appConfig($stateProvider) {
	$stateProvider.state({  name: 'about',  url: '/about',  component: 'courseGallery', resolve: { courses: function() {return []; }} });
}
*/
