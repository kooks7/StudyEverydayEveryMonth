
const Block = require('./block');
const Transaction = require('./transaction');
const Blockchain = require('./blockchain');
 
const tx1 = new Transaction ('aaa', 'bbb', 100);
const tx2 = new Transaction ('aaa', 'ccc', 10);
const tx3 = new Transaction ('aaa', 'ddd', 20);
 
//tx1.printTransaction();
//tx2.printTransaction();
 
 
const mychain = new Blockchain();
 
const newBlock = new Block(1, Date.now(), [tx1]);
 
const newBlock2 = new Block(2, Date.now(), [tx1, tx2]);
 
mychain.addBlock(newBlock);
mychain.addBlock(newBlock2);
 
//newBlock.printBlock();
//newBlock2.printBlock();
 
mychain.printBlockchain();
console.log("Chain valid?", mychain.isChainValid());

mychain.chain[1].transactions[0].toAddress = 'fff';
console.log("Chain valid?", mychain.isChainValid());

 



