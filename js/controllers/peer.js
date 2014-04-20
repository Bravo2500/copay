'use strict';

angular.module('copay.peer').controller('PeerController',
  function($scope, $rootScope, $location, $routeParams, Socket, controllerUtils) {
    
    $scope.init = function() {
      //Network.connect($rootScope.masterId);
    };

    if (!$rootScope.wallet || !$rootScope.wallet.id) {
      $location.path('signin');
    }
    else {
      controllerUtils.handleTransactionByAddress($scope);
    }
  });
