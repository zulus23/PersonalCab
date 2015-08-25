/**
 * Created by Zhukov on 24.08.2015.
 */

(function(){
    angular.module('personalCab',['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('');
            $stateProvider.state('login', {
                url:'/login',
                templateUrl: 'src/app/login/login.tmpl.html'
              /*  controller: 'LoginCtrl',
                controllerAs: 'login'
                */
            })
        })
        .run(function ($rootScope, $state) {

                    $state.go('login');}
            );
        })
 ();