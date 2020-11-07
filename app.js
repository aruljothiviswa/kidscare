var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

//const Student=require('../models/students');

var app=express();

const route=require('./routes/route');

mongoose.connect('mongodb://localhost:27017/studentlist');

mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb at 27017');
});
mongoose.connection.on('error',(err)=>{
    if(err){
    console.log('Error in database connection : '+err);
    }
});

const port=3000;

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'frontend')));

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('foobar');
})

app.listen(port,()=>{
    console.log('Server started at port : '+port)
});












