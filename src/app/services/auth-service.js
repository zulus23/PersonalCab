/**
 * Created by Gukov on 26.08.2015.
 */

(function(){
    'use strict';
     angular.module('common.services',[])
         .factory('authservice',authservices);

     function authservices(currentUser){
         var service = {

             login: loginUser,
         }

         return service;


         /////////
         function loginUser(username,userpassword){
             if(username === 'user' && userpassword==='1'){
                 currentUser.setProfile(username,"password");
             } else {
                 return false;
             }
         }
     }

})();
