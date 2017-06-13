(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController (MenuService, SignUpService) {
    var signupCtrl = this;

    signupCtrl.favItemError = "No such menu number exists."
    signupCtrl.fetchItemMsg = "Checking if item exists..."
    signupCtrl.success = undefined;

    signupCtrl.go = function () {
      validateItemAndSignUp(signupCtrl.user.favItem.short_name);
    };

    // have to handle failures here and display error accordingly
    function validateItemAndSignUp (item_short_name) {
      // signupCtrl.favItemError = undefined;
      MenuService.itemExists(item_short_name)
        .then(function (response) {
          // get an item... should proceed with sign up
          if (response) {
            signupCtrl.user.favItem = response;
            SignUpService.signUp(signupCtrl.user);
            signupCtrl.success = "Your information has been saved";
          } else {
            // failure.. did not find the item.. show error
            // this will be handled by validator
            // signupCtrl.favItemError = "No such menu number exists."
          }
        });
    }
  }
})();
