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
  ]).
  factory('messageData', function(){
    var data;
    return {
      getData: function(){
        return this.data;
      },
      setData: function(data){
        this.data = data;
      }
    };
  })
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
      .when('/addMessage', {
        templateUrl: 'views/addmessage.html',
        controller: 'AddmessageCtrl'
      })
      .when('/leftPane', {
        templateUrl: 'views/leftpane.html',
        controller: 'LeftpaneCtrl'
      })
      .otherwise({
        redirectTo: '/add_new_product'
      });
  });
