var EC = require('elliptic').ec;
// Create and initialize EC context
// (better do it once and reuse it)
var ec = new EC('secp256k1');
// Generate keys
var key = ec.genKeyPair();
 
var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash);
var derSign = signature.toDER();
// console.log('signDER : ', derSign);
// console.log(key.verify(msgHash, derSign));
 
console.log('Privkey = ', key.getPrivate('hex'));
console.log('Pubkey = ', key.getPublic('hex'));
