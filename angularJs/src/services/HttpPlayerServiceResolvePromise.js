angular.module('MyApp.services')
    .service('HttpPlayerServiceResolvePromise',['$http','$q',
        function ($http,$q) {
            'use strict';
            
            this.getPlayers = function(){
                
                return $http({
                    method: 'GET',
                    url: 'http://192.168.0.15:8888/players',
                    transformResponse: transformJSONData
                })
                .then(function (players){
                    return players.data; 
                })
                .catch(function (reason){
                    return $q.reject("Status "+reason.status)
                });
                
            }
            
            function transformJSONData(data, headers){
                
                var transformedData=angular.fromJson(data);
                transformedData.forEach(function(currentValue,index,property){
                    currentValue.newData = new Date();
                                
                })
                
                return transformedData;
                
            }
            
            
         }]);
