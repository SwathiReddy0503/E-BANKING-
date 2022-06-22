const mongoose=require('mongoose')
 const Account=mongoose.model('Account',{
     account_no:{type:Number},
     holder_name:{type:String},
     balance:{type:Number},
     account_type:{type:String},
     phone_no:{type:Number},
     account_pin:{type:Number},
     customer_id:{type:Number},
     ifsc_code:{type:String}
 });
 module.exports={Account};