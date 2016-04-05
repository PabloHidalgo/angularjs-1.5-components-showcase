(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('repository.teachers', TeachersRepository);

    TeachersRepository.$inject = ['repository.abstract', '$q', '$filter'];

    function TeachersRepository(AbstractRepository, $q, $filter) {
        var base = new AbstractRepository('teachers');

        var repository = {
            list: {},
            getList: getList
        };

        return repository;

        function getList() {
          if ( repository.list.length > 0 ) {
            return $q.when(repository.list);
          }

          return base.getList().then(function(courses) {
            repository.list = courses;
            return repository.list;
          });
        }
    }
})();
