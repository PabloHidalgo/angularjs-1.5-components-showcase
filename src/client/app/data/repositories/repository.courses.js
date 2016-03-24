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
            getTopFavourites: getTopFavourites,
            getTopEnrollments: getTopEnrollments,
            getMyFavourites: getMyFavourites,
            getMyEnrollments: getMyEnrollments,
            enroll: enroll,
            like: like
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

        function getTopFavourites() {
          return repository.getList().then(function(courses) {
  					var result = $filter('orderBy')(courses, 'likes', true);
  					return $filter('limitTo')(result, 10);
          });
        }

        function getTopEnrollments() {
          return repository.getList().then(function(courses) {
  					var result = $filter('orderBy')(courses, 'enrolls', true);
            return $filter('limitTo')(result, 10);
          });
        }

        function getMyFavourites() {
          return repository.getList().then(function(courses) {
            var result = $filter('orderBy')(courses, 'likes', true);
            return $filter('filter')(result, {liked: true});
          });
        }

        function getMyEnrollments() {
          return repository.getList().then(function(courses) {
  					var result = $filter('orderBy')(courses, 'enrolls', true);
            return $filter('filter')(result, {enrolled: true});
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
    }
})();
