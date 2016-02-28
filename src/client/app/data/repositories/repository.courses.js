(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('repository.courses', CoursesRepository);

    CoursesRepository.$inject = ['repository.abstract', '$q', '$filter'];

    function CoursesRepository(AbstractRepository, $q, $filter) {
        var base = new AbstractRepository('courses');

        var repository = {
            list: {},
            getList: getList,
            enroll: enroll,
            like: like
            // getPagedList: getPagedList,
            // get: get,
            // insert: insert,
            // update: update,
            // remove: remove
        };

        return repository;

        function getList() {
            return base.getList().then(function(courses) {
              repository.list = courses;
              return repository.list;
            });
        }

        function enroll(courseId) {
          var course = findCourseById(repository.list, courseId);
          var courseEnrollStatus = course.enrolled;
  				setCourseEnrollmentStatus(course, !courseEnrollStatus);

          var operation = ( courseEnrollStatus ) ? 'Unsuscribing' : 'Enrolling';
  				console.log(operation + ' from ' + course.title + ' (' + course.id + ')...');

          return base.partialUpdate(courseId, {
            enrolls: course.enrolls,
            enrolled: course.enrolled
          });
        }

        function setCourseEnrollmentStatus(course, status) {
  				course.enrolled = status;
  				course.enrolls += ( status ) ? 1 : -1;
  				console.log(course);
  			}

        //todo: refactor courseTitle & courseId
        function like(courseId) {
          var course = findCourseById(repository.list, courseId);
          var courseLikeStatus = course.liked;
  				setCourseLikeStatus(course, !courseLikeStatus);

          var operation = ( courseLikeStatus ) ? 'Unliking' : 'Liking';
  				console.log(operation + ' from ' + course.title + ' (' + course.id + ')...');

          return base.partialUpdate(courseId, {
            likes: course.likes,
            liked: course.liked
          });
        }

        function setCourseLikeStatus(course, status) {
  				course.liked = status;
  				course.likes += ( status ) ? 1 : -1;
  				console.log(course);
  			}

        //todo: refactor to common module
        //findCourseById => findById()
        function findCourseById(courses, courseId) {
          for ( var i = 0; i < courses.length; i++ ) {
            var course = courses[i];

            if ( course.id === courseId ) {
              return course;
            }
          }

          return null;
        }

        //

        // function getPagedList(tableState) {
        //     return base.getPagedList(tableState);
        // }
        //
        // function get(id) {
        //     return base.get(id);
        // }
        //
        // function insert(data) {
        //     return base.insert(data);
        // }
        //
        // function update(data) {
        //     return base.update(data);
        // }
        //
        // function remove(id) {
        //     return base.remove(id);
        // }
    }
})();
