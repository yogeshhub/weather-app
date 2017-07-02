'use strict';

// Declare app level module which depends on views, and components
var weatherApp = angular.module('weatherApp', [
  'ui.router',
  'ngMaterial'
]).
config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/admin');
	
	$stateProvider
		.state('admin', {
			url: '/admin',
			templateUrl: 'Admin/Weather/weather.html',
			controller: 'weatherCtrl',
			controllerAs: 'wc'
		})
		.state('admin.adminControls', {
			url: 'admin/adminControls',
			templateUrl: 'Admin/Weather/admin_controls.html',
			controller: 'adminCtrl',
			controllerAs: 'ac'
		})
		.state('user', {
			url: '/user',
			templateUrl: 'Users/User/user.html',
			controller: 'userCtrl',
			controllerAs: 'uc'			
		})
		.state('user.userDetails', {
			url: 'user/userDetails',
			templateUrl: 'Users/User/user_details.html',
			controller: 'userDetailsCtrl',
			controllerAs: 'udc'
		})
});
