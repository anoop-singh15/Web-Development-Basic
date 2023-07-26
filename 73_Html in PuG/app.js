const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port =80;

// Express Related Stuff
app.use('/static',express.static('static'));  //static Files
app.use(express.urlencoded());

// PUG Related Stuff
app.set('view engine','pug'); //set template engine as pug
app.set('views',path.join(__dirname,'views')); //set view Directory


// Endpoints
app.get('/',(req,res)=>{
    const Content="This is content send via javascript to pug File";
    const Title="This is a title parameter";
    const parameter={'title':Title,'content':Content}
    
    res.status(200).render('index.pug',parameter);
})

// For post
app.post('/',(req,res)=>{    
    console.log(req.body);
    let name=req.body.name;
    let age=req.body.age;
    let email=req.body.email;
    let gender=req.body.gender;
    let address=req.body.address;

    let filecontent=`Name is :${name}\nAge is: ${age}\nEmail is: ${email}\nGender :${gender}\nAddress :${address} `;
    fs.writeFileSync("File_Post_Content.txt",filecontent);

    
    res.status(200).render('index.pug');
})



// Starting Server
app.listen(port,()=>{
    console.log(`Application Successfully Started at Port :${port}`)
});



