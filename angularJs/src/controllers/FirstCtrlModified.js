angular.module('MyApp.controllers')
    .controller('FirstCtrlModified',['$interval',
                             
        function ($interval) {
            'use strict';
            
            var vm=this;
            
            vm.myData={
                prop1: new Date()
            };
            
            var update= function(){
                vm.myData.prop1 = new Date();
            };
            
        //    setInterval(function(){
          //      update();
            //    
              //  $scope.$apply(update)
                
    //        },1000);
           
            
            $interval(function(){update();},1000);
                    
                          
         }]);
