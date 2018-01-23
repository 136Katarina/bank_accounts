const Bank = function(){
  this.accounts = [];
}

Bank.prototype.accountCount = function(){
  return this.accounts.length;
}

Bank.prototype.addAccount = function(account){
  this.accounts.push(account);
}

module.exports = Bank;
