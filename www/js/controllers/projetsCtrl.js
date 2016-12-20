angular.module('starter.controllers')
.controller('ProjetsCtrl', function($scope, $rootScope, $firebase, $firebaseArray, $state, $ionicLoading) {

	$ionicLoading.show({
	  templateUrl: '../../templates/spinnerTemplate.html'
    }).then(function(){
       console.log("Chargement des données FireBase");
    });

	//$rootScope.SignOut();
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (!user) {
			$state.go("login");
			Materialize.toast('Vous devez être connecté pour accéder à cette page.', 4000);
		} else {
			console.log(user.uid );
			$rootScope.userEmail = user.email;
			var ref = firebase.database().ref().child(user.uid + "/projets");
			$rootScope.projets = $firebaseArray(ref);

			$rootScope.projets.$loaded().then(function() {
				$ionicLoading.hide();
				console.log($rootScope.projets);
			});

			$rootScope.deleteProject = function(id){
				// On créé la référence à la base de donnée en ajoutant l'id
				var ref = firebase.database().ref().child(user.uid + "/projets/" + id);
				ref.remove();
			}
		}
	});

	$rootScope.goToProjet = function(projetId){
		$state.go("app.singleProjet", {projetId: projetId});
	}
})