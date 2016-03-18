(function () {
    'use strict';

    angular.module('app', [
      /*
      * Everybody has access to these.
      * We could place these under every feature area,
      * but this is easier to maintain.
      */
      'app.about',
      'app.components',
      'app.core',
      'app.data',

      /*
      * Feature areas
      */
      'app.courses'
    ]);
}());
