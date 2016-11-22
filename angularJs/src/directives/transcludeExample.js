angular.module('MyApp.directives')
    .directive('transcludeExample',[
        function () {
            'use strict';
            return{
                restrict: 'E',
                
                templateUrl:'angularJs/src/partials/template.html',
                transclude: true,
                controller: function($scope){
                        $scope.hidden = false;
                        $scope.close = function(){
                                $scope.hidden = true;
                            };
                        }
                };
         }]);
