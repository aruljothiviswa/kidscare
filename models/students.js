const mongoose=require('mongoose');


const StudentSchema=mongoose.Schema({
    regnumber:{
        type:Number,
        required:true
        
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:false
    },
    dob:{
        type:{$toDate:  "dd-MM-YYYY"},
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    father_name:{
        type:String,
        required:true
    },
    father_phno:{
        type:Number,
        required:true
    },
    mother_name:{
        type:String,
        required:true
    },
    mother_phno:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
 });

 const Student= module.exports=mongoose.model('Student', StudentSchema);