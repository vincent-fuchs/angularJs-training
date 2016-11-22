angular.module('MyApp.controllers')
    .controller('FirstCtrl',['$scope','$interval',
                             
        function ($scope,$interval) {
            'use strict';
            
            $scope.myData={
                prop1: new Date()
            };
            
            var update= function(){
                $scope.myData.prop1 = new Date();
            };
            
            setInterval(function(){
                update();
                
                $scope.$apply(update)
                
            },1000);
           
            
           // $interval(function(){update();},1000);
            
            $scope.$watch("myData.prop1",
                         function(newValue,oldValue){
                            console.log("old :"+oldValue+", - new :"+newValue);       
                                                                   
                                   
                                   })
                          
         }]);
