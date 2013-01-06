'use strict';

/* Services */

angular.module('limeServices', ['ngResource']).factory('Transaction', function($resource){
  return $resource('transactions/:transactionId.json', {}, {
    query: {method:'GET', params:{transactionId:'transactions'}, isArray:true}
  });
});