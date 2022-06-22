const express=require('express');
const ObjectId= require('mongoose').Types.ObjectId;

const router=express.Router();
const {Customer}=require('../models/customer');
 
// get Single Customer details  by account_number

router.get('/:cust_id',(req,res)=>{
    const{cust_id}=req.params;
    
     Customer.findOne({account_no},function(err,data){
        if(err){
            console.log('Error i Post Data'+err)
       }
        else{
            res.send(data);
        }
        })
     })
   

// Get Customer details

router.get('/',(req,res)=>{
Customer.find((err,doc)=>{
       if(err){
            console.log('Error i Post Data'+err)
        }
       else{
            res.send(doc);
        }
    });

});

// Add Customer

router.post('/',(req,res)=>{
    let cust=new Customer({
        cust_id:req.body.cust_id,
     cust_name:req.body.cust_name,
     email:req.body.email,
     password:req.body.password,
     phone_no:req.body.phone_no,
     address:req.body.address
    });
    cust.save((err,doc)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(doc)
        }
    });
});
  

//update Customer

    router.put('/:cust_id',function(req,res){
    const {cust_id}=req.params;
     Customer.findOneAndUpdate({account_no},req.body,function(err,data){
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});

// Delete Customer
router.delete('/:account_no',(req,res)=>{
    const {account_no}=req.params;
     Customer.findOneAndRemove({account_no},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});

//get account details by using cust_name
router.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await Customer.find({
        "$or":[
            {
                "cust_name":{
                    $regex:req.params.key
                }}
                                       
        ]
    })
    res.send(data)
})



module.exports=router;