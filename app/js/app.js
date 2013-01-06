'use strict';

/* App Module */

angular.module('lime', ['limeFilters', 'limeServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/transactions', {templateUrl: 'partials/transaction-list.html',   controller: TransactionListCtrl}).
      when('/transactions/:transactionId', {templateUrl: 'partials/transaction-detail.html', controller: TransactionDetailCtrl}).
      otherwise({redirectTo: '/transactions'});
}]);
