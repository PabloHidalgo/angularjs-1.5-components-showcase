(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('repository.abstract', AbstractRepository);

    AbstractRepository.$inject = ['$http', 'ENVIRONMENT'];

    /* @ngInject */
    function AbstractRepository($http, ENVIRONMENT) {
        function Ctor(resourceName) {
            this.urlBase = ENVIRONMENT.api + '/' + resourceName;

            this.getList = getList.bind(this);
            this.get = get.bind(this);
            this.insert = insert.bind(this);
            this.update = update.bind(this);
            this.partialUpdate = partialUpdate.bind(this);
            this.remove = remove.bind(this);
        }

        return Ctor;

        function getList(params) {
            /* jshint -W040 */
            return $http.get(this.urlBase, {
                params: params
            }).then(function(response) {
                return response.data;
            });
        }

        function get(id, params) {
            /* jshint -W040 */
            return $http.get(this.urlBase + '/' + id, {
                params: params
            }).then(function(response) {
                return response.data;
            });
        }

        function insert(data) {
            /* jshint -W040 */
            return $http.post(this.urlBase, data);
        }

        function update(id, data) {
            /* jshint -W040 */
            return $http.put(this.urlBase + '/' + id, data);
        }

        function partialUpdate(id, data) {
            /* jshint -W040 */
            return $http.patch(this.urlBase + '/' + id, data);
        }

        function remove(id) {
            /* jshint -W040 */
            return $http.delete(this.urlBase + '/' + id);
        }
    }
})();
