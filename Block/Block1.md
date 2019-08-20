---
layout: post
title:  "BlockChain 실습"
categories : Coding!
date:   2019-08-19



---

August.19.2019  (MON)

### 1. 간단한 블록체인 제작하기

1. block.js

``` javascript
class Block {
    constructor(index, timestamp, prevHash){
        this.index = index;
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.curHash = '';
        this.nonce = 0;
        this.transactions = transactions;
    }

}
cal
moudule.exports = Block;

```

2. `$ npm install -- save crypto-js`













