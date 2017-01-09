angular.module('starter.controllers')
.controller('AddProjetCtrl', function($scope, $rootScope, $firebase, $firebaseArray, $state, $ionicLoading) {

	$scope.addProject = function(e){
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
			   // On stock les valeurs fournies dans le formulaire
			   var nomProjet         = e.name;
			   var descriptionProjet = e.description;
			   var projetAuthor      = user.uid;
			   var dateDebut         = e.dateDebut;
			   var dateFin           = e.dateFin;
			   var importance        = e.importance;
			   

			   var dateDeDebut = new moment(dateDebut).format('Do MMMM YYYY');
			   var dateDeFinPrevue = new moment(dateFin).format('Do MMMM YYYY');



			   if (importance == 3){
			     importance = "élevée";
			   } else if (importance == 2){
			     importance = "moyenne";
			   } else if (importance == 1){
			     importance = "faible";
			   }

			   firebase.database().ref(projetAuthor + '/projets').push({
			      projetDescription : descriptionProjet,
			      projetNom : nomProjet,
			      dateDebut : dateDeDebut,
			      dateFinPrevue : dateDeFinPrevue,
			      importance : importance,
			      progression : 0
			    }).then(function(ref) {
			        $state.go("app.projets");
			    }, function(error) {
			        alert(error);
			    });

			} else {
				alert('erreur');
			}
	  	})
 	};
})