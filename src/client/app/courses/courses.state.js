(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .run(appRun);

		appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'courses',
                config: {
                    url: '/courses',
										parent: 'shell',
										views: {
                        'content@shell': {
													//ONLY if you hack angular-ui-router to $resolve property to scope.
													//checkout this github topic & git:
													//https://github.com/jonricaurte/ui-router/commit/a4cab7d110fe597810e4a2ef8c249bd31cfc4125
													//https://github.com/angular-ui/ui-router/issues/2547
													templateUrl: 'app/courses/index/index.html'
												}
										},
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
										views: {
                        'content@shell': {
													//ONLY if you hack angular-ui-router to $resolve property to scope.
													//checkout this github topic & git:
													//https://github.com/jonricaurte/ui-router/commit/a4cab7d110fe597810e4a2ef8c249bd31cfc4125
													//https://github.com/angular-ui/ui-router/issues/2547
													templateUrl: 'app/courses/index/index.html'
												}
										},
                    resolve: {
											title: function() {
												return 'COURSES TOP FAVOURITES'
											},
											courses: ['$filter', 'courses', function($filter, courses) {
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
										views: {
												'content@shell': {
													//ONLY if you hack angular-ui-router to $resolve property to scope.
													//checkout this github topic & git:
													//https://github.com/jonricaurte/ui-router/commit/a4cab7d110fe597810e4a2ef8c249bd31cfc4125
													//https://github.com/angular-ui/ui-router/issues/2547
													templateUrl: 'app/courses/index/index.html'
												}
										},
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
										views: {
												'content@shell': {
													//ONLY if you hack angular-ui-router to $resolve property to scope.
													//checkout this github topic & git:
													//https://github.com/jonricaurte/ui-router/commit/a4cab7d110fe597810e4a2ef8c249bd31cfc4125
													//https://github.com/angular-ui/ui-router/issues/2547
													templateUrl: 'app/courses/index/index.html'
												}
										},
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
										views: {
												'content@shell': {
													//ONLY if you hack angular-ui-router to $resolve property to scope.
													//checkout this github topic & git:
													//https://github.com/jonricaurte/ui-router/commit/a4cab7d110fe597810e4a2ef8c249bd31cfc4125
													//https://github.com/angular-ui/ui-router/issues/2547
													templateUrl: 'app/courses/index/index.html'
												}
										},
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
    }
})();
