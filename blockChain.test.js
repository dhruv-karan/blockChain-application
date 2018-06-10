const BlockChain = require('./blockChain');
const block = require('./block');

describe('BlockChain', ()=>{
    let bc;
    beforeEach(()=>{
        bc = new BlockChain();
    });
  it("should have first geneis block" , ()=>{
   expect(bc.chain[0]).toEqual(block.genesis());
  });
  it("should add new block to chain", ()=>{
   const data = "my name is dhruv karan";
   bc.addBlock(data);
   expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
});
});