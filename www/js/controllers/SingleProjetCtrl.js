angular.module('starter.controllers')
.controller('SingleProjetCtrl', function($scope, $rootScope, $firebase, $firebaseArray, $firebaseObject, $state, $ionicLoading, $stateParams) {

	console.log($stateParams.projetId)
	
	firebase.auth().onAuthStateChanged(function(user) {
	    var ref = firebase.database().ref().child(user.uid + "/projets/" + $stateParams.projetId);
	    $rootScope.currentProject = $stateParams.projetId;
	    $scope.singleProject = $firebaseObject(ref);

	    var refTodo = firebase.database().ref().child(user.uid + "/projets/" + $stateParams.projetId + "/tachesPrincipales/");
	    $scope.MainTodos = $firebaseArray(refTodo);
	    console.log($scope.MainTodos);
	});
	
})