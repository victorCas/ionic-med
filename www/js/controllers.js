angular.module('starter.controllers', [])

.controller('StartCtrl', function($scope, $ionicModal) {
  $scope.userState = {
    firstVisit: true
  }

  $ionicModal.fromTemplateUrl('templates/modal-register-device.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.registerDeviceModal = modal;

    if ($scope.userState.firstVisit) {
      modal.show();  

      $scope.userState.firstVisit = false;
    }
    

  });

  $scope.openRegisterDeviceModal = function() {
    $scope.registerDeviceModal.show();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

})

.controller('DashCtrl', function($scope, $ionicModal) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $ionicModal.fromTemplateUrl('templates/modal-psa-values.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.psaModal = modal;
    });
  
  $ionicModal.fromTemplateUrl('templates/modal-potency-check.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.potencyModal = modal;
    });


  $scope.openPsaModal = function() {
    $scope.psaModal.show();
  }

  $scope.openPotencyModal = function() {
    $scope.potencyModal.show();
  }

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    // @TODO only remove actuall modal
    $scope.psaModal.remove();
    $scope.potencyModal.remove();
  });

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  console.log('AccountCtrl');
  $scope.settings = {
    enableFriends: true
  };
});

