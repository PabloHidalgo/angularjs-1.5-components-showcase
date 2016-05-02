(function() {
  'use strict';

  angular
    .module('app.components')
    .component('searchBox', {
      templateUrl: 'app/components/search-box/search-box.html',
      controller: SearchBoxController,
      bindings: {
        //inputs
        title: '<',

        //outputs
        onChange: '&'
      }
    });

  function SearchBoxController() {
    var $ctrl = this;

    $ctrl.onSearch = function(value) {
      console.log('$SearchBoxController::onSearch()');
      console.log(value);

      $ctrl.onChange({
        $event: {
          text: value
        }
      });
    }
  }
})();
