(function () {
    'use strict';

    angular.module('app', [
      'ui.router',
      'ui.router.state.events',
      'angular-loading-bar',
      'ngMaterial',
      'ngAnimate',
      'ngAria',

      /*
      * Everybody has access to these.
      * We could place these under every feature area,
      * but this is easier to maintain.
      */
      'app.components',
      'app.constants',
      'app.data',

      /*
      * Feature areas
      */
      'app.about',
      'app.courses',
      'app.students',
      'app.teachers',
      'app.timeline'
    ]);
}());
