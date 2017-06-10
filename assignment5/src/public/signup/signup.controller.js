(function () {
  'use strict';

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController (MenuService, SignUpService) {
    var signupCtrl = this;


    signupCtrl.success = undefined;

    signupCtrl.user = {
      firstName: "asdf",
      lastName: "asdf",
      email: "asdf@adsf",
      favItem: {short_name: "L1"}
    }
    signupCtrl.go = function () {
      validateItemAndSignUp(signupCtrl.user.favItem.short_name);
    };

    // have to handle failures here and display error accordingly
    function validateItemAndSignUp (item_short_name) {
      signupCtrl.favItemError = undefined;
      MenuService.itemExists(item_short_name)
        .then(function (response) {
          // get an item... should proceed with sign up
          signupCtrl.user.favItem = response;
          SignUpService.signUp(signupCtrl.user);
          signupCtrl.success = "Your information has been saved";
        })
        .catch(function (response) {
          // failure.. did not find the item.. show error
          signupCtrl.favItemError = "No such menu number exists."
        });
    }
  }
})();
