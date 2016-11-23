describe('PlayersCtrl',function(){
    
    var $q,$rootScope,MockPlayer;
    
    var PlayerResponse=["player1"];
    
    //equivalent of @Before method in Junit
    
    beforeEach(module('MyApp.services'));
    beforeEach(module('MyApp.controllers'));
    
    //injecting promise and rootscope in our test
    beforeEach(inject(function(_$q_,_$rootScope_){
        $q=_$q_;
        $rootScope=_$rootScope_;
        
    }));
    
    
    
    beforeEach(inject(function($controller){
        
        $scope=$rootScope.$new();
        
        MockPlayer={
            query:function(){
                
                //no var, so variable is hoisted
                queryDeferred=$q.defer();
                return{
                    $promise:queryDeferred.promise
                }
            }
        }
        
        spyOn(MockPlayer,'query').and.callThrough();
    
        $controller('PlayersCtrl',{
            '$scope': $scope,
            'Player' : MockPlayer            
        })
        
    }));
    
    
    describe('Player.query',function(){

        beforeEach(function(){            
            queryDeferred.resolve(PlayerResponse);
            $rootScope.$apply();
        });

        it('should query the Player Service', function () {
            expect(MockPlayer.query).toHaveBeenCalled();
        })
        
        
        it('should set the response from the Player service to $scope.players', function () {
            expect($scope.players).toEqual(PlayerResponse);
        })

    });
    
});
    
    
