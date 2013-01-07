'use strict';

/* Controllers */

function TransactionListCtrl($scope, Transaction) {
  $scope.transactions = Transaction.query();
}

function TransactionDetailCtrl($scope, $routeParams, Transaction) {
  $scope.transaction = Transaction.get({transactionId: $routeParams.transactionId});
}
