angular.module('starter.controllers')
.controller('SingleProjetCtrl', function($scope, $rootScope, $firebase, $firebaseArray, $firebaseObject, $state, $ionicLoading, $stateParams, $ionicPopup) {
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (!user) {
			$state.go("login");
		} else {
			$scope.MainTodos = $rootScope.projets[$stateParams.projetId].tachesPrincipales;
		}
	});

	$scope.addSubTodo = function(){

		var myPopup = $ionicPopup.show({
		    template: '<div class="row">' +
						'<div class="input-field col">' +
						'<input id="name" type="text" class="validate" ng-model="$subTodo.name">' +
						'<label for="name">Nom de la sous-tâche</label>' +
						'</div>' +
						'</div>' +
						'<div class="row">' +
						'<div class="input-field col s12">' +
						'<textarea id="textarea1" class="materialize-textarea" ng-model="$subTodo.description"></textarea>' +
						'<label for="textarea1">Description de la sous-tâche</label>' +
						'</div>' +
						'</div>',
		    title: '<h3>Ajouter une sous-tâche<h3>',
		    scope: $scope,
		    buttons: [
		      { text: 'Annuler' },
		      {
		        text: '<b>Ajouter</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		          if (!$scope.data.wifi) {
		            //don't allow the user to close unless he enters wifi password
		            e.preventDefault();
		          } else {
		            return $scope.data.wifi;
		          }
		        }
		      }
		    ]
		});
		
	}
	
})