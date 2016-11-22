angular.module('MyApp.controllers')
    .controller('CityCtrl',['$scope','CityService',
        function ($scope,CityService) {
            'use strict';
            
            $scope.cities=CityService.getCities();
            
            $scope.addCity=function(){
                
                var name=prompt('Add New city');                
                
                CityService.addCity(name);
            }
            
            $scope.removeCity=function(index){
                
                var index = document.querySelector('#cities').selectedIndex;
                
                CityService.removeCity(index);
            }
            
            
            
        }
         ]);
