angular.module('MyApp.services')
    .service('AsyncPlayerService',['$q','$timeout',
        function ($q, $timeout) {
            'use strict';
                                   
            var players=[
                {
                    name: "Virat Kohli",
                    mentor: "Sachin",
                    birthDate: "20-11-1986",
                    friends: ["Anushka","Dhoni","Ravi Shastry"],
                    type: "Batsman"
                },
                {
                    name: "Dhoni",
                    mentor: "Kumble",
                    birthDate: "20-11-1981",
                    friends: ["Sachin","RPSharma","Ravi Shastry"],
                    type: "Wicket Keeper"                    
                }            
                
            ];
             
            this.getPlayers=function(){
    
                var deferred= $q.defer();
    
                var flag = true;
    
                $timeout(function(){
                    if(flag){
                        deferred.resolve(players);
                    }
                    else{
                        deferred.reject('Unable to process the data');
                    }
                    
                },3000);
    
                return deferred.promise;
    
            }
                                   
                                   
                                   
                                   
         }]);
