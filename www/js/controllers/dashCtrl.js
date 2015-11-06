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

    $scope.openSurveyModal = function() {
      $scope.modals.surveyModal.show();
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

      $ionicModal.fromTemplateUrl('templates/modal-survey.html', {
          scope: $scope,
          animation: 'slide-in-up'
        }).then(function(modal) {
          var surveyModel = [
            {
              question: "How do you rate your confidence that you could get and keep an erection?",
              answers: ['1 - Very Low', '2 - Low', '3 - Moderate', '4 - High', '5 - Very High']
            },
            {
              question: "When you had erections with sexual stimulation, how often were your erections hard enough for penetration?",
              answers: ['1 - Very Low', '2 - Low', '3 - Moderate', '4 - High', '5 - Very High']
            },
            {
              question: "During sexual intercourse, how often were you able to mainten your erection after you had penetrated your partner",
              answers: ['1 - Very Low', '2 - Low', '3 - Moderate', '4 - High', '5 - Very High']
            }
          ];

          var activeQuestionIndex = 0;

          $scope.modals.surveyModal = modal;          
          $scope.activeQuestion = surveyModel[activeQuestionIndex];

          $scope.nextQuestion = function() {
              if (activeQuestionIndex < surveyModel.length - 1) {
                activeQuestionIndex++;
                $scope.activeQuestion = surveyModel[activeQuestionIndex];
              } else {
                $scope.modals.surveyModal.hide();
              }
          }

        });
    }
  })