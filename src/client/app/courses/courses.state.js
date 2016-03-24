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
						templateUrl: 'app/courses/index.html',
						controller: function() {},
						resolve: {
								title: function() {
									return 'COURSES LIST'
								},
								courses: ['datacontext', function(datacontext) {
										return datacontext.courses.getList();
								}]
						}
					},
					{
						name: 'courses-top-favourites',
						url: '/courses/top-favourites',
						templateUrl: 'app/courses/index.html',
						controller: function() {},
						resolve: {
							title: function() {
								return 'COURSES TOP FAVOURITES'
							},
							courses: ['datacontext', function(datacontext) {
								return datacontext.courses.getTopFavourites();
							}]
						}
					},
					{
						name: 'courses-top-enrollments',
						url: '/courses/top-enrollments',
						templateUrl: 'app/courses/index.html',
						controller: function() {},
						resolve: {
							title: function() {
								return 'COURSES TOP ENROLLMENTS'
							},
							courses: ['datacontext', function(datacontext) {
								return datacontext.courses.getTopEnrollments();
							}]
						}
					},
					{
						name: 'courses-my-favourites',
						url: '/courses/my-favourites',
						templateUrl: 'app/courses/index.html',
						controller: function() {},
						resolve: {
							title: function() {
								return 'MY FAVOURITES COURSES'
							},
							courses: ['datacontext', function(datacontext) {
								return datacontext.courses.getMyFavourites();
							}]
						}
					},
					{
						name: 'courses-my-enrollments',
						url: '/courses/my-enrollments',
						templateUrl: 'app/courses/index.html',
						controller: function() {},
						resolve: {
							title: function() {
								return 'COURSES I\'M ENROLLED IN'
							},
							courses: ['datacontext', function(datacontext) {
								return datacontext.courses.getMyEnrollments();
							}]
						}
					}
			];
		}
})();
