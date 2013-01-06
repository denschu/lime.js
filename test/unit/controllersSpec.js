'use strict';

/* jasmine specs for controllers go here */
describe('Lime controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  beforeEach(module('limeServices'));

  describe('TransactionListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('transactions/transactions.json').
          respond([{bookingtext: 'Amazon'}, {bookingtext: 'Apple'}]);

      scope = $rootScope.$new();
      ctrl = $controller(TransactionListCtrl, {$scope: scope});
    }));


    it('should create "transactions" model with 2 transactions fetched from xhr', function() {
      expect(scope.transactions).toEqual([]);
      $httpBackend.flush();

      expect(scope.transactions).toEqualData(
          [{bookingtext: 'Amazon'}, {bookingtext: 'Apple'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('date');
    });
  });

});
