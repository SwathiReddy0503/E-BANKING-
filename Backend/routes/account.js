const express=require('express');
const ObjectId= require('mongoose').Types.ObjectId;

const router=express.Router();
const {Account}=require('../models/account');
 
// get Single Account details  by account_number

router.get('/:account_no',(req,res)=>{
    const{account_no}=req.params;
    
     Account.findOne({account_no},function(err,data){
        if(err){
            console.log('Error i Post Data'+err)
       }
        else{
            res.send(data);
        }
        })
     })
   

// Get Account details

router.get('/',(req,res)=>{
Account.find((err,doc)=>{
       if(err){
            console.log('Error i Post Data'+err)
        }
       else{
            res.send(doc);
        }
    });

});

// Add Account

router.post('/',(req,res)=>{
    let acc=new Account({
        account_no:req.body.account_no,
     holder_name:req.body.holder_name,
     balance:req.body.balance,
     account_type:req.body.account_type,
     phone_no:req.body.phone_no,
     account_pin:req.body.account_pin,
     customer_id:req.body.customer_id,
     ifsc_code:req.body.ifsc_code
     
    });
    acc.save((err,doc)=>{
        if(err){
            console.log('Error i Post Data'+err)
        }
        else{
            res.send(doc)
        }
    });
});
  

//update Account

    router.put('/:account_no',function(req,res){
    const {account_no}=req.params;
     Account.findOneAndUpdate({account_no},req.body,function(err,data){
        if(err){
            console.log('Error in get employee by id'+err)
       }
        else{
            res.send(data);
        }
     });
    
});

// Delete Account
router.delete('/:account_no',(req,res)=>{
    const {account_no}=req.params;
     Account.findOneAndRemove({account_no},(err,doc)=>{
        if(err){
            console.log('Error in delete employee by id'+err)
       }
        else{
            res.send(doc);
        }
     });
    
});

//get account details by using holder_name
router.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await Account.find({
        "$or":[
            {
                "holder_name":{
                    $regex:req.params.key
                }}
                                       
        ]
    })
    res.send(data)
})



module.exports=router;