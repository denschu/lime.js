'use strict';

/* Controllers */

function TransactionListCtrl($scope, Transaction) {
  $scope.transactions = Transaction.query();
  $scope.orderProp = 'bookingtext';
}

//PhoneListCtrl.$inject = ['$scope', 'Transaction'];



function TransactionDetailCtrl($scope, $routeParams, Transaction) {
  $scope.Transaction = Transaction.get({transactionId: $routeParams.transactionId}, function(transaction) {
    //$scope.bookingtext = TODO
  });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Transaction'];
