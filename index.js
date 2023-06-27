const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const chef = require('./data/chef.json')
 

app.get('/',(req,res)=>{
    res.send('my chef info is coming');
})

app.get('/chef',(req,res)=>{
    res.send(chef);
})

app.listen(port,(req,res)=>{
    console.log(`chef info is coming oin port : ${port}`);
})