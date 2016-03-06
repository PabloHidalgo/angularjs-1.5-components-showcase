(function() {
    'use strict';

    angular
        .module('app', [
            'ngComponentRouter',

						//core modules
						'app.core',
						'app.data',

						//components
						'app.buttonEnrollCounter',
						'app.buttonLikeCounter',
						'app.courseActions',
						'app.courseCard',
						'app.courseGallery',
						'app.navBar',
						'app.totalEnrollsCounter',
						'app.totalLikeCounter',

						//routes
						'app.about',
						'app.courses',
            'app.notFound'
        ])
        .config(appConfig)
				.value('$routerRootComponent', 'app')
				.component('app', {
					templateUrl: 'app/components/app/app.html',
					$routeConfig: [
						{ path: '/courses', component: 'coursesList', name: 'CoursesList', useAsDefault: true },
						{ path: '/courses/top-favourites', component: 'coursesTopFavourites', name: 'CoursesTopFavourites' },
						{ path: '/courses/top-enrollments', component: 'coursesTopEnrollments', name: 'CoursesTopEnrollments' },
            { path: '/courses/my-favourites', component: 'coursesMyFavourites', name: 'CoursesMyFavourites' },
            { path: '/courses/my-enrollments', component: 'coursesMyEnrollments', name: 'CoursesMyEnrollments' },

            { path: '/about', component: 'about', name: 'About' }//,
						//{ path: '/**', component: 'notfound', name: 'NotFound' }
					]
				});

    appConfig.$inject = ['$locationProvider'];

    function appConfig($locationProvider) {
      $locationProvider.html5Mode(true);
    }
})();
