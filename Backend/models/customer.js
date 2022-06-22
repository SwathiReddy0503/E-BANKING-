const mongoose=require('mongoose')
 const Customer=mongoose.model('Customer',{
     cust_id:{type:Number},
     cust_name:{type:String},
     email:{type:String},
     password:{type:Number},
     phone_no:{type:Number},
     address : [
        "city:{type:String}",
        "state:{type:String}",
        "pincode:{type:Number}"
           ]
      });
 module.exports={Customer};