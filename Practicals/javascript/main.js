const SHA256 = require('crypto-js/sha256');


// Class Block

class Block{
    
    constructor(index,timestamp,data,previousHash=''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;       
    this.hash = '';
    }

    calculate_hash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString(); 
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0,"16/06/2025","Genesis Block","0");
    }

    getLatestBlock(){
        return this.chain(this.chain.length - 1);

    }

    addBlock(newBlock){}
}