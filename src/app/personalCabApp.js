/**
 * Created by Zhukov on 24.08.2015.
 */

(function(){
    'use strinct';

    angular.module('personalCab',['ui.router','common.services'])
        .config(function($stateProvider, $urlRouterProvider,$locationProvider){
            $locationProvider.html5Mode({
                enable:true,
                requireBase:false
            });
            $urlRouterProvider.otherwise('');
            $stateProvider.state('login', {
                url:'/login',
                templateUrl: 'src/app/login/login.tmpl.html',
                controller: 'LoginController',
                controllerAs: 'login'

            }).state('main',{
                url:'/main',
                templateUrl:'src/app/layout/shell.tmpl.html',
                controller: 'MainController',
                controllerAs: 'shell'
            })

        })
        .run(function ($rootScope, $state,currentUser) {


                 if(!currentUser.profile.loggedIn)
                     $state.go('login');



        }
            );
        })
 ();