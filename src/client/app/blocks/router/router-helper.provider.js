/* Help configure the state-base ui.router */
(function() {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider);

    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;
        RouterHelper.$inject = ['$location', '$rootScope', '$state', '$interpolate', 'logger'];
        /* @ngInject */
        function RouterHelper($location, $rootScope, $state, $interpolate, logger) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {
                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var destination = (toState &&
                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        var msg = 'Error routing to ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');
                        logger.warning(msg, [toState]);
                        $location.path('/');
                    }
                );
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
            }

            function getStates() { return $state.get(); }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function() {
                        stateCounts.changes++;
                        handlingStateChangeError = false;

                        var titleExp = $interpolate($state.current.title || '');
                        var interpolatedStateTitle = titleExp($state.$current.locals.resolve.$$values);

                        var title = config.docTitle + ( interpolatedStateTitle !== '' ) ? ' ' + interpolatedStateTitle : '' ;
                        //var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; // data bind to <title>

                        /*
                        //eehNavigation close menuItems on state change...
                        var menuItems = eehNavigation.menuItems();
                        for ( var menuItem in menuItems ) {
                            var state = eehNavigation.menuItem(menuItem).state || 'undefined';
                            console.log(state);
                            console.log(!$state.includes(state));
                            eehNavigation.menuItem(menuItem).isCollapsed = (state == 'undefined' || !$state.includes(state));
                        }

                        console.log(eehNavigation.menuItems());
                        */
                    }
                );
            }

            /*

                function updateDocTitle() {
                    $rootScope.$on('$stateChangeSuccess',
                        function (event, toState, toParams, fromState, fromParams) {
                            routeCounts.changes++;
                            handlingRouteChangeError = false;

                            var stateTitle = (toState.title || toState.data.title || '');
                            var titleExp = $interpolate($state.current.title || '');
                            var interpolatedStateTitle = titleExp($state.$current.locals.resolve.$$values);

                            var title = routehelperConfig.config.docTitle + ( interpolatedStateTitle != '' ? ' - ' + interpolatedStateTitle : '' );
                            $rootScope.title = title; // data bind to <title>
                        }
                    );
                }
            */
        }
    }
})();
