angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page28', {
    url: '/page28',
    templateUrl: 'templates/page28.html',
    controller: 'page28Ctrl'
  })

  .state('page43', {
    url: '/page43',
    templateUrl: 'templates/page43.html',
    controller: 'page43Ctrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

  .state('1', {
    url: '/page31',
    templateUrl: 'templates/1.html',
    controller: '1Ctrl'
  })

  .state('page34', {
    url: '/page34',
    templateUrl: 'templates/page34.html',
    controller: 'page34Ctrl'
  })

  .state('page36', {
    url: '/page36',
    templateUrl: 'templates/page36.html',
    controller: 'page36Ctrl'
  })

  .state('12', {
    url: '/page39',
    templateUrl: 'templates/12.html',
    controller: '12Ctrl'
  })

  .state('13', {
    url: '/page41',
    templateUrl: 'templates/13.html',
    controller: '13Ctrl'
  })

  .state('page42', {
    url: '/page42',
    templateUrl: 'templates/page42.html',
    controller: 'page42Ctrl'
  })

$urlRouterProvider.otherwise('/page42')


});