const express = require('express');
const app=express();
app.get("/",(req,resp)=>{
    resp.sendFile('./view/home.html',{root:__dirname});
})
app.get("/about",(req,resp)=>{
    resp.sendFile('./view/aboutus.html',{root:__dirname});
})
app.listen(2000,()=>{
    console.log("server is running");
})
