'use strict';

angular.module('weatherApp')
	.controller('weatherCtrl', [function($scope) {
		var wc = this;
		wc.exampleLocations = [
        	{ title:'Hamburg'},
        	{ title:'San Francisco'},
        	{ title:'Berlin'},
        	{ title:'Toronto'},
        	{ title:'Athens'},
        	{ title:'chennai'}
        ];        
	}]);