app.controller('StartCtrl', function($scope, $ionicModal) {
    $scope.userState = {
      firstVisit: true
    }
    $scope.modals = {};


    $ionicModal.fromTemplateUrl('templates/modal-register-device.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modals.registerDeviceModal = modal;

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
  });