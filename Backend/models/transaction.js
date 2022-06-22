const mongoose=require('mongoose')

 const Transaction = mongoose.model('Transaction',{
     
    transaction_id:{type:Number},
    
    transaction_type:{type:String},
    
    from_account_no:{type:Number},
    
    to_account_no:{type:String},
    
    transaction_amount:{type:Number},
    transaction_date:{type:Date}
 });

 module.exports = Transaction;