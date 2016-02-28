(function() {
	'use strict';

	angular
	  .module('app.courses')
	  .component('courseCard', {
  		templateUrl: 'app/courses/components/courseCard/courseCard.html',
	  	bindings: {
				course: '<'

				//inputs
	  		// title: '<',
	  		// subtitle: '<',
				// content: '<',
	  		// author: '<',
	  		// image: '<',
				// likes: '<',
				// liked: '<',
				// enrolls: '<',
				// enrolled: '<',
				// id: '<'

				//,

				//outputs
				//onDiscard: '&',
				//onEnroll: '&',
				//onLike: '&'//,
				//onShare: '&'
	  	},
			require: {
		    galleryCtrl: '^courseGallery'
		  },
			controller: CourseCardController
	  });

		CourseCardController.$inject = ['datacontext'];

		function CourseCardController(datacontext) {
			var vm = this;

			vm.$onInit = function() {
				console.log(vm.course);
			}

			vm.onEnroll = function(course) {
			//vm.onEnroll = function(id, title, enrolled) {
				console.log('onEnroll called from \'CourseCardController\'');
			};

			vm.onLike = function(course) {
				//function(id, title, liked) {
				console.log('onLike called from \'CourseCardController\'');
			};
		}
})();
