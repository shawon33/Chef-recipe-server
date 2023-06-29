const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chef = require('./data/chef.json')
 
app.use(cors());

app.get('/',(req,res)=>{
    res.send('my chef info is coming');
});

app.get('/chef',(req,res)=>{
    res.send(chef);
})

app.get('/chef/:id',(req,res)=>{
    const id= req.params.id;
    console.log(id);
    const selectChef = chef.find(n=>n._id === id);
    res.send(selectChef);
})

app.listen(port,(req,res)=>{
    console.log(`chef info is coming oin port : ${port}`);
})