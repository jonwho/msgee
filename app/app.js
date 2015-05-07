'use strict';

// Dependencies
angular
  .module('msgee', [
    'ngAria',
    'ngMaterial',
    'ui.router',
    'firebase'
]);

// Routing
angular
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
	templateUrl: 'app/views/home.html'
      })
      .state('posts', {
        url: '/posts',
	templateUrl: 'app/views/posts.html'
      });
});
