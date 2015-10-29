app.controller('DashCtrl', function($scope, $ionicModal) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    $scope.modals = {};

    createModals();
    
    $scope.openPsaModal = function() {
      $scope.modals.psaModal.show();
    }

    $scope.openPotencyModal = function() {
      $scope.modals.potencyModal.show();
    }

    $scope.openSymptonModal = function() {
      $scope.modals.symptonModal.show();
    }

    $scope.openQuestionnareModal = function() {
      $scope.modals.questionnareModal.show();
    }


    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      // @TODO only remove actuall modal
      angular.forEach($scope.modals, function(modal) {
        modal.remove();
      });

    });

    function createModals() {
      $ionicModal.fromTemplateUrl('templates/modal-psa-values.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modals.psaModal = modal;
      });
    
      $ionicModal.fromTemplateUrl('templates/modal-potency-check.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.modals.potencyModal = modal;
        });

      $ionicModal.fromTemplateUrl('templates/modal-report-sympton.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.modals.symptonModal = modal;
        });

      $ionicModal.fromTemplateUrl('templates/modal-questionnare.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          $scope.modals.questionnareModal = modal;
        });
    }
  })