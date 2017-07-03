'use strict';

angular.module('weatherApp')

.factory('openWeatherMap', function($http,$q) {

    // API key is currently unused (work either with or without key)
    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';
    return{
      getWeather: function(location){  
           var defer = $q.defer();
          var request = {
            method: 'GET',
            url: apiBaseUrl + 'weather',
            params: {
               q: location,
              mode: 'json',
              units: 'metric',
              cnt: '7',
              appid: '279b4be6d54c8bf6ea9b12275a567156'
            }
          };

          $http(request)
            .then(function(response) {
              defer.resolve(response.data);
            }).
            catch(function(err) {
              defer.reject(err);
            });         
            return defer.promise;   
      }
    }    
  });
