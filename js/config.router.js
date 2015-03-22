/**
 * Config for the router
 */
angular.module('app')
  
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {
          
          $urlRouterProvider
              .otherwise('/home');

          $stateProvider
              .state('home', {
                url: "/home",
                templateUrl: 'tpl/home.html'


              })
              
              
             
      }
    ]
  );