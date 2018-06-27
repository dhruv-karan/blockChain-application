const BlockChain = require('./index');
const block = require('./block');

describe('BlockChain', ()=>{
    let bc, bc2;
    beforeEach(()=>{
        bc = new BlockChain();
        bc2 = new BlockChain();
    });
  it("should have first geneis block" , ()=>{
   expect(bc.chain[0]).toEqual(block.genesis());
  });
  it("should add new block to chain", ()=>{
   const data = "my name is dhruv karan";
   bc.addBlock(data);
   expect(bc.chain[bc.chain.length - 1].data).toEqual(data);
//    expect(bc.chain[bc.chain.length - 1].lasthash).toEqual(bc.chain[bc.chain.length-2].hash);
});
it("it should validate a chain to be true", ()=>{
    bc2.addBlock("my name");
    expect(bc.isValidChain(bc2.chain)).toBe(true);
});
it("should invalidates a chain with corrupt data", ()=>{
    bc2.chain[0].data = "corrupeted data";
    expect(bc.isValidChain(bc2.chain)).toBe(false);
})
});