const express = require('express');
const BlockChain = require('../blockChain');
const bodyParser = require('body-parser');
const HTTP_PORT  = process.env.HTTP_PORT || 3000;

const app = express();
app.use(bodyParser.json());

const bc  = new BlockChain();

app.get('/block',(req,res)=>{
    res.json(bc.chain);
});

app.post('/mine', (req,res)=>{
    const block = bc.addBlock(req.body.data);
    console.log(`new block added is ${block.toString()}`);
    res.redirect('/block');
})
app.listen(HTTP_PORT, ()=>{
    console.log(`listing at ${HTTP_PORT}`);
});