// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'firebase'])

.run(function($ionicPlatform, $state, $rootScope, $firebase, $firebaseArray) {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCUXqWjNke7q57mx_PZb0YInZbfN-fs5K0",
      authDomain: "prosjekt-12423.firebaseapp.com",
      databaseURL: "https://prosjekt-12423.firebaseio.com",
      storageBucket: "prosjekt-12423.appspot.com",
      messagingSenderId: "1020673117185"
    };
    firebase.initializeApp(config);


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.SignOut = function() {
      firebase.auth().signOut().then(function() {
        $rootScope.$apply(function() {
          $state.go("login");
        });
      }, function(error) {
        console.log(error);
      });
    }

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.projets', {
    url: '/projets',
    views: {
      'menuContent': {
        templateUrl: 'templates/projets.html',
        controller: 'ProjetsCtrl'
      }
    }
  })

  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
