const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
 
const Block = require('./block');
const Transaction = require('./transaction');
const Blockchain = require('./blockchain');
 
const userKeyStr1 = '54b21e460a2001af5188b279b30fd7ff577ad992b0cc358e0ad5b1e57dd5feca';
const userKeyStr2 = '63f89bc37143eb2978d7a45b66adc5e7d51f2f16bd77c695f9ddf230132261c5';
 
const privKey1 = ec.keyFromPrivate(userKeyStr1);
const privKey2 = ec.keyFromPrivate(userKeyStr2);
 
const wallet1 = privKey1.getPublic('hex');
const wallet2 = privKey2.getPublic('hex');
 
const tx1 = new Transaction (wallet1, wallet2, 100);
const signTx1 = tx1.signTransaction(privKey1);
const tx2 = new Transaction (wallet1, wallet2, 10);
const signTx2 = tx2.signTransaction(privKey1);
const tx3 = new Transaction (wallet2, wallet1, 20);
const signTx3 = tx3.signTransaction(privKey2);
 
//tx1.printTransaction();
//tx2.printTransaction();
 
const mychian = new Blockchain();
 
const newBlock = new Block(1, Date.now(), [tx1]);
 
const newBlock2 = new Block(2, Date.now(), [tx1, tx2]);
 
mychian.addBlock(newBlock);
mychian.addBlock(newBlock2);
 
mychian.printBlockchain();
 
 
 
