const assert = require('assert');
const Account = require('../account.js');

describe('account', function(){
  var account1;
  var account2;

  beforeEach(function(){
    account1 = new Account('Katarina',4000, 'Business');
    account2 = new Account('Anna',2000, 'Personal');
  });

  it('should have a name', function(){
    assert.strictEqual(account1.name,'Katarina');
  })
})
