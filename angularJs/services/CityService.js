//  USING FACTORY
//
//angular.module('MyApp.services')
//    .factory('CityService',[
//        function () {
//            'use strict';
//            
//            var cities=['Bengaluru','Chennai','Mumbai','Kolkata'];    
//            
//                
//            var addCity = function(newCity){
//                cities.push(newCity);
//            }    
//                
//            var removeCity = function(indexToRemove){
//                cities.splice(indexToRemove,1);
//            }                
//                
//            var getCities = function(){
//                return cities;
//            }    
//            
//            return {
//                addCity:addCity,
//                removeCity:removeCity,
//                getCities:getCities
//            }
//                
//        }  
//         ]);
//
//
//  USING PROVIDER
//
//angular.module('MyApp.services').provider('CityService',[
//                    function(){
//                    'use strict';
//                    
//                    this.$get = function(){
//                   
//                        var cities=['Bengaluru','Chennai','Mumbai','Kolkata'];    
//                        
//                        var addCity = function (newCity) {
//                            cities.push(newCity);
//                        }
//
//                        var removeCity = function (indexToRemove) {
//                            cities.splice(indexToRemove, 1);
//                        }
//
//                        var getCities = function () {
//                            return cities;
//                        }
//                        
//                        return {
//                            addCity:addCity,
//                            removeCity:removeCity,
//                            getCities:getCities
//                        }
//                                            
//                        
//                    }
//                        
//                        
//                        
//                    }
//]);
//
//      USING SERVICE
//
angular.module('MyApp.services').service('CityService',[
                    function(){
                    'use strict';
                               
                        var cities=['Bengaluru','Chennai','Mumbai','Kolkata'];    
                        
                        this.addCity = function (newCity) {
                            cities.push(newCity);
                        }

                        this.removeCity = function (indexToRemove) {
                            cities.splice(indexToRemove, 1);
                        }

                        this.getCities = function () {
                            return cities;
                        }
                        
                        //No closure required... 
                        
                    }
]);
