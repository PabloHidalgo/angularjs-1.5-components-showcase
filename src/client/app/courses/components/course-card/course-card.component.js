(function() {
  'use strict';

  angular
    .module('app.courses')
    .component('courseCard', {
      templateUrl: 'app/courses/components/course-card/course-card.html',
      bindings: {
        //inputs
        id: '<',

        title: '<',
        content: '<',
        image: '<',

        enrolls: '<',
        enrolled: '<',

        likes: '<',
        liked: '<',

        //outputs
      },
      controller: CourseCardController
    });

    CourseCardController.$inject = ['datacontext', '$mdToast'];

    function CourseCardController(datacontext, $mdToast) {
      var $ctrl = this;

      $ctrl.$onInit = function() {
        console.log('CourseCardController:$onInit');
        console.log($ctrl);
      };

      $ctrl.onEnroll = function(courseId, title, enrolled) {
        console.log('CourseCardController::onEnroll - ' + enrolled);
        console.log(arguments);

        var message = 'You ' + ( enrolled ? 'enrolled in' : 'unsubscribed from' ) + ' ' + title;
        showToast(message);
      };

      $ctrl.onLike = function(courseId, title, liked) {
        console.log('CourseCardController::onLike - ' + liked);
        console.log(arguments);

        var message = 'You ' + ( liked ? 'liked' : 'unliked' ) + ' ' + title;
        showToast(message);
      };

      function showToast(message) {
        var toast = $mdToast.simple().content(message).position('bottom right');
        $mdToast.show(toast);
      }
    }
})();
