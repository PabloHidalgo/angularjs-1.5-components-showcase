(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('repository.students', StudentsRepository);

    StudentsRepository.$inject = ['repository.abstract', '$q', '$filter'];

    function StudentsRepository(AbstractRepository, $q, $filter) {
        var base = new AbstractRepository('students');

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
