'use strict';

// Dependencies
var app = angular
  .module('msgee', [
    'ngAria',
    'ngMaterial',
    'ui.router',
    'firebase',
    'ng-mfb'
]);

// Routing
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: '../index.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state('posts', {
        url: '/posts',
        templateUrl: '../views/posts.html'
      });
});
