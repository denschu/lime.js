'use strict';

/* Controllers */

function TransactionListCtrl($scope, Transaction) {
  $scope.transactions = Transaction.query();
  $scope.orderProp = 'bookingtext';
}

function TransactionDetailCtrl($scope, $routeParams, Transaction) {
  $scope.transaction = Transaction.get({transactionId: $routeParams.transactionId});
}
