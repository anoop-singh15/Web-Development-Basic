const express = require('express');
const path = require("path");
const bodyparser = require("body-parser");
const app = express();
const mongoose =require('mongoose');

const port=8000;
// connecting database
mongoose.connect("mongodb://127.0.0.1:27017/CodeCollecter",{useNewUrlParser: true});

// schema for database
var codeschema = new mongoose.Schema({
    question: {
        type: String,
        required: "Cannot be empty"
    },
    User_snippet : String,
    
    complexity: {
        type: String,
        required: "this is must know knowledge"
    }
   
});

// compiling mode 
var  Code = mongoose.model('code',codeschema);


// express basic stuff
app.use('/static',express.static('static'));
app.use(express.urlencoded());

// pug basic stuff
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

// route for get
app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
})




app.get('/main',(req,res)=>{
    res.status(200).render('main.pug');
    
})


// post in main
app.post('/main', (req, res) => {
    var myData = new Code({
        question: req.body.question,    
        User_snippet :req.body.User_snippet,  
        complexity:req.body.complexity
    });
    myData.save().then(() => {
        // res.send("Successfully Saved to database");
        res.redirect('/main');
    }).catch(() => {
        res.status(404).send("Unable to save data");
    });
   
    
})




// app.get('/list',(req,res)=>{
//     const val=Code.find()
//     res.render('list',val);
// })
app.get('/list',async (req,res)=>{
    const val=await Code.find({});
        console.log(val);
        res.render('list.pug',{params:val});

    

})







// listening port
app.listen(port,()=>{
    console.log(`Apllication started successfully at :${port}`);
})


