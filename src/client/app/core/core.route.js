(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/courses');
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    template: '<h1>Not found! :(</h1>',
                    //templateUrl: 'app/core/404.html',
                    title: '404'
                }
            }
        ];
    }
})();
