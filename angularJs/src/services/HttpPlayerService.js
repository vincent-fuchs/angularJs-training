angular.module('MyApp.services')
    .service('HttpPlayerService',['$http',
        function ($http) {
            'use strict';
            
            this.getPlayers = function(){
                
                return $http({
                    method: 'GET',
                    url: 'http://192.168.0.24:8888/players'                    
                })
                
            }
            
            
         }]);
