(function() {
  'use strict';

  angular
    .module('app.courses')
    .component('courseActions', {
      templateUrl: 'app/courses/components/course-actions/course-actions.html',
      bindings: {
        //inputs
        courseId: '<',

        totalEnrolls: '<',
        enrolled: '<',

        totalLikes: '<',
        liked: '<',

        //outputs
        onEnroll: '&',
        onLike: '&'
      },
      controller: CourseActionsController
    });

    CourseActionsController.$inject = ['datacontext'];

    function CourseActionsController(datacontext) {
      var vm = this;

      vm.toggleEnrollCourse = function(courseId) {
        console.log('CourseActionsController::toggleEnrollCourse');
        console.log(courseId);

        datacontext.courses.enroll(courseId).then(function(course) {
          return vm.onEnroll({
              $event: {
                id: course.id,
                title: course.title,
                enrolled: course.enrolled
              }
            });
        });
      };

      vm.toggleLikeCourse = function(courseId) {
        console.log('CourseActionsController::toggleLikeCourse');
        console.log(courseId);

        datacontext.courses.like(courseId).then(function(course) {
          return vm.onLike({
              $event: {
                id: course.id,
                title: course.title,
                liked: course.liked
              }
            });
        });
      };
    }
})();
