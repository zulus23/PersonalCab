/**
 * Created by Gukov on 26.08.2015.
 */

(function(){
    'use strict';

    angular.module('personalCab')
        .controller('MainController', mainController);


        function mainController(currentUser){

            var vm = this;

            vm.currentUser = currentUser;
        };

})();