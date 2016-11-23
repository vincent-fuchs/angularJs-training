angular.module('MyApp.services')
    .service('Player',['$resource',
        function ($resource) {
            'use strict';
            
            
            return $resource('http://192.168.0.15:9999/service/players/:id',
                             {
                                id: '@_id'
                             },
                             {
                                update: {
                                    method: 'PUT'
                                }
                             }
                            ); 
                
         }]);
