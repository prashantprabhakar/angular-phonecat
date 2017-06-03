'use strict';
/*var module = angular.module.('phonecatApp');

module.config(function config($locationProvider, $routeProvider){

 	// need location provider hash [prefix here]
 	routeProvider.
 		when('/phones', {template:'<phone-list></phonelist>'}).
 		when('/phones/:phoneId', { template : '<phone-detail></phone-detail>'}).
 		otherwise('/phones');
 }); */


angular.
  module('phonecatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);

