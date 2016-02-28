(function () {
    'use strict';

    angular
      .module('app.core')
      .config(toastrConfig);

    toastrConfig.$inject = ['toastr'];

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }
})();
