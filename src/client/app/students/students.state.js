(function() {
	'use strict';

	angular
	  .module('app.students')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
			$stateProvider.state({
				name: 'students',
	      url: '/students',
	      component: 'students',
	      resolve: {
					students: ['datacontext', function(datacontext) {
							return datacontext.students.getList();
					}],
					title: function() {
						return 'STUDENTS LIST'
					}
	      }
			});
    }
})();
