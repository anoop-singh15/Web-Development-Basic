const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost/test',{useNewUrlparse:true,useUnifiedTopology:true})
mongoose.connect('mongodb://127.0.0.1:27017/test_1')

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error......"));
db.once('open',function(){
    console.log("connected.....");
});