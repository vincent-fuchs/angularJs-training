angular.module('MyApp.controllers')
//injecting the data (players) directly from config, instead of service.
    .controller('PlayersAddCtrl',['$scope','$state','Player',
        function ($scope,$state,Player) {
            'use strict';
             
                                   
             $scope.player = new Player();
            
             $scope.addPlayer=function(){
              
                 $scope.player.$save(function(){
                  
                     $state.go('players');
                     
                 })
                 
             }
                   
                               
                               
         }]);
