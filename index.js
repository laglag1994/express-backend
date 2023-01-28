 const express = require('express');
 const app=express();

 app.get('/', (req, res)=>{
    console.log('hello')
    res.send('mommy')
 })

 app.listen(5000)