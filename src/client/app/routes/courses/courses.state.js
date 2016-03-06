// (function() {
// 	'use strict';
//
// 	angular
// 	  .module('app.courses')
// 	  .run(appRun);
//
// 		appRun.$inject = ['routerHelper'];
//
//     function appRun(routerHelper) {
//         routerHelper.configureStates(getStates());
//     }
//
//     function getStates() {
// 				//TBD: states needs to be un-nested (no child-father hierarchy).
// 				//hijack to routable states not working correctly
//         return [
//             {
//                 state: 'courses',
//                 config: {
//                     url: '/courses',
// 										component: 'courses',
//                     resolve: {
// 												title: function() {
// 													return 'COURSES LIST'
// 												},
//                         courses: ['datacontext', function(datacontext) {
//                             return datacontext.courses.getList().then(function() {
// 															return datacontext.courses.list;
// 														});
//                         }]
//                     }
//                 }
//             },
// 						{
//                 state: 'courses.top-favourites',
//                 config: {
//                     url: '/top-favourites',
// 										component: 'courses',
//                     resolve: {
// 											title: function() {
// 												return 'COURSES TOP FAVOURITES'
// 											},
// 											courses: ['$filter', 'courses', function($filter, courses) {
// 												var result = $filter('orderBy')(courses, 'likes', true)
// 												return $filter('limitTo')(result, 10);
// 											}]
//                     }
//                 }
//             },
// 						{
// 								state: 'courses.top-enrollments',
// 								config: {
// 										url: '/top-enrollments',
// 										component: 'courses',
// 										resolve: {
// 											title: function() {
// 												return 'COURSES TOP ENROLLMENTS'
// 											},
// 											courses: ['$filter', 'courses', function($filter, courses) {
// 												var result = $filter('orderBy')(courses, 'enrolls', true);
// 						            return $filter('limitTo')(result, 10);
// 											}]
// 										}
// 								}
// 						},
// 						{
// 								state: 'courses.my-favourites',
// 								config: {
// 										url: '/my-favourites',
// 										component: 'courses',
// 										resolve: {
// 											title: function() {
// 												return 'MY FAVOURITES COURSES'
// 											},
// 											courses: ['$filter', 'courses', function($filter, courses) {
// 												var result = $filter('orderBy')(courses, 'likes', true);
// 						            return $filter('filter')(result, {liked: true});
// 											}]
// 										}
// 								}
// 						},
// 						{
// 								state: 'courses.my-enrollments',
// 								config: {
// 										url: '/my-enrollments',
// 										component: 'courses',
// 										resolve: {
// 											title: function() {
// 												return 'COURSES I\'M ENROLLED IN'
// 											},
// 											courses: ['$filter', 'courses', function($filter, courses) {
// 												var result = $filter('orderBy')(courses, 'enrolls', true);
// 						            return $filter('filter')(result, {enrolled: true});
// 											}]
// 										}
// 								}
// 						}
//         ];
//     }
// })();
