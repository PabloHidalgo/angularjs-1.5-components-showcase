(function() {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'shell',
                config: {
                    abstract: true,
                    views: {
                        'header@shell': {
                            templateUrl: 'app/layout/header.html'
                        },
                        'shell@': {
                            templateUrl: 'app/layout/shell.html'
                        },
                        'footer@shell': {
                            templateUrl: 'app/layout/footer.html'
                        }
                    }
                }
            }
        ];
    }
})();
