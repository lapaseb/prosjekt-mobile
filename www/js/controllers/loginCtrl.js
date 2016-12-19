angular.module('starter.controllers')
.controller('LoginCtrl', function($scope, $rootScope, $firebase, $state) {

	
	firebase.auth().onAuthStateChanged(function(user) {
		console.log(user);
		if (user){
			$state.go("app.projets");
		}
	});

	$scope.SignIn = function(e){
		//e.preventDefault();
		// On stock les valeurs fournies dans le formulaire de connexion
		var email    = e.email;
		var password = e.password;

		firebase.auth().signInWithEmailAndPassword(email, password).then(function(){

		}, function(error){
			// On affiche les erreurs si la connexion a échouée
			$scope.regError = true;
			$scope.regErrorMessage = error.message;
			alert($scope.regErrorMessage);
		});
	}

	$scope.signInGoogle = function(){
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			var token = result.credential.accessToken;
			var user = result.user;
		}).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
			alert(error);
		});
	}

})