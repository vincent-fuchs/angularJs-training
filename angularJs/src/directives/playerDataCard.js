//<player-data-card />
angular.module('MyApp.directives')
    .directive('playerDataCard', [
        
        function () {
            'use strict';
            return{
                restrict: 'E',
                templateUrl:'angularJs/src/partials/playerDataCard.html',
                scope:{
                    player:'=' 
                },
                link: function () {
                
                    
                    
                }
            };
         }]);
