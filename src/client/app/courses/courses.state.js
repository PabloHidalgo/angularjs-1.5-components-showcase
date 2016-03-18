(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .config(appConfig);

		appConfig.$inject = ['$stateProvider'];

    function appConfig($stateProvider) {
			var states = [
					{
							state: 'courses',
							config: {
									url: '/courses',
									templateUrl: 'app/courses/index.html',
									controller: function() {},
									resolve: {
											title: function() {
												return 'COURSES LIST'
											},
											courses: ['datacontext', function(datacontext) {
													return datacontext.courses.getList().then(function() {
														return datacontext.courses.list;
													});
											}]
									}
							}
					},
					{
							state: 'courses.top-favourites',
							config: {
									url: '/top-favourites',
									templateUrl: 'app/courses/index.html',
									controller: function() {},
									resolve: {
										title: function() {
											return 'COURSES TOP FAVOURITES'
										},
										courses: ['$filter', 'courses', function($filter, courses) {
											console.log('entra');
											var result = $filter('orderBy')(courses, 'likes', true)
											return $filter('limitTo')(result, 10);
										}]
									}
							}
					},
					{
							state: 'courses.top-enrollments',
							config: {
									url: '/top-enrollments',
									templateUrl: 'app/courses/index.html',
									controller: function() {},
									resolve: {
										title: function() {
											return 'COURSES TOP ENROLLMENTS'
										},
										courses: ['$filter', 'courses', function($filter, courses) {
											var result = $filter('orderBy')(courses, 'enrolls', true);
											return $filter('limitTo')(result, 10);
										}]
									}
							}
					},
					{
							state: 'courses.my-favourites',
							config: {
									url: '/my-favourites',
									templateUrl: 'app/courses/index.html',
									controller: function() {},
									resolve: {
										title: function() {
											return 'MY FAVOURITES COURSES'
										},
										courses: ['$filter', 'courses', function($filter, courses) {
											var result = $filter('orderBy')(courses, 'likes', true);
											return $filter('filter')(result, {liked: true});
										}]
									}
							}
					},
					{
							state: 'courses.my-enrollments',
							config: {
									url: '/my-enrollments',
									templateUrl: 'app/courses/index.html',
									controller: function() {},
									resolve: {
										title: function() {
											return 'COURSES I\'M ENROLLED IN'
										},
										courses: ['$filter', 'courses', function($filter, courses) {
											var result = $filter('orderBy')(courses, 'enrolls', true);
											return $filter('filter')(result, {enrolled: true});
										}]
									}
							}
					}
			];

			states.forEach(function(state) {
					$stateProvider.state(state.state, state.config);
			});
    }
})();
