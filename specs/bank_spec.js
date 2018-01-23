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
    account2 = new Account('Jardine',100, 'Personal');
    account2 = new Account('Evil Fraser',10000, 'Saving');
  })


  it('should nave no accounts to start with', function(){
    assert.strictEqual(bank.accountCount(), 0);
  })

  it('should be able to add an account', function(){
    bank.addAccount(account1)
    assert.strictEqual(bank.accountCount(), 1);
  })





})
