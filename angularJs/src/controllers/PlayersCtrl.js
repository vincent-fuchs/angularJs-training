angular.module('MyApp.controllers')
    .controller('PlayersCtrl',['$scope','players',
        function ($scope,players) {
            'use strict';
                        
            players.$promise.then(function(PlayerResponse){
                                   
                      $scope.players = PlayerResponse;
                               
                               
                    })
                .catch(function(reason){
                        alert("reason "+reason);
                               
                    });                   
                               
                               
                               
         }]);
