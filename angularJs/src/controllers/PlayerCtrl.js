angular.module('MyApp.controllers')
    .controller('PlayerCtrl',['$scope','PlayerService',
                              
                              
        function ($scope,PlayerService) {
            'use strict';
                            
            $scope.players=PlayerService.players; 
            
         }]);
