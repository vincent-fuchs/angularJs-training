angular.module('MyApp.controllers')
    .controller('PlayersDetailsCtrl',['$scope','$stateParams','Player',
        function ($scope,$stateParams,Player) {
            'use strict';
             
                                   
             $scope.player = Player.get(
                    {
                        id: $stateParams.id
                    });
                   
                               
                               
         }]);
