/**
 * Created by Gukov on 26.08.2015.
 */


(function(){
    'use strict';

    angular.module('personalCab')
        .controller('LoginController',loginController);

     function loginController(authservice, $state){
         var  vm = this;

         vm.login = loginUser;
         vm.username = "";
         vm.password = ""


         function loginUser(form,$state){
           console.log('personalCab');
           authservice.login(vm.username,vm.password);
         }
     }

})()