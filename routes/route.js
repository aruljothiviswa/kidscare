const express=require('express');
const { isValidObjectId } = require('mongoose');
const router=express.Router();
const Student=require('../models/students');
//const Student=require('..\models\students');


router.get('/students',(req,res,next)=>{
    Student.find(function(err,students){
        res.json(students);
    })   
});

//onst { body: {regnumber,first_name,last_name,dob,gender,father_name,father_phno,mother_name,m } } = req;
router.post('/student',(req,res,next)=>{
    let newStudent= new Student({
        regnumber:req.body.regnumber,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        dob:req.body.dob,
        gender:req.body.gender,
        father_name:req.body.father_name,
        father_phno:req.body.father_phno,
        mother_name:req.body.mother_name,
        mother_phno:req.body.mother_phno,
        address:req.body.address,
        pincode:req.body.pincode
    });
    newStudent.save((err,student)=>{
        if(err){
            res.json({msg:'Failed to add student details'});
        }
        else{
            res.json({msg:'Student details added successfully'});
        }
    });
});

router.delete('/student/:id',(req,res,next)=>{
    Student.remove({_id:req.params.id},function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.put('/student/:id',async(req,res,next)=>{
     try{
       const updatedStudent=await Student.update({_id:req.params.id},
           {$set:{
               regnumber:req.body.regnumber,
                first_name:req.body.first_name,
        last_name:req.body.last_name,
        dob:req.body.dob,
       gender:req.body.gender,
       father_name:req.body.father_name,
        father_phno:req.body.father_phno,
        mother_name:req.body.mother_name,
        mother_phno:req.body.mother_phno,
        address:req.body.address,
       pincode:req.body.pincode
          }});
        res.json(updatedStudent);
    }
   catch(err){
        res.json({message:err});

   }
});

    //router.put(('/student/:id'),(req,res,next)=>{
          // if(!ObjectId.isValid(req.params.id))
        //return res.status(400).send(`No record with given id : ${req.params.id}`);
              
       //var student={
     ////  regnumber:req.body.regnumber,
     //  first_name:req.body.first_name,
   //     last_name:req.body.last_name,
 //       dob:req.body.dob,
        //gender:req.body.gender,
      // father_name:req.body.father_name,
    //   father_phno:req.body.father_phno,
  //     mother_name:req.body.mother_name,
//       mother_phno:req.body.mother_phno,
       //address:req.body.address,
       //pincode:req.body.pincode
        // };
          //Student.findByIdAndUpdate(req.params.id,{$set:student},{new:true},(err,student)=>{
         //    if(!err){        res.send(student);     }
       //  else{
     //        console.log('Error in student update :'+ JSON.stringify(err,undefined,2));
   //      }
 //
     //     });
   //         });
        
module.exports=router;