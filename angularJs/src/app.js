angular.module('MyApp', [
    'MyApp.controllers',
    'MyApp.directives',
    'MyApp.providers',
    'MyApp.services',
    'MyApp.filters',
    'ui.router'
]).config(
	function ($stateProvider) {
		'use strict';
		/*your code */
		$stateProvider.state('players', {
			url: '/players',
			templateUrl: 'src/partials/players.html',
			controller: 'PlayersCtrl',
			resolve: {
				Player: "Player",
				players: function (Player) {
					return Player.query().$promise
				}
			}
		}).state('playerDetails', {
			url: '/players/:id/view',
			controller: 'PlayersDetailsCtrl',
			templateUrl: 'src/partials/player-details.html',
			
            
//            resolve: {
//				Player: "Player",
//				player: function (Player) {
//					return Player.get({
//						id: $stateParams.id
//					})
//				}
//			}
		}).state('addPlayer', {
			url: '/players/new',
			controller: 'PlayersAddCtrl',
			templateUrl: 'src/partials/player-add.html'

		})

	}
).run(
    function ($state) {
        'use strict';
        /*your code */
        $state.go('players');
    }
);
angular.module('MyApp.controllers', []);
angular.module('MyApp.services', ['ngResource']);
angular.module('MyApp.providers', []);
angular.module('MyApp.directives', []);
angular.module('MyApp.filters', []);
