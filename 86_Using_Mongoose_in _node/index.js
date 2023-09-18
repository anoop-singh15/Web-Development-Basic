const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test_1');

const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error......"));


db.once('open', function () {
    console.log("connected.....");
});

// After connection we will make an schema to keep track what value are stored inside db
var test_schema = new mongoose.Schema({
    name: String
});

// schema is compiled in an model
// model  first argument becomes plural collection in database
var mobile = mongoose.model('phone', test_schema);

// object
var test_phone = new mobile({ name: 'realme 3' })
// console object name
console.log(test_phone.name);

// to save data in mongo db we  use (.save)function which will take 2 arguments
//  object name and to save and err
 test_phone.save();

//  trial
var test_phone2=new mobile({name:'xiaomi'});
test_phone2.save();

var test_phone3=new mobile({name:'lenovo'});
test_phone3.save();


// Find function using mongoose
mobile.find({ name: 'realme 3' }).then(function(err,docs){
    if(err) return console.error(err);
    console.log(docs);
});

mobile.deleteMany({name : 'realme 3'}).then(function(err,docs){
    if(err) return console.error(err);
    console.log(docs);
});
mobile.deleteMany({name : 'xiaomi'}).then(function(err,docs){
    if(err) return console.error(err);
    console.log(docs);
});


// Just in case if needed findOneAndDelete()



