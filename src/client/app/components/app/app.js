(function() {
    'use strict';

    angular
        .module('app', [
            'ngComponentRouter',

						//core
						'app.core',

						//components
						'app.buttonEnrollCounter',
						'app.buttonLikeCounter',
						'app.navBar',
						'app.totalEnrollsCounter',
						'app.totalLikeCounter',

						//routes
						'app.about',
						'app.courses'
        ])
				.value('$routerRootComponent', 'app')
				.component('app', {
					templateUrl: 'components/app/app.html',
					$routeConfig: [
						{ path: '/courses', component: 'courses', name: 'Courses', useAsDefault: true },
						{ path: '/about', component: 'about', name: 'About' },
						{ path: '/**', component: 'notfound', name: 'NotFound' }
					]
				});
})();
