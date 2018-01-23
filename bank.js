const Bank = function(){
  this.accounts = [];
}

Bank.prototype.accountCount = function(){
  return this.accounts.length;
}

Bank.prototype.addAccount = function(account){
  this.accounts.push(account);
}


Bank.prototype.findByName = function(name){
  for (account of this.accounts) {
    if (account.name === name){
      return account;
    }
  }
};

module.exports = Bank;
