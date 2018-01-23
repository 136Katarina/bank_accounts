const assert = require('assert');
const Account = require('../account.js');
const Bank = require('../bank.js');

describe('bank', function(){

  var bank;
  var account1;
  var account2;
  var account3;
  var account4;

  beforeEach(function(){
    bank = new Bank();
    account1 = new Account('Katarina',4000, 'Business');
    account2 = new Account('Anna',2000, 'Personal');
    account3 = new Account('Jardine',100, 'Personal');
    account4 = new Account('Evil Fraser',10000, 'Saving');
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    bank.addAccount(account4);
  })

  //
  // it('should nave no accounts to start with', function(){
  //   assert.strictEqual(bank.accountCount(), 0);
  // })
  //
  // it('should be able to add an account', function(){
  //   bank.addAccount(account1)
  //   assert.strictEqual(bank.accountCount(), 1);
  // })

  it('should find account by name', function(){
    assert.strictEqual(bank.findByName("Katarina"),account1);
  })

  it('should find largest account', function(){
    assert.strictEqual(bank.findLargest(), account4);
  })

  it('should return total', function(){
    assert.strictEqual(bank.returnTotal(), 16100);
  })

  it('should return average', function(){
    assert.strictEqual(bank.findAverage(), 4025);
  })




})
