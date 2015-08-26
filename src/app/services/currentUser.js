/**
 * Created by Gukov on 26.08.2015.
 */
(function(){

    'use strict';

    angular.module('common.services')
        .factory('currentUser',currentUser);

       function currentUser(){

           var  setProfile = function(username,token){
               profile.username = username;
               profile.token  = token;
           }

           var initialize = function(){
               var user = {
                   username:"",
                   token:"",
                   get loggedIn(){
                       return this.token;
                   }
               }
               return user;
           }



           var profile = initialize();


           var serviceUser = {
              setProfile :setProfile,
              profile :profile

           }
           return serviceUser



       }


})();