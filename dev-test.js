const  Block =  require('./block');

const block = new Block('2345', "weuydquwerewtvyr", "fhehw", "100");

// console.log(block.toString());
// console.log(Block.genesis().toString());

console.log(Block.mineBlock(Block.genesis(), "10000").toString());