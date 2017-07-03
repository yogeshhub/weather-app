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
			templateUrl: 'admin/weather/weather.html',
			controller: 'weatherCtrl',
			controllerAs: 'wc'
		})
		.state('adminControls', {
			url: '/adminControls',						
			templateUrl: 'admin/admin_controls/admin_controls.html',
			controller: 'adminCtrl',
			controllerAs: 'ac'
		})
		.state('user', {
			url: '/user',
			templateUrl: 'users/user/user.html',
			controller: 'userCtrl',
			controllerAs: 'uc'			
		})
		.state('userDetails', {
			url: 'userDetails',
			templateUrl: 'users/user/user_details.html',
			controller: 'userDetailsCtrl',
			controllerAs: 'udc'
		});			
})
.run(function($transitions, $state,$mdDialog, $rootScope){
	$rootScope.checkLogin = function(){
		if(sessionStorage.getItem('isLogged')){
			return true;
		} else {
			return false;
		}
	}	
	$rootScope.logout = function(){
		sessionStorage.clear();
		$state.go('admin');
	}
	$transitions.onBefore({ from: '*', to:'adminControls' }, function(trans) {		
		if(!sessionStorage.getItem('isLogged')){
			$mdDialog.show({
		  		controller: ['$scope',function($scope){
				  	$scope.getLogIn = function(user){
				  		if(user){
				  			sessionStorage.setItem('isLogged',true);
				  			$mdDialog.hide();
				  		}		  		
				  	}
			  	}],
				templateUrl: 'login/login.html',
				parent: angular.element(document.body),					  
				clickOutsideToClose:false,
				fullscreen: true // Only for -xs, -sm breakpoints.
			})
			.then(function() {
				//$state.go('adminControls');
			});
		}		
	});
	$transitions.onExit({ from: 'adminControls' }, function(trans) {
		$mdDialog.hide();		
	});
});
