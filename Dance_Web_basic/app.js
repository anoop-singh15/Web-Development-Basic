const express = require('express');
const path = require("path");
const app = express();
// const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;

// connecting mongoose
mongoose.connect('mongodb://127.0.0.1:27017/DanceContacts');

// Schema for mongodb
var ContactSchema = new mongoose.Schema({
    name:String,
    email: String,
    add: String,
    number: Number
});
// Compiling schema into  model
var Contact = mongoose.model('contact',ContactSchema);





// Express basic stuff 
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// pug basic stuff
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// for get render ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
})

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})


// For post request
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("Successfully Saved to database");
    }).catch(() => {
        res.status(404).send("Unable to save data");
    });
    // res.status(200).render('contact.pug');
    
})


// for listening port 
app.listen(port, () => {
    console.log(`Application started at: ${port}`);
})