angular.module('MyApp.services')
    .service('HttpPlayerServiceResolvePromise',['$http','$q',
        function ($http,$q) {
            'use strict';
            
            this.getPlayers = function(){
                
                return $http({
                    method: 'GET',
                    url: 'http://192.168.0.24:8888/players'                    
                })
                .then(function (players){
                    return players.data;
                })
                .catch(function (reason){
                    return $q.reject("Status "+reason.status)
                });
                
            }
            
            
         }]);
