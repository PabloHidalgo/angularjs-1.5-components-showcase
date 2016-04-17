(function() {
  'use strict';

  angular
    .module('app.components')
    .component('buttonLikeCounter', {
      templateUrl: 'app/components/button-like-counter/button-like-counter.html',
      bindings: {
        //inputs
        likes: '<',
        liked: '<',

        //outputs
        onLikeClicked: '&'
      }
    });
})();
