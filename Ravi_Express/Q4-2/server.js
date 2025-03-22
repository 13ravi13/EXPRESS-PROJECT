const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/EXP_EJS").then(() => {
}).catch((err) => {
    console.log(err);
})

const empSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    sal : {
        type : Number,
        required : true
    }
})
const empModel = new mongoose.model("emp", empSchema);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.post("/add", async(req,res) => {
    const data = new empModel({
        name : req.body.name,
        sal : req.body.sal
    });
    res.json(await data.save());
})

app.get("/show", async(req,res) => {
    const arr = await empModel.find();
    res.render('show', { arr : arr});
});


app.listen(2000, () => {
    console.log("Running on 2000");
})