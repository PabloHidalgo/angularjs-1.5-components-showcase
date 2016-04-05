(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('datacontext', datacontext);

    datacontext.$inject = ['$injector'];

    function datacontext($injector) {
        var repoNames = ['courses', 'students', 'teachers'];
        var service = {};

        init();

        return service;

        function init() {
            defineLazyLoadedRepos();
        }

        // Add ES5 property to datacontext for each named repo
        function defineLazyLoadedRepos() {
            repoNames.forEach(function(name) {
                Object.defineProperty(service, name, {
                    configurable: true, // will redefine this property once
                    get: function() {
                        // The 1st time the repo is request via this property,
                        // we ask the repositories for it (which will inject it).
                        var repo = getRepo(name);
                        // Rewrite this property to always return this repo;
                        // no longer redefinable
                        Object.defineProperty(service, name, {
                            value: repo,
                            configurable: false,
                            enumerable: true
                        });
                        return repo;
                    }
                });
            });
        }

        // Get named Repository Ctor (by injection), new it, and initialize it
        function getRepo(repoName) {
            var fullRepoName = 'repository.' + repoName.toLowerCase();
            var factory = $injector.get(fullRepoName);
            return factory;
        }
    }
})();

/*


        function prime() {
            // There are many paths through here, all must return a promise.

            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            // look in local storage, if data is here,
            // grab it. otherwise get from 'resources'
            var storageEnabledAndHasData = zStorage.load(manager);
            var promise = storageEnabledAndHasData ?
                $q.when(common.logger.info('Loading entities and metadata from local storage')) :
                loadLookupsFromRemote();

            primePromise = promise.then(success);
            return primePromise;

            function loadLookupsFromRemote() {
                // get lookups and speakers from remote data source, in parallel
                var promise = $q.all([service.lookup.getAll(), service.speaker.getPartials(true)]);
                if (!model.useManualMetadata) {
                    // got metadata from remote service; now extend it
                    promise = promise.then(function() {
                        model.extendMetadata(manager.metadataStore);
                    });
                }
                return promise.then(function() {
                    zStorage.save();
                });
            }

            function success() {
                isPrimed = true;
                common.logger.info('Primed data', service.lookup.cachedData);
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() {
                    return $q.all(nextPromises);
                })
                .catch(exception.catcher('"ready" function failed'));
        }

                    // functions
            cancel: cancel,
            markDeleted: markDeleted,
            ready: ready,
            save: save,
            // sub-services
            zStorage: zStorage,
            zStorageWip: zStorageWip
*/
