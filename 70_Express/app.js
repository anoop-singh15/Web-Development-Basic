const express=require("express");

const app =express();
const port=80;

app.get("/",(req,res)=>{

    res.status(200).send("We are inside Home page");
})

app.get("/about",(req,res)=>{

    res.send("We are inside About page");
})

app.get("/this",(req,res)=>{

    res.status(404).send("We are inside This page");
})

app.post("/about",(req,res)=>{

    res.send("We are inside post--> About page");
})

app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})