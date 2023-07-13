const express=require("express");
const path=require("path");

const app =express();
const port=80;

// Static Files
app.use('/static',express.static('static'));

// Template engine pug
app.set('view engine','pug');

// set directory
app.set('views',path.join(__dirname,'views'));



// PUG ENDPOINT
app.get("/demo",(req,res)=>{

    res.status(200).render('demo',{title:'72_Static',message:'This is a file containing  pug basics'})
});


// GET Request
app.get("/",(req,res)=>{

    res.status(200).send("We are inside Home page");
})



// LISTIENING PORT
app.listen(port,()=>{
    console.log(`App started on port ${port}`);
})