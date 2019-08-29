const SHA256 = require('crypto-js/sha256');
 
class Block {
   constructor(index, timestamp, transactions, prevHash) {
       this.index = index;
       this.timestamp = timestamp;
       this.prevHash = prevHash;
       this.nonce = 0;
       this.transactions = transactions;
 
       this.curHash = this.calculateHash();
   }
 
   calculateHash() {
       return SHA256(this.prevHash
               + this.timestamp
               + this.nonce
               + JSON.stringify(this.transactions)).toString();
   }
 
   printBlock() {
       console.log(JSON.stringify(this, null, 2));
   }
 
   


   miningBlock(difficulty) {

        console.log(difficulty);    
        while(this.curHash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
        this.nonce++;
           this.curHash = this.calculateHash();
           //
          
           console.log("mining...", this.nonce, "...", this.curHash);
       }
   }
 
   hasValidTransactions() {
       for(let tx of this.transactions) {
           if (!tx.isValid()) {
               return false;
           }
       }
       return true;
   }
}
 
 
module.exports = Block;
