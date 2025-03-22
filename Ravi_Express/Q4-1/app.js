const express = require('express');

const app = express();
app.set('view engine','ejs');

app.get("/",(req,resp)=>{
    resp.render('home');
})
app.listen(3000,()=>{
    console.log("running");
})
