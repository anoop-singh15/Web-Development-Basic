// const express=require("express");
// var app=express();
// const mongoose =require('mongooose');
// const code=mongoose.model('code');

// app.get('/',(req,res)=>{
//     res.status(200).render('views/main');
// })


// app.post('/',(req,res)=>{
//     if(req.body._id=='')
//     {
//         insertRecord(req,res);
//     }
//     else
//     {
//         updateRecord(req,res);
//     }
// })

// function insertRecord(req,res){
//     var Snippet=new Snippet();


//     Snippet.question=req.body.question;
//     Snippet.snippet=req.body.snippet;
//     Snippet.complexity=req.body.complexity;
//     Snippet.completed=req.body.completed;



//     Snippet.save().then(() => {
//         res.redirect('../views/list');
//     }).catch(() => {
//         res.status(404).send("Unable to save data");
//     });
        
// }


// function updateRecord(req,res)
// {
//     code.findOneAndUpdate({_id:req.body._id},req.body,{new:true}).then(()=>{
//         res.redirect('..views/list');
//     }).catch(() => {
//         res.status(404).send("Unable to save data");
//     });
// }

// app.get('/list',(req,res)=>{
//     code.find().then(()=>{
//         res.render('views/list');
//         list:docs
//     }).catch(() => {
//         res.status(404).send("Error");
//     });
// })

// app.get('/:id',(req,res)=>{
//     code.findById(req.params.id).then(()=>{
//         res.render('views/addorEdit',{
//             viewTitle:  'update Record',
//             code:doc
//         });
//         console.log(doc);
//     })
// })


// app.get('/delete/:id',(req,res)=>{
//     code.findByIdAndRemove(req.params.id).then(()=>{
//         res.render('views/list');
//     }).catch(() => {
//         res.status(404).send("Error");
//     });
// })