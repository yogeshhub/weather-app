'use strict';

angular.module('weatherApp')
	.controller('weatherCtrl', ['$scope','openWeatherMap','$mdDialog',function($scope,openWeatherMap,$mdDialog) {
		var wc = this;
		wc.exampleLocations = ['London','Toronto','Chennai','New York'];        
    wc.iconBaseUrl = 'http://openweathermap.org/img/w/';

    angular.forEach(wc.exampleLocations, function(value, key){
        openWeatherMap.getWeather(value).then(function(data){
          wc.exampleLocations[key] = data;
        });
    });   

    wc.getImageSrc = function(iconName){
      return (iconName ? wc.iconBaseUrl + iconName + '.png' : '');
    } 

    wc.getEachWeather = function(place){      
      openWeatherMap.getWeather(place).then(function(data){
          wc.exampleLocations.push(data);
        },function(err){
          $mdDialog.show(
            $mdDialog.alert()
              .parent(angular.element(document.querySelector('#weatherPortion')))
              .clickOutsideToClose(true)
              .title('Ooopss!!')
              .textContent('Please Enter place name correctly..')
              .ariaLabel('Alert Dialog Demo')
              .ok('Got it!')
          );
        });
    }

	}]);