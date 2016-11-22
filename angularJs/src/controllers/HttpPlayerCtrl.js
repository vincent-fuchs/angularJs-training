angular.module('MyApp.controllers')
    .controller('HttpPlayerCtrl',['$scope','HttpPlayerService',
                              
                              
        function ($scope,HttpPlayerService) {
            'use strict';
                           
            var promise=HttpPlayerService.getPlayers(); 
            
            promise.then(function(players){
                
                $scope.players=players.data;    
                                
            })
            .catch(function(reason){
                
                alert(reason);
                
            })
            .finally(function(){
              console.log('Inside finally');  
                
            })            
         }]);
