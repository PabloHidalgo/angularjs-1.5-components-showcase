(function() {
	'use strict';

	angular
	  .module('app.components')
	  .component('appHeader', {
  		templateUrl: 'app/components/app-header/app-header.html',
			bindings: {
				//inputs

				//outputs
			},
			controller: function() {
				var $ctrl = this;

				$ctrl.$onInit = function() {
					$ctrl.menuItems = [
						{ name: 'All Courses', icon: 'list', sref: 'courses' },
						{ name: 'Top Favourites', icon: 'thumbs_up_down', sref: 'courses-top-favourites' },
						{ name: 'Top Enrollments', icon: 'swap_vert', sref: 'courses-top-enrollments' },
						{ name: 'My Favourites', icon: 'thumb_up', sref: 'courses-my-favourites' },
						{ name: 'My Enrollments', icon: 'turned_in', sref: 'courses-my-enrollments' },
						{ name: 'About', icon: 'info', sref: 'about' },
					];
				}
			}
	  });
})();
