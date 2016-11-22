angular.module('MyApp.controllers')
    .controller('HttpPlayerPromiseResolvedInServiceCtrl',['$scope','HttpPlayerServiceResolvePromise',
                              
                              
        function ($scope,HttpPlayerServiceResolvePromise) {
            'use strict';
                           
            var promise=HttpPlayerServiceResolvePromise.getPlayers(); 
            
            promise.then(function(players){
                //no need to call data herem because promise has already been resolved in service
                $scope.players=players;    
                                
            })
            .catch(function(reason){
                
                alert(reason);
                
            })
            .finally(function(){
              console.log('Inside finally');  
                
            })            
         }]);
