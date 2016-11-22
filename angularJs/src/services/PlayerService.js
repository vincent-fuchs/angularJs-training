angular.module('MyApp.services')
    .service('PlayerService',[
        function () {
            'use strict';
            
            this.players=[
                {
                    name: "Virat Kohli",
                    mentor: "Sachin",
                    birthDate: "20-11-1986",
                    friends: ["Anushka","Dhoni","Ravi Shastry"]                    
                },
                {
                    name: "Dhoni",
                    mentor: "Kumble",
                    birthDate: "20-11-1981",
                    friends: ["Sachin","RPSharma","Ravi Shastry"]                    
                }            
                
            ]
            
            
         }]);
