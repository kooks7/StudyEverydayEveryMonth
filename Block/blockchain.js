const Block = require('./block');
const Transaction = require('./transaction');
 
class Blockchain {
   constructor() {
       this.difficulty = 2;
       this.miningReward = 100;
       this.chain = [new Block(0, Date.now(), [], "GenesisBlock")];
       this.pendingTransactions = [];
 
   }
 
   // addBlock(block) {
   //     block.prevHash = this.getLatestBlock().curHash;
   //     //block.curHash = block.calculateHash();
   //     block.miningBlock(this.difficulty);
   //     this.chain.push(block);
   // }
 
   getLatestBlock() {
       return this.chain[this.chain.length -1];
   }
 
   printBlockchain() {
       console.log(JSON.stringify(this, null, 2));
   }
 
   isChainValid() {
       for (let i=1; i<this.chain.length; i++ ) {
           const curBlock = this.chain[i];
           const prevBlock = this.chain[i-1];
 
           // 블록 내부 해시값 검증
           if(curBlock.curHash !== curBlock.calculateHash()) {
               console.log('Err 1 : chain[', i, ']');
               return false;
           }
 
           // 이전 블록 해시값 검증
           if(curBlock.prevHash !== prevBlock.curHash) {
               console.log('Err 2 : chain[', i, ']');
               return false;
           }
       }
       return true;
   }
 
   addTransaction(transaction) {
       // address check
       if(!transaction.fromAddress || !transaction.toAddress ) {
           console.log('Warn : Invalid transaction address');
           return false;
       }
 
       // validation check
       if(!transaction.isValid()) {
           console.log('Warn : Invalid transaction');
           return false;
       }
 
       // pending transactoin 에 추가
       this.pendingTransactions.push(transaction);
   }
 
   minePendingTransactions(rewardAddress) {
       let block = new Block(
           this.getLatestBlock().index + 1,
           Date.now(),
           this.pendingTransactions,
           this.getLatestBlock().curHash
       )
      
       block.miningBlock(this.difficulty);
 
       console.log('mined...');
       this.chain.push(block);
 
       //
       this.pendingTransactions = [
           new Transaction(null, rewardAddress, this.miningReward)
       ];
   }
 
   getBalance(address) {
       let balance = 0;
 
       for (let block of this.chain) {
           for (let tx of block.transactions) {
               if(tx.fromAddress == address) {
                   balance -= tx.amount;
               }
               if(tx.toAddress == address) {
                   balance += tx.amount;
               }
           }
       }
       return balance;
   }
 
   getAllTransactionOfWallet(address) {
       const txs = [];
 
       for (let block of this.chain) {
           for (let tx of block.transactions) {
               if(tx.fromAddress == address || tx.toAddress == address) {
                   txs.push(tx);
               }
           }
       }
 
       return txs;
   }
 
}
 
module.exports = Blockchain;
