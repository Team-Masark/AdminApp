'use strict';

/**
 * @ngdoc overview
 * @name itchackApp
 * @description
 * # itchackApp
 *
 * Main module of the application.
 */
angular
  .module('itchackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/add_new_product', {
        templateUrl: 'views/add_new_product.html',
        controller: 'AddNewProductCtrl'
      })
      // .when('/homePage', {
      //   templateUrl: 'views/homepage.html',
      //   controller: 'HomepageCtrl'
      // })
      .when('/viewBills', {
        templateUrl: 'views/viewbills.html',
        controller: 'ViewbillsCtrl'
      })
      .otherwise({
        redirectTo: '/add_new_product'
      });
  });
